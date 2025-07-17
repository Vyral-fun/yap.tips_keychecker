"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function YapEligibilityChecker() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('from') === 'eligibility') {
        setShowPopup(true);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden pb-40">
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#18181b] text-gray-300 rounded-2xl shadow-xl p-6 md:p-10 max-w-lg md:max-w-2xl w-full relative">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-teal-400 transition-colors"
              onClick={() => setShowPopup(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="text-left">
              <div className="text-3xl font-bold mb-4 text-teal-400">🎉 Congratulations 🎉</div>
              <div className="font-bold text-lg mb-6 text-white">You’ve officially made it to the Whitelist for the limited drop of 369 Yap Keys - your front-row pass to the Yap Market <span className='text-teal-400'>🔑</span></div>
              <div className="mb-6 text-base text-gray-400">
                <div className="mb-3">But here’s the deal:</div>
                <div className="mb-3 font-semibold text-white flex items-center gap-2">⏳ <span>First come, first served.</span></div>
                <div className="mb-3">There&apos;s a big whitelist, and once the seats are gone - they&apos;re gone.<br/>Don&apos;t say we didn&apos;t warn you.</div>
                <div className="mb-2 flex items-center gap-2"><span>🗓️</span> <span className="font-bold text-white">Mint Date:</span> <span>July 19</span></div>
                <div className="mb-2 flex items-center gap-2"><span>💰</span> <span className="font-bold text-white">Price:</span> <span>369 USDC</span></div>
                <div className="mb-2 flex items-center gap-2"><span>🔑</span> <span className="font-bold text-white">Collection size:</span> <span>369</span></div>
                <div className="mb-2 flex items-center gap-2"><span>🔗</span> <span className="font-bold text-white">Chain:</span> <span>Base</span></div>
              </div>
              <button
                className="mt-6 w-full bg-teal-400 text-white font-bold py-3 rounded-lg opacity-60 cursor-not-allowed text-lg"
                disabled
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Grid SVG Background */}
      <div className="absolute inset-0 z-1 bg-[url('/Grid.svg')] bg-cover bg-center" />
      {/* Infinite Scrolling SVG Background */}
      <div className="absolute inset-0 z-0 bg-[url('/ScrollWhite.svg')] bg-scroll-vertical" />
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
        <p className="text-gray-300 text-lg tracking-wide" style={{ fontFamily: "var(--font-jersey-15)", fontSize: '36px', opacity: 0.6, marginBottom: '45px' }}>You&apos;ve qualified for the list. Stay tuned for activation or next steps.</p>
      </div>

      {/* Not Eligible Area */}
      <div
        className="flex items-center justify-center mx-auto rounded-2xl z-10 shadow-lg mb-2"
        style={{
          background: '#FFFFFF',
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
          White List
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
        src="/YapKeyWhite.png"
        alt="yap key left"
        width={48}
        height={48}
        className="hidden md:block md:absolute left-[6%] top-1/2 transform -translate-y-1/2 w-12 z-20"
      />
      <Image
        src="/YapKeyWhite.png"
        alt="yap key right"
        width={48}
        height={48}
        className="hidden md:block md:absolute right-[6%] top-1/2 transform -translate-y-1/2 w-12 z-20"
      />
    </div>
  );
}