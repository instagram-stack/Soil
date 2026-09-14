

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CiQeAElm.js","_app/immutable/chunks/E8dxjSF1.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/TH3sSmmq.js"];
export const stylesheets = [];
export const fonts = [];
