import { comments } from "@/data/comments";

export default function handler(req, res) {
  res.status(200).json({ name: "Comments Home API Route", comments });
}
