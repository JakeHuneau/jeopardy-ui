export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","daily_double.mp3","episodes/.DS_Store","episodes/all.json","episodes/celebrity.json","episodes/college.json","episodes/favicon.png","episodes/teens.json"]),
	mimeTypes: {".mp3":"audio/mpeg",".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Dab3ZhKb.js","app":"_app/immutable/entry/app.-2g8LqiH.js","imports":["_app/immutable/entry/start.Dab3ZhKb.js","_app/immutable/chunks/entry.Bkw0k-Zu.js","_app/immutable/chunks/scheduler.D3aZ0wum.js","_app/immutable/entry/app.-2g8LqiH.js","_app/immutable/chunks/scheduler.D3aZ0wum.js","_app/immutable/chunks/index.ChNn_x9V.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[tournament]/[episode]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"tournament","optional":false,"rest":false,"chained":false},{"name":"episode","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[tournament]/[episode]/answers",
				pattern: /^\/([^/]+?)\/([^/]+?)\/answers\/?$/,
				params: [{"name":"tournament","optional":false,"rest":false,"chained":false},{"name":"episode","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
