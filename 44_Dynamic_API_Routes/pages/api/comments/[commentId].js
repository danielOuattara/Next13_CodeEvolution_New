import { comments } from "@/data/comments";

export default function handler(req, res) {
  const selectedComment = comments.find(
    (item) => item.id === req.query.commentId,
  );

  res.status(200).json(selectedComment);
}
