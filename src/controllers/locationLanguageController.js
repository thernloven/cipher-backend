import { getLocationLanguage } from "../services/locationLanguageService.js";

export async function locationLanguageHandler(req, res) {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Latitude and longitude are required." });
  }

  const result = await getLocationLanguage(lat, lon);

  if (result.error) {
    return res.status(500).json({ error: result.error });
  }

  res.json(result);
}
