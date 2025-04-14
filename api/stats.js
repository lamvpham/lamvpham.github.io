export default async function handler(req, res) {
    const umamiScript = await fetch('https://cloud.umami.is/script.js').then(r => r.text());
    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for an hour
    res.status(200).send(umamiScript);
  }