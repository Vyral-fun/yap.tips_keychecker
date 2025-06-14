"use client";

import React, { useState } from 'react';

export default function YapEligibilityChecker() {
  const [walletAddress, setWalletAddress] = useState('');

  const handleCheck = () => {
    alert(`Checking eligibility for: ${walletAddress}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Grid SVG Background */}
      <div className="absolute inset-0 z-1 bg-[url('/Grid.svg')] bg-cover bg-center" />
      {/* Infinite Scrolling SVG Background */}
      <div className="absolute inset-0 z-0 bg-[url('/ScrollWhite.svg')] bg-scroll-vertical" />
      {/* Background grid lines */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] z-0" /> */}

      {/* Logo */}
      <div className="absolute top-0 left-0 w-full flex justify-center pt-[5vh] z-20 pointer-events-none">
        <img
          src="/apmarket.png"
          alt="ap.market"
          className="w-28"
        />
      </div>

      {/* Title and Subtitle */}
      <div className="text-center z-10">
        <h1 className="text-4xl tracking-wide mb-2 drop-shadow-lg" style={{ fontFamily: "'Jersey 15', cursive", fontSize: '48px', marginBottom: '17px' }}>Yap Key Eligibility Status</h1>
        <p className="text-gray-300 text-lg tracking-wide" style={{ fontFamily: "'Jersey 15', cursive", fontSize: '36px', opacity: 0.6, marginBottom: '45px' }}>You've qualified for the list. Stay tuned for activation or next steps.</p>
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
            fontFamily: "'Jersey 20', cursive",
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

      {/* Character Image */}
      <img
        src="/character.png"
        alt="character"
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-80 z-10 drop-shadow-2xl pointer-events-none"
      />

      {/* Side Labels */}
      <img
        src="/YapKeyWhite.png"
        alt="yap key left"
        className="absolute left-[6%] top-1/2 transform -translate-y-1/2 w-12 z-10"
      />
      <img
        src="/YapKeyWhite.png"
        alt="yap key right"
        className="absolute right-[6%] top-1/2 transform -translate-y-1/2 w-12 z-10"
        />
    </div>
  );
}