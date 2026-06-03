export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();
    const { template_params } = req.body || {};
    if (!template_params)
        return res.status(400).json({ error: "Missing template_params" });

    const serviceId =
        process.env.EMAILJS_SERVICE_ID ||
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId =
        process.env.EMAILJS_TEMPLATE_ID ||
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey =
        process.env.EMAILJS_PUBLIC_KEY ||
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const privateKey =
        process.env.EMAILJS_PRIVATE_KEY || process.env.EMAILJS_API_KEY;

    const missing = [];
    if (!serviceId)
        missing.push("EMAILJS_SERVICE_ID (or NEXT_PUBLIC_EMAILJS_SERVICE_ID)");
    if (!templateId)
        missing.push(
            "EMAILJS_TEMPLATE_ID (or NEXT_PUBLIC_EMAILJS_TEMPLATE_ID)"
        );
    if (!publicKey) {
        missing.push("EMAILJS_PUBLIC_KEY (or NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)");
    }

    if (missing.length > 0) {
        return res.status(500).json({
            error: `Server misconfiguration: missing ${missing.join(", ")}`,
        });
    }

    try {
        const sendRequest = async (withAccessToken) =>
            fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    service_id: serviceId,
                    template_id: templateId,
                    user_id: publicKey,
                    template_params,
                    ...(withAccessToken && privateKey
                        ? { accessToken: privateKey }
                        : {}),
                }),
            });

        let resp = await sendRequest(Boolean(privateKey));
        if (resp.status === 403 && privateKey) {
            // Some setups reject/disable private key auth; retry with public key only.
            resp = await sendRequest(false);
        }

        if (!resp.ok) {
            const text = await resp.text();
            return res.status(resp.status).json({
                error: text || `EmailJS request failed (${resp.status})`,
            });
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}
