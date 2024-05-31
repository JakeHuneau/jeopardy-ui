

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.Dead-r7v.js","_app/immutable/chunks/scheduler.D3aZ0wum.js","_app/immutable/chunks/index.ChNn_x9V.js","_app/immutable/chunks/entry.Bkw0k-Zu.js"];
export const stylesheets = [];
export const fonts = [];
