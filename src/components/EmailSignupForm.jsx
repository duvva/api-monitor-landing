import React from "react";

export default function EmailSignupForm() {
  return (
    <form
      name="waitlist"
      method="POST"
      data-netlify="true"
      className="flex flex-col sm:flex-row justify-center items-center gap-4"
    >
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        className="px-4 py-2 rounded-lg border border-gray-300 w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Notify Me
      </button>
    </form>
  );
}