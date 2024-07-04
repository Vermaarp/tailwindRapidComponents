"use client"

import React, { useState } from "react";
import "@/styles/styles.css";

const GlassCard = () => {
  const imageUrl =
    "https://images.pexels.com/photos/63280/moto-cross-motorbike-sports-jump-63280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const [copied, setCopied] = useState(false);

  // Function to handle copying the code snippet
  const handleCopyClick = () => {
    const codeSnippet = `
import React from "react";
import "@/styles/styles.css";

const GlassCard = () => {
  const imageUrl =
    "https://images.pexels.com/photos/63280/moto-cross-motorbike-sports-jump-63280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="mx-auto topSection h-screen">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-xl bg-opacity-20 rounded-xl overflow-hidden w-auto max-w-5xl shadow-lg m-4 lg:m-6">
          <div className="rounded-xl overflow-hidden p-16">
            <img
              src={imageUrl}
              alt="Random Image"
              className="w-96 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
    `;

    navigator.clipboard.writeText(codeSnippet)
      .then(() => setCopied(true))
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <div className="mx-auto topSection h-fit pb-5">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-xl bg-opacity-20 rounded-xl overflow-hidden w-auto max-w-5xl shadow-lg m-4 lg:m-6">
          <div className="rounded-xl overflow-hidden p-16">
            <img
              src={imageUrl}
              alt="Random Image"
              className="w-96 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Code Block */}
      <div className="flex justify-center items-center mt-4">
        <div className="relative">
          <button
            onClick={handleCopyClick}
            className="absolute right-4 top-4 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto w-full max-w-5xl">
            <code>
              {`
import React from "react";
import "@/styles/styles.css";

const GlassCard = () => {
  const imageUrl =
    "https://images.pexels.com/photos/63280/moto-cross-motorbike-sports-jump-63280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  return (
    <div className="mx-auto topSection h-screen">
      <div className="flex justify-center items-center">
        <div className="flex flex-col lg:flex-row bg-white backdrop-filter backdrop-blur-xl bg-opacity-20 rounded-xl overflow-hidden w-auto max-w-5xl shadow-lg m-4 lg:m-6">
          <div className="rounded-xl overflow-hidden p-16">
            <img
              src={imageUrl}
              alt="Random Image"
              className="w-96 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
