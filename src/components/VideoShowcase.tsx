"use client";

import React, { useState } from "react";
import { portfolioData, VideoProject } from "@/data/portfolio";
import {
  Play,
  Maximize2,
  X,
  Film,
  Sparkles,
  Smartphone,
  Monitor,
  Tag,
  ExternalLink,
  Layers,
  Settings2,
} from "lucide-react";

export default function VideoShowcase() {
  const [activeFilter, setActiveFilter] = useState<"all" | "16:9" | "9:16">("all");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [modalVideo, setModalVideo] = useState<VideoProject | null>(null);
  const [useLiveDemo, setUseLiveDemo] = useState(false);
  const [customEmbedUrl, setCustomEmbedUrl] = useState("");
  const [editingVideoId, setEditingVideoId] = useState<string | null>(null);

  // Video data with dynamic embed URL resolution
  const [videoList, setVideoList] = useState(portfolioData.videos);

  const getEmbedSource = (video: VideoProject) => {
    // If the user wants to preview live demo reels or has placeholder
    if (useLiveDemo && (video as any).demoVideoId) {
      return `https://www.youtube.com/embed/${(video as any).demoVideoId}?autoplay=1&rel=0`;
    }
    // If user provided a specific embed link
    const base = video.embedUrl;
    if (playingVideoId === video.id || modalVideo?.id === video.id) {
      return base.includes("?") ? `${base}&autoplay=1` : `${base}?autoplay=1`;
    }
    return base;
  };

  const handleUpdateLink = (id: string, newUrl: string) => {
    if (!newUrl.trim()) return;
    setVideoList((prev) =>
      prev.map((v) => (v.id === id ? { ...v, embedUrl: newUrl.trim() } : v))
    );
    setEditingVideoId(null);
  };

  const filteredVideos = videoList.filter((v) => {
    if (activeFilter === "all") return true;
    return v.aspectRatio === activeFilter;
  });

  return (
    <section id="videos" className="relative py-24 bg-dark-900/60 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-navy-700/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/25 text-xs font-semibold text-blue-400">
              <Film className="w-3.5 h-3.5" />
              <span>Motion Graphics & Post-Production</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Video <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-base text-slate-300 max-w-2xl">
              High-impact motion graphics, multi-pass visual compositing, and dynamic commercial video assets. Play directly below or enter full-screen cinema view.
            </p>
          </div>

          {/* Quick Demo Switcher / Instructions Pill */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setUseLiveDemo(!useLiveDemo)}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium border transition-all flex items-center gap-2 ${
                useLiveDemo
                  ? "bg-blue-600 text-white border-blue-400 shadow-blue-soft"
                  : "bg-navy-900/80 text-slate-300 border-blue-500/25 hover:border-blue-400/50"
              }`}
              title="Toggle between user placeholder embed URLs and active public motion reel demos"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{useLiveDemo ? "Showing Active Video Demos" : "Showing User Embed Links"}</span>
            </button>
          </div>
        </div>

        {/* Aspect Ratio Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-blue-500/15">
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-navy-950/80 border border-blue-500/20">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Projects ({videoList.length})
            </button>
            <button
              onClick={() => setActiveFilter("16:9")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "16:9"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>16:9 Cinematic</span>
            </button>
            <button
              onClick={() => setActiveFilter("9:16")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === "9:16"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>9:16 Vertical Reels</span>
            </button>
          </div>

          <span className="text-xs text-slate-400 hidden sm:inline-block">
            Supports YouTube Embeds, 4K Playback & Mobile Touch
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredVideos.map((video) => {
            const isVertical = video.aspectRatio === "9:16";
            const isPlaying = playingVideoId === video.id;

            return (
              <div
                key={video.id}
                className={`group relative rounded-2xl bg-gradient-to-b from-navy-850/90 to-dark-900 border border-blue-500/20 hover:border-blue-400/40 p-4 transition-all duration-300 shadow-card-depth hover:shadow-card-hover flex flex-col ${
                  isVertical ? "md:col-span-1 lg:max-w-sm mx-auto w-full" : ""
                }`}
              >
                {/* Video Player Container */}
                <div
                  className={`relative w-full rounded-xl overflow-hidden bg-black border border-blue-500/15 ${
                    isVertical ? "aspect-[9/16]" : "aspect-video"
                  }`}
                >
                  {isPlaying ? (
                    <iframe
                      src={getEmbedSource(video)}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      {/* Thumbnail Poster */}
                      {video.thumbnailUrl && (
                        <img
                          src={video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/40 to-transparent" />

                      {/* Aspect Ratio Badge */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-navy-950/90 backdrop-blur-md border border-blue-500/30 text-[11px] font-bold text-blue-300 flex items-center gap-1.5">
                        {isVertical ? (
                          <>
                            <Smartphone className="w-3 h-3 text-blue-400" />
                            <span>9:16 Reel</span>
                          </>
                        ) : (
                          <>
                            <Monitor className="w-3 h-3 text-blue-400" />
                            <span>16:9 Showcase</span>
                          </>
                        )}
                      </div>

                      {/* Duration Badge */}
                      {video.duration && (
                        <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-dark-950/80 text-[11px] font-mono text-slate-300">
                          {video.duration}
                        </div>
                      )}

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={() => setPlayingVideoId(video.id)}
                          aria-label={`Play ${video.title}`}
                          className="w-14 h-14 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white flex items-center justify-center shadow-blue-glow hover:scale-110 transition-all duration-200 backdrop-blur-sm border border-blue-300/40"
                        >
                          <Play className="w-6 h-6 fill-white ml-0.5" />
                        </button>
                      </div>

                      {/* Bottom Banner on Thumbnail */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
                        <span className="font-semibold text-white truncate pr-2">
                          Click to Play Embed
                        </span>
                        <span className="text-[11px] text-blue-400 bg-navy-900/90 px-2 py-0.5 rounded">
                          {video.client || "Work"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info Content */}
                <div className="pt-4 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <button
                        onClick={() => setModalVideo(video)}
                        title="Expand in Cinema Modal"
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-navy-800 transition-colors flex-shrink-0"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-300/90 mt-2 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 pt-3 border-t border-blue-500/15">
                    <div className="flex flex-wrap gap-1.5">
                      {video.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-navy-900 border border-blue-500/15 text-blue-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Embed URL info & Quick Edit toggle */}
                    <div className="mt-3 pt-2 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="font-mono text-[10px] truncate max-w-[200px]" title={video.embedUrl}>
                        {video.embedUrl}
                      </span>
                      <button
                        onClick={() => {
                          setEditingVideoId(editingVideoId === video.id ? null : video.id);
                          setCustomEmbedUrl(video.embedUrl);
                        }}
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium"
                      >
                        <Settings2 className="w-3 h-3" />
                        <span>Edit Link</span>
                      </button>
                    </div>

                    {/* Inline Link Edit Box */}
                    {editingVideoId === video.id && (
                      <div className="mt-2 p-2.5 rounded-lg bg-navy-950 border border-blue-500/30 space-y-2">
                        <label className="block text-[10px] font-semibold text-slate-300">
                          Paste YouTube Embed Link:
                        </label>
                        <div className="flex gap-1.5">
                          <input
                            type="text"
                            value={customEmbedUrl}
                            onChange={(e) => setCustomEmbedUrl(e.target.value)}
                            placeholder="https://www.youtube.com/embed/YOUR_ID"
                            className="w-full text-xs px-2 py-1 rounded bg-navy-900 border border-blue-500/20 text-white focus:outline-none focus:border-blue-400"
                          />
                          <button
                            onClick={() => handleUpdateLink(video.id, customEmbedUrl)}
                            className="px-2.5 py-1 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cinema Modal */}
      {modalVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl rounded-2xl bg-dark-900 border border-blue-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-blue-500/15 bg-navy-950/80">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-400/30">
                  <Film className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {modalVideo.title}
                  </h4>
                  <span className="text-xs text-blue-400">
                    {modalVideo.aspectRatio === "9:16" ? "9:16 Vertical Reel Mode" : "16:9 Cinema Mode"}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setModalVideo(null)}
                aria-label="Close cinema modal"
                className="p-2 rounded-lg bg-navy-800 text-slate-300 hover:text-white hover:bg-navy-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Large Video Frame */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-grow flex flex-col items-center justify-center bg-black/70">
              <div
                className={`w-full rounded-xl overflow-hidden border border-blue-500/20 shadow-2xl ${
                  modalVideo.aspectRatio === "9:16"
                    ? "max-w-sm aspect-[9/16]"
                    : "max-w-4xl aspect-video"
                }`}
              >
                <iframe
                  src={getEmbedSource(modalVideo)}
                  title={modalVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Description & Metadata under player */}
              <div className="w-full max-w-4xl mt-6 p-4 rounded-xl bg-navy-950/70 border border-blue-500/15 text-left">
                <h5 className="text-sm font-bold text-white mb-1">Project Technical Notes:</h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {modalVideo.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {modalVideo.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded bg-navy-800 border border-blue-500/20 text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
