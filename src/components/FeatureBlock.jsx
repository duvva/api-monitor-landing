import React from "react";

export default function FeatureBlock({ text }) {
  return (
    <div className="bg-gray-100 rounded-2xl px-6 py-4 shadow-sm">
      {text}
    </div>
  );
}