import { getLanguages } from "../services/languagesService.js";

export function languagesList(req, res) {
  const langs = getLanguages();
  res.json({ message: "success", data: langs });
}
