import React from "react";

export default function HowItWorksStep({ step, text }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="text-blue-600 text-3xl font-bold mb-2">Step {step}</div>
      <p>{text}</p>
    </div>
  );
}
