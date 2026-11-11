import { useState } from 'react';
import { INSTAGRAM_POSTS } from '../data/aestheticsData';
import { InstagramPost } from '../types';
import { Instagram, Heart, MessageCircle, ExternalLink, X } from 'lucide-react';

export default function InstagramFeed() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8C6D48] font-semibold mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>Visual Moodboard</span>
              <span aria-hidden="true">·</span>
              <span>@aroviaaesthetics</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#24201E] font-normal tracking-tight text-balance">
              Follow our aesthetic journey on Instagram.
            </h2>
          </div>

          <a
            href="https://www.instagram.com/aroviaaesthetics/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#24201E] bg-white border border-[#D8C7B5] rounded-xs hover:border-[#8C6D48] hover:text-[#8C6D48] transition-colors shrink-0 cursor-pointer"
          >
            <Instagram className="w-4 h-4 text-[#8C6D48]" />
            <span>Follow @aroviaaesthetics</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Grid (6 items) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square bg-[#EFE8DE] rounded-xs overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={post.image}
                alt="Arovia Aesthetics Instagram post"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />

              {/* Hover overlay with likes and comment count */}
              <div className="absolute inset-0 bg-[#24201E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 text-white">
                <Instagram className="w-5 h-5 text-[#E2D5C3]" />
                <div className="flex items-center gap-4 text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-strip */}
        <div className="mt-8 text-center text-xs text-[#736B65]">
          <span>Tag your journey with <strong className="text-[#24201E]">#AroviaAesthetics</strong> or explore our daily client case highlights.</span>
        </div>

      </div>

      {/* Post Preview Lightbox Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white border border-[#D8C7B5] rounded-xs max-w-xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 p-1.5 rounded-full text-[#24201E] hover:text-[#8C6D48] transition-colors cursor-pointer"
              aria-label="Close post preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-square max-h-80 bg-[#EFE8DE] overflow-hidden">
              <img
                src={selectedPost.image}
                alt="Instagram post preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F4EFEA]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#D8C7B5] flex items-center justify-center font-serif font-bold text-xs text-[#8C6D48]">
                    AA
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#24201E]">aroviaaesthetics</p>
                    <p className="text-[10px] text-[#736B65]">Arovia Aesthetics Clinic</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#736B65]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>{selectedPost.likes}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-[#736B65]" />
                    <span>{selectedPost.comments}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#443F3C] leading-relaxed font-light mb-6">
                {selectedPost.caption}
              </p>

              <div className="flex items-center justify-between gap-4 pt-3 border-t border-[#F4EFEA]">
                <span className="text-[11px] text-[#736B65]">
                  Official Instagram Broadcast
                </span>

                <a
                  href="https://www.instagram.com/aroviaaesthetics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F2] bg-[#24201E] rounded-xs hover:bg-[#8C6D48] transition-colors"
                >
                  <span>View On Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
