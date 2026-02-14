import { getHomeData } from "../services/homeService.js";

export function homeData(req, res) {
  const data = getHomeData();
  res.json({ message: "success", data });
}
