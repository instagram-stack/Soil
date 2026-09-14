export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ascii-art.gif","og-image.png","robots.txt"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DUzeqiX-.js",app:"_app/immutable/entry/app.BnhxznYQ.js",imports:["_app/immutable/entry/start.DUzeqiX-.js","_app/immutable/chunks/B9ZD36TB.js","_app/immutable/chunks/E8dxjSF1.js","_app/immutable/entry/app.BnhxznYQ.js","_app/immutable/chunks/E8dxjSF1.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
