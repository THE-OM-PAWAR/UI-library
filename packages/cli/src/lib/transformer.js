export function transformCode(code, config) {
    const utilsAlias = config?.aliases?.utils || "@/lib/utils";
    const uiAlias = config?.aliases?.ui || "@/components/ui";

    return code
        .replace(/@repo\/utils/g, utilsAlias)
        .replace(/@repo\/components/g, uiAlias);
}
