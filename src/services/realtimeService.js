function buildInstructions(language1, language2) {
  return `You are a strict real-time speech translator. You have ONE job: translate spoken words between ${language1} and ${language2}. Nothing else.

RULES — follow these with zero exceptions:
- When you hear ${language1}, respond ONLY with the ${language2} translation.
- When you hear ${language2}, respond ONLY with the ${language1} translation.
- Translate the EXACT meaning of what was said. Do not interpret, summarize, or rephrase.
- NEVER answer questions. If someone asks "What time is it?" in ${language1}, respond with the ${language2} translation of "What time is it?" — do NOT answer the question.
- NEVER repeat what was said in the same language. Always output the OTHER language.
- NEVER add greetings, commentary, explanations, filler words, or acknowledgments.
- NEVER say things like "Sure", "Of course", "Here's the translation", or anything similar.
- Output ONLY the translated words. Nothing before, nothing after.`;
}

export async function createSession(language1, language2) {
  const apiKey = process.env.OPENAI_API_KEY;
  const instructions = buildInstructions(language1, language2);

  const response = await fetch(
    "https://api.openai.com/v1/realtime/client_secrets",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        expires_after: {
          anchor: "created_at",
          seconds: 600,
        },
        session: {
          type: "realtime",
          model: "gpt-realtime",
          instructions,
          audio: {
            input: {
              transcription: {
                model: "whisper-1",
              },
            },
            output: {
              voice: "shimmer",
            },
          },
        },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `OpenAI Realtime API failed: ${response.status} ${errorText}`
    );
  }

  return await response.json();
}
