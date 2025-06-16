"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function YapEligibilityChecker() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Grid SVG Background */}
      <div className="absolute inset-0 z-1 bg-[url('/Grid.svg')] bg-cover bg-center" />
      {/* Infinite Scrolling SVG Background */}
      <div className="absolute inset-0 z-0 bg-[url('/ScrollYellow.svg')] bg-scroll-vertical" />
      {/* Background grid lines */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] z-0" /> */}

      {/* Logo */}
      <div className="absolute top-0 left-0 w-full flex justify-center pt-[5vh] z-20 pointer-events-none">
        <Image
          src="/apmarket.png"
          alt="ap.market"
          width={112}
          height={112}
          className="w-28"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center z-10">
        <h1 className="text-4xl tracking-wide mb-2 drop-shadow-lg" style={{ fontFamily: "var(--font-jersey-15)", fontSize: '48px', marginBottom: '17px' }}>Yap Key Eligibility Status</h1>
        <p className="text-gray-300 text-lg tracking-wide" style={{ fontFamily: "var(--font-jersey-15)", fontSize: '36px', opacity: 0.6, marginBottom: '45px' }}>Congratulations! You&apos;re cleared to hold Yap Key</p>
      </div>

      {/* Not Eligible Area */}
      <div
        className="flex items-center justify-center mx-auto rounded-2xl z-10 shadow-lg mb-2"
        style={{
          background: '#FBC031',
          width: '340px',
          height: '82px',
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jersey-20)",
            fontSize: '36px',
            color: 'Black',
            width: '100%',
            textAlign: 'center',
            display: 'block',
          }}
        >
          Allow List
        </span>
      </div>

      {/* Check Another Button */}
      <button
        onClick={() => router.push('/')}
        className="mt-8 bg-[#232323] hover:bg-[#333] text-white px-8 py-3 rounded-full border border-gray-600 font-semibold shadow text-lg z-20"
        style={{ fontFamily: "var(--font-jersey-15)" }}
      >
        Check Another
      </button>

      {/* Character Image */}
      <Image
        src="/character.png"
        alt="character"
        width={320}
        height={320}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-80 z-10 drop-shadow-2xl pointer-events-none"
      />

      {/* Side Labels */}
      <Image
        src="/YapKeyYellow.png"
        alt="yap key left"
        width={48}
        height={48}
        className="absolute left-[6%] top-1/2 transform -translate-y-1/2 w-12 z-10"
      />
      <Image
        src="/YapKeyYellow.png"
        alt="yap key right"
        width={48}
        height={48}
        className="absolute right-[6%] top-1/2 transform -translate-y-1/2 w-12 z-10"
      />
    </div>
  );
}