import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col justify-center items-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#7f5af0]">
        Welcome to TrustChain
      </h1>

      <p className="text-lg md:text-xl max-w-2xl mb-6 text-gray-300">
        Revolutionizing trust in Bitcoin transactions through decentralized reputation.
      </p>

      <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-4">
        TrustChain is a decentralized reputation system built on Bitcoin, allowing users to earn and assess trust through on-chain interactions.
        With real-time reputation scores, transparent audit logs, and trust-based staking, we bring credibility to the open economy.
      </p>

      <div className="text-sm md:text-base text-gray-500 max-w-2xl text-left mb-4">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Reputation Scoring:</strong> Vote trust or distrust directly through Bitcoin transactions.</li>
          <li><strong>Staking System:</strong> Stake to vouch for trustworthy peers or build your own reputation.</li>
          <li><strong>Audit Log:</strong> Full transparency of trust/distrust votes in real time.</li>
          <li><strong>Decay Logic:</strong> Time-sensitive scores that reflect long-term credibility.</li>
        </ul>
      </div>

      <p className="text-sm md:text-base text-gray-500 max-w-2xl mb-4">
        Use the top navigation to explore dashboards, stake reputation, audit votes, and more. Every section is designed for clarity, speed, and real-time visibility.
      </p>

      <p className="text-base md:text-lg font-medium text-gray-300 max-w-2xl">
        TrustChain is your gateway to a transparent, trustworthy decentralized future.
      </p>
    </div>
  );
};

export default Home;
