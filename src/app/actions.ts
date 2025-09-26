"use server";

import { aiPoweredStyleCheck } from "@/ai/flows/ai-powered-style-check";
import { personalInfo, services } from "@/lib/data";

export async function getStyleSuggestions() {
  try {
    const suggestions = await aiPoweredStyleCheck({
      name: personalInfo.name,
      tagline: personalInfo.tagline,
      aboutMe: personalInfo.aboutMe,
      services: services.map((s) => s.title).join(", "),
      designStyle:
        "Expensive and premium look (luxury consultant / high-end SaaS vibe). Dark mode first design with elegant colors: deep navy, black, and emerald accents. Use glassmorphism, gradients, and smooth shadows. Bold typography with modern sans-serif fonts (Poppins). Smooth micro-animations and hover effects. High contrast CTAs (e.g., emerald glowing buttons).",
    });
    return suggestions.suggestions;
  } catch (error) {
    console.error("AI Style Check Error:", error);
    return "Failed to get suggestions. Please check the server logs for more details.";
  }
}
