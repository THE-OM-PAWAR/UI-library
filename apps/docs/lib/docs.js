import { demoRegistry } from "../registry";

// Get all available docs
export function getAllDocs() {
    return ["button"];
}

// Get documentation data by slug
export async function getDocBySlug(slug) {
    try {
        const docData = await import(`../content/docs/${slug}.json`);
        return docData.default;
    } catch (_error) {
        return null;
    }
}

// Get demo component loader
export function getDemoLoader(demoName) {
    return demoRegistry[demoName] || null;
}
