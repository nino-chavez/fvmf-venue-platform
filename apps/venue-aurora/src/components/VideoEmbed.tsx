'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VideoEmbedProps {
  videos: Array<{
    url: string;
    embedUrl?: string;
    thumbnailUrl?: string;
  }>;
}

function getVideoEmbedUrl(url: string | undefined): string | null {
  if (!url) return null;

  // YouTube
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
  }

  return null;
}

function getVideoThumbnail(url: string | undefined): string | null {
  if (!url) return null;

  // YouTube thumbnail
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch) {
    return `https://img.youtube.com/vi/${youtubeMatch[1]}/maxresdefault.jpg`;
  }

  return null;
}

export function VideoEmbed({ videos }: VideoEmbedProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  if (videos.length === 0) return null;

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Videos
      </h2>
      <div className="space-y-4">
        {videos.map((video, index) => {
          const embedUrl = video.embedUrl || getVideoEmbedUrl(video.url);
          const thumbnail = video.thumbnailUrl || getVideoThumbnail(video.url);
          const isPlaying = playingIndex === index;

          if (!embedUrl) {
            // Fallback: link to external video
            return (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-neutral-800 rounded-xl hover:bg-neutral-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">Watch Video</p>
                    <p className="text-neutral-400 text-sm truncate">{video.url}</p>
                  </div>
                  <svg className="w-5 h-5 text-neutral-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            );
          }

          return (
            <div key={index} className="relative aspect-video rounded-xl overflow-hidden bg-neutral-800">
              {isPlaying ? (
                <iframe
                  src={`${embedUrl}?autoplay=1`}
                  title={`Event video ${index + 1}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlayingIndex(index)}
                  className="absolute inset-0 w-full h-full group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                >
                  {thumbnail ? (
                    <Image
                      src={thumbnail}
                      alt={`Video thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900" />
                  )}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
