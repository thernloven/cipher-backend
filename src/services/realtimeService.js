function buildInstructions(language1, language2) {
  return `You are a real-time interpreter. The user will speak in either ${language1} or ${language2}.
When they speak in ${language1}, translate and respond ONLY in ${language2}.
When they speak in ${language2}, translate and respond ONLY in ${language1}.
Only output the translated speech. Do not add commentary, explanations, or greetings.`;
}

export async function createSession(language1, language2) {
  const apiKey = process.env.OPENAI_API_KEY;
  const instructions = buildInstructions(language1, language2);

  const response = await fetch(
    "https://api.openai.com/v1/realtime/sessions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-realtime-preview",
        voice: "shimmer",
        instructions,
        input_audio_transcription: {
          model: "whisper-1",
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
