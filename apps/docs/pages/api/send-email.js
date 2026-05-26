export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { template_params } = req.body || {};
  if (!template_params) return res.status(400).json({ error: 'Missing template_params' });
  if (!process.env.EMAILJS_API_KEY) return res.status(500).json({ error: 'Server misconfiguration: missing EMAILJS_API_KEY' });

  try {
    const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.EMAILJS_API_KEY}`
      },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        template_params
      })
    });

    if (!resp.ok) {
      const text = await resp.text();
      return res.status(resp.status).json({ error: text });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
