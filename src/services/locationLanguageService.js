import axios from "axios";
import OpenAI from "openai";
import { getLanguages } from "./languagesService.js";

let openai;
function getOpenAI() {
  if (!openai) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return openai;
}

async function getTimezoneFromLocation(lat, lon) {
  try {
    const response = await axios.get("http://api.weatherapi.com/v1/timezone.json", {
      params: {
        q: `${lat},${lon}`,
        key: process.env.WEATHER_API_KEY,
      },
    });

    return response.data?.location?.tz_id || null;
  } catch (error) {
    console.error("[LocationService] Error fetching timezone:", error.message);
    return null;
  }
}

async function getLanguageForTimezone(timezone) {
  const languages = getLanguages();

  const messages = [
    {
      role: "system",
      content: "You are an AI that maps timezones to the most commonly spoken language in that region.",
    },
    {
      role: "user",
      content: `Match the timezone "${timezone}" to the most relevant language from this list: ${languages
        .map((lang) => lang.name)
        .join(", ")}. Return only the language name.`,
    },
  ];

  try {
    const response = await getOpenAI().chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      max_tokens: 20,
    });

    const matchedLanguage = response.choices[0]?.message?.content.trim();

    return languages.find((lang) => lang.name.toLowerCase() === matchedLanguage.toLowerCase()) || null;
  } catch (error) {
    console.error("[OpenAI] Error determining language:", error.message);
    return null;
  }
}

export async function getLocationLanguage(lat, lon) {
  const timezone = await getTimezoneFromLocation(lat, lon);
  if (!timezone) {
    return { error: "Could not determine timezone." };
  }

  const language = await getLanguageForTimezone(timezone);
  if (!language) {
    return { error: "Could not determine language." };
  }

  return {
    timezone,
    language,
  };
}
