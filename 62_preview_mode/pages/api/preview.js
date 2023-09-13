export default function handler(req, res) {
  res.setPreviewData({ user: "Daniel" });
  //   res.end("Preview mode enabled");
  res.redirect(req.query.redirect);
}
