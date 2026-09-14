import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D0p7IP77.js","_app/immutable/chunks/E8dxjSF1.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/TH3sSmmq.js"];
export const stylesheets = ["_app/immutable/assets/0.Cha9AJvg.css"];
export const fonts = [];
