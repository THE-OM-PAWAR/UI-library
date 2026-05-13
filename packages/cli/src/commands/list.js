import { getAllComponents } from "../lib/registry.js";

export async function list() {
    await getAllComponents();
}
