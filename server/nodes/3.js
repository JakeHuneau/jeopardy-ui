import * as server from '../entries/pages/_tournament_/_episode_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_tournament_/_episode_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[tournament]/[episode]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.Bq0VijbU.js","_app/immutable/chunks/scheduler.D3aZ0wum.js","_app/immutable/chunks/index.ChNn_x9V.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/FinalJeopardy.d6LOPJPs.js"];
export const stylesheets = ["_app/immutable/assets/3.BU2xiHth.css","_app/immutable/assets/FinalJeopardy.DvFEAvtX.css"];
export const fonts = [];
