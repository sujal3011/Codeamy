import * as fs from 'fs'

export default function handler(req, res) {
  fs.readFile(`blog_data/${req.query.slug}.json`, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({"error":"No blogs found"});
      return;
    }
    res.status(200).json(JSON.parse(data));
  });

    
}