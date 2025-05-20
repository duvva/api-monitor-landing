import React, { useState, forwardRef } from "react";

const EmailSignupForm = forwardRef(function EmailSignupForm(_, inputRef) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;
    setStatus("loading");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwgtf4GhXcGXE_CCpMjO1LazWLKseBAlo3OkIMlv31lk_vI-MSoOonyAhvG3GlwWTH3NA/exec",
        {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({ email }),
        }
      );

      const result = await response.json();
      if (result.status === "success") {
        setStatus("success");
        setEmail(""); // clear input on success
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
      >
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={inputRef}
          required
          className="px-4 py-2 rounded-lg border border-gray-300 w-full sm:w-auto"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {status === "loading" ? "Submitting..." : "Notify Me"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-600 mt-2">You're on the list! 🎉</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-2">Something went wrong. Try again!</p>
      )}
    </div>
  );
});

export default EmailSignupForm;
