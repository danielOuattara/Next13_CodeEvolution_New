export default function handler(req, res) {
  res.clearPreviewData();
  res.end("preview Mode Disabled");
}
