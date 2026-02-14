import { createSession } from "../services/realtimeService.js";

export async function createRealtimeSession(req, res) {
  try {
    const { language1, language2 } = req.body;

    if (!language1 || !language2) {
      return res.status(400).json({
        success: false,
        error: "language1 and language2 are required",
      });
    }

    const sessionData = await createSession(language1, language2);

    res.json({
      success: true,
      data: {
        ephemeral_key: sessionData.client_secret.value,
        expires_at: sessionData.client_secret.expires_at,
        session_id: sessionData.id,
        model: sessionData.model,
        voice: sessionData.voice,
      },
    });
  } catch (error) {
    console.error(`Error in createRealtimeSession: ${error}`);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Internal server error",
    });
  }
}
