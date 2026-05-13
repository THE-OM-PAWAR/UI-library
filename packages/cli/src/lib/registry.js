const REPO = "THE-OM-PAWAR/UI-library";
const BRANCH = "main";
const RAW_BASE = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/apps/docs/content/docs`;
const API_BASE = `https://api.github.com/repos/${REPO}/contents/apps/docs/content/docs`;

let _cache = null;

async function fetchJSON(url) {
    const res = await fetch(url, {
        headers: { Accept: "application/vnd.github.v3+json" },
    });
    if (!res.ok) return null;
    return res.json();
}

export async function getAllComponents() {
    if (_cache) return _cache;

    const entries = await fetchJSON(API_BASE);
    if (!Array.isArray(entries)) {
        throw new Error("Failed to fetch component registry from GitHub.");
    }

    const jsonFiles = entries.filter((e) => e.name.endsWith(".json"));

    const components = await Promise.all(
        jsonFiles.map(async (entry) => {
            const slug = entry.name.replace(".json", "");
            const data = await fetchJSON(`${RAW_BASE}/${entry.name}`);
            if (!data) return null;
            return { slug, ...data };
        })
    );

    _cache = components
        .filter(Boolean)
        .sort((a, b) => a.title.localeCompare(b.title));

    return _cache;
}

export async function getComponent(slug) {
    const normalised = slug.toLowerCase().replace(/\s+/g, "-");

    const data = await fetchJSON(`${RAW_BASE}/${normalised}.json`);
    if (data) return { slug: normalised, ...data };

    const stripped = normalised.replace(/-/g, "");
    const data2 = await fetchJSON(`${RAW_BASE}/${stripped}.json`);
    if (data2) return { slug: stripped, ...data2 };

    return null;
}
