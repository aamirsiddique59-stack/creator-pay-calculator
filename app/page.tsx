"use client";

import { useState } from "react";

export default function Home() {
  const [platform, setPlatform] = useState("tiktok");
  const [followers, setFollowers] = useState(10000);
  const [engagement, setEngagement] = useState(5);

  const calculatePrice = () => {
    let baseRate = 0;

    if (platform === "tiktok") baseRate = 0.012;
    if (platform === "instagram") baseRate = 0.018;
    if (platform === "youtube") baseRate = 0.03;

    let price = followers * baseRate;

    const engagementMultiplier = 1 + engagement / 10;
    price *= engagementMultiplier;

    const low = Math.round(price * 0.7);
    const high = Math.round(price * 1.3);

    return { low, high };
  };

  const result = calculatePrice();

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

        <h1 className="text-2xl font-bold text-center mb-6">
          💸 Creator Pay Calculator
        </h1>

        <label className="text-sm font-medium">Platform</label>
        <select
          className="w-full border p-2 rounded-lg mb-4"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="tiktok">TikTok</option>
          <option value="instagram">Instagram</option>
          <option value="youtube">YouTube</option>
        </select>

        <label className="text-sm font-medium">Followers</label>
        <input
          className="w-full border p-2 rounded-lg mb-4"
          type="number"
          value={followers}
          onChange={(e) => setFollowers(Number(e.target.value))}
        />

        <label className="text-sm font-medium">Engagement Rate (%)</label>
        <input
          className="w-full border p-2 rounded-lg mb-6"
          type="number"
          value={engagement}
          onChange={(e) => setEngagement(Number(e.target.value))}
        />

        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Estimated Price</p>
          <p className="text-2xl font-bold text-purple-700">
            ${result.low} – ${result.high}
          </p>
        </div>

      </div>
    </main>
  );
}