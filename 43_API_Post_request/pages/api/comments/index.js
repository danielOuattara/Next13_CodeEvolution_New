import { comments } from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ name: "Comments Home API Route", comments });
  } else if (req.method === "POST") {
    const newComment = {
      id: Date.now(),
      text: req.body.comment,
    };
    comments.push(newComment);
    res.status(201).json({ name: "comment added successfully", comments });
  }
}
