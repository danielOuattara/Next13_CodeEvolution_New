import { comments } from "@/data/comments";

export default function handler(req, res) {
  const comment = comments.find((item) => item.id === req.query.commentId);

  if (req.method === "GET") {
    res.status(200).json({ comment });
  } else if (req.method === "DELETE") {
    const selectCommentIndex = comments.findIndex(
      (item) => item.id === req.query.commentId,
    );

    comments.splice(selectCommentIndex, 1);
    res.status(200).json(comments);
  } else if (req.method === "PATCH") {
    const selectCommentIndex = comments.findIndex(
      (item) => item.id === req.query.commentId,
    );
    comments[selectCommentIndex].text = req.body.text;
    res.status(200).json(comments);
  }
}
