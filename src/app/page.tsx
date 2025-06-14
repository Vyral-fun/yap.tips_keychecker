"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function YapEligibilityChecker() {
  const [walletAddress, setWalletAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleCheck = async () => {
    if (!walletAddress.trim()) {
      setError('Please enter a wallet address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/check-eligibility', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: walletAddress }),
      });

      const data = await response.json();
      console.log('Received data:', data); // Debug log

      if (!response.ok) {
        throw new Error(data.error || 'Failed to check eligibility');
      }

      // Redirect to the page specified in the response
      if (data.redirectPage) {
        console.log('Redirecting to:', data.redirectPage); // Debug log
        router.push(`/${data.redirectPage}`);
      } else {
        console.log('No redirect page specified, defaulting to not-eligible'); // Debug log
        router.push('/not-eligible');
      }
    } catch (err) {
      console.error('Error:', err); // Debug log
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Grid SVG Background */}
      <div className="absolute inset-0 z-1 bg-[url('/Grid.svg')] bg-cover bg-center" />
      {/* Infinite Scrolling SVG Background */}
      <div className="absolute inset-0 z-0 bg-scroll-vertical" />
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
        <p className="text-gray-300 text-lg tracking-wide" style={{ fontFamily: "'Jersey 15', cursive", fontSize: '36px', opacity: 0.6, marginBottom: '45px' }}>Paste your wallet address to check eligibility status</p>
      </div>

      {/* Input and Button */}
      <div className="bg-[#1c1c1c]/80 p-6 rounded-2xl w-[370px] flex flex-col items-center gap-4 z-10 shadow-lg mb-2">
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="0x0000000000abcdef1...34078"
          className="bg-black/80 text-gray-300 px-4 py-2 w-full rounded-full placeholder-gray-600" style={{ fontSize: '18px' }}
        />
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        <button
          onClick={handleCheck}
          disabled={isLoading}
          className={`bg-[#232323] hover:bg-[#333] text-white px-4 py-2 w-full rounded-full border border-gray-600 font-semibold shadow ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          style={{ fontSize: '18px' }}
        >
          {isLoading ? 'Checking...' : 'Check'}
        </button>
      </div>

      {/* Character Image */}
      <img
        src="/character.png"
        alt="character"
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-80 z-10 drop-shadow-2xl pointer-events-none"
      />

      {/* Side Labels */}
      <img
        src="/Yapkey.png"
        alt="yap key left"
        className="absolute left-[6%] top-1/2 transform -translate-y-1/2 w-12 z-10"
      />
      <img
        src="/Yapkey.png"
        alt="yap key right"
        className="absolute right-[6%] top-1/2 transform -translate-y-1/2 w-12 z-10"
      />
    </div>
  );
}