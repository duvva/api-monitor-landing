import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import EmailSignupForm from "../components/EmailSignupForm";
import FeatureBlock from "../components/FeatureBlock";
import PricingCard from "../components/PricingCard";
import HowItWorksStep from "../components/HowItWorksStep";
import initPostHog from "../lib/posthog";

export default function LandingPage() {
  const emailInputRef = useRef(null);

  useEffect(() => {
    initPostHog();
  }, []);

  const handleJoinWaitlistClick = () => {
    if (emailInputRef.current) {
      emailInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      emailInputRef.current.focus({ preventScroll: true });
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          🔒 Keep Your APIs Alive — and Auth Working
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
          Real-time monitoring for API uptime & JWT token expiration. Get notified before things break.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition">
            Start Free Trial
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl hover:bg-blue-100 transition"
            onClick={handleJoinWaitlistClick}>
            Join the Waitlist
          </button>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto grid gap-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Why devs love it</h2>
          {["Know immediately if an API goes down","Monitor and refresh JWT tokens before expiry","Slack, Email, or Webhook alerts","Zero-config dashboard — no DevOps required"].map((feature, index) => (
            <FeatureBlock key={index} text={feature} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {["Add your API endpoints + JWTs","Set intervals & alerts","Relax — we’ll ping & notify you"].map((step, index) => (
            <HowItWorksStep key={index} step={index + 1} text={step} />
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">Simple Pricing</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <PricingCard
            title="Free"
            description="Perfect for testing and small projects"
            features={["3 API checks","1 JWT monitor","Email alerts","Hourly checks"]}
            buttonText="Start Free"
            highlight={false}
          />
          <PricingCard
            title="Pro — $9/mo"
            description="For growing apps and serious monitoring"
            features={["15 API & 5 JWTs","Slack/Webhook alerts","Token refresh support","5-min checks"]}
            buttonText="Go Pro"
            highlight={true}
          />
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">Be the first to get early access</h2>
        <EmailSignupForm ref={emailInputRef} />
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-6 text-gray-500">
        © 2025 API Monitor. Built for devs who don't want surprises.
      </footer>
    </div>
  );
}
