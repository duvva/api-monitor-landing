export default function initPostHog() {
  if (typeof window !== "undefined") {
    const script = document.createElement("script");
    script.src = "https://us.i.posthog.com/static/array.js";
    script.async = true;
    script.onload = () => {
      if (window.posthog) {
        window.posthog.init("phc_nNBM30VGqy6lFWsiy3Ig5lQUGls9GptzKvv3NmKh8OT", {
          api_host: "https://us.i.posthog.com",
          person_profiles: "identified_only",
        });
      }
    };
    document.head.appendChild(script);
  }
}
