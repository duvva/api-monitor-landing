import React from "react";

export default function PricingCard({ title, description, features, buttonText, highlight }) {
  return (
    <div className={`p-6 rounded-2xl shadow-md ${highlight ? "border-2 border-blue-600" : "border"}`}>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>
      <ul className="text-left mb-6 space-y-2">
        {features.map((item, i) => (
          <li key={i} className="before:content-['✔'] before:mr-2 text-sm">{item}</li>
        ))}
      </ul>
      <button className={`px-4 py-2 rounded-md ${highlight ? "bg-blue-600 text-white" : "border border-blue-600 text-blue-600"}`}>
        {buttonText}
      </button>
    </div>
  );
}
