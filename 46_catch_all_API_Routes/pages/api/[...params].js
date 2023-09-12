export default function handler(req, res) {
  const params = req.query.params;
  console.log("params = ", params);
  res.status(200).json({ params });
}

/* 

[...params]  =  catch all routes API
[[...params]]  =  optional catch all routes API

*/
