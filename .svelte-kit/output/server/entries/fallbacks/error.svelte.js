import { Et as noop, f as pop_element, m as getContext, p as push_element, t as index_server_exports, vt as FILENAME, y as escape_html } from "../../chunks/index-server.js";
import { _ as noop$1 } from "../../chunks/shared.js";
import "../../chunks/internal.js";
import "../../chunks/internal2.js";
import "../../chunks/exports.js";
import "@sveltejs/kit/internal";
import "@sveltejs/kit/internal/server";
var PRELOAD_PRIORITIES = {
	tap: 1,
	hover: 2,
	viewport: 3,
	eager: 4,
	off: -1,
	false: -1
};
({ ...PRELOAD_PRIORITIES }), PRELOAD_PRIORITIES.hover;
var updated_listener = { v: noop$1 };
var navigating$1;
var updated;
var is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
var placeholder_url = "a:";
if (is_legacy) {
	new URL(placeholder_url);
	navigating$1 = { current: null };
	updated = { current: false };
} else {
	new class Page {
		data = {};
		form = null;
		error = null;
		params = {};
		route = { id: null };
		state = {};
		status = -1;
		url = new URL(placeholder_url);
	}();
	navigating$1 = new class Navigating {
		current = null;
	}();
	updated = new class Updated {
		current = false;
	}();
	updated_listener.v = () => updated.current = true;
}
//#endregion
//#region node_modules/@sveltejs/kit/src/runtime/client/client.js
/** @import { RemoteFunctionDataNode, ServerNodesResponse, ServerRedirectNode } from 'types' */
/** @import { CacheEntry } from './remote-functions/cache.svelte.js' */
/** @import { Query } from './remote-functions/query/instance.svelte.js' */
/** @import { LiveQuery } from './remote-functions/query-live/instance.svelte.js' */
var { onMount, tick } = index_server_exports;
{
	const console_warn = console.warn;
	console.warn = function warn(...args) {
		if (args.length === 1 && /<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(args[0])) return;
		console_warn(...args);
	};
}
Object.defineProperty({
	get from() {
		return navigating$1.current ? navigating$1.current.from : null;
	},
	get to() {
		return navigating$1.current ? navigating$1.current.to : null;
	},
	get type() {
		return navigating$1.current ? navigating$1.current.type : null;
	},
	get willUnload() {
		return navigating$1.current ? navigating$1.current.willUnload : null;
	},
	get delta() {
		return navigating$1.current ? navigating$1.current.delta : null;
	},
	get complete() {
		return navigating$1.current ? navigating$1.current.complete : null;
	}
}, "current", { get() {
	throw new Error("Replace navigating.current.<prop> with navigating.<prop>");
} });
//#endregion
//#region node_modules/@sveltejs/kit/src/runtime/app/state/server.js
function context() {
	return getContext("__request__");
}
/** @param {string} name */
function context_dev(name) {
	try {
		return context();
	} catch {
		throw new Error(`Can only read '${name}' on the server during rendering (not in e.g. \`load\` functions), as it is bound to the current request via component context. This prevents state from leaking between users. For more information, see https://svelte.dev/docs/kit/state-management#avoid-shared-state-on-the-server`);
	}
}
//#endregion
//#region node_modules/@sveltejs/kit/src/runtime/app/state/index.js
/**
* A read-only reactive object with information about the current page, serving several use cases:
* - retrieving the combined `data` of all pages/layouts anywhere in your component tree (also see [loading data](https://svelte.dev/docs/kit/load))
* - retrieving the current value of the `form` prop anywhere in your component tree (also see [form actions](https://svelte.dev/docs/kit/form-actions))
* - retrieving the page state that was set through `goto`, `pushState` or `replaceState` (also see [goto](https://svelte.dev/docs/kit/$app-navigation#goto) and [shallow routing](https://svelte.dev/docs/kit/shallow-routing))
* - retrieving metadata such as the URL you're on, the current route and its parameters, and whether or not there was an error
*
* ```svelte
* <!--- file: +layout.svelte --->
* <script>
* 	import { page } from '$app/state';
* <\/script>
*
* <p>Currently at {page.url.pathname}</p>
*
* {#if page.error}
* 	<span class="red">Problem detected</span>
* {:else}
* 	<span class="small">All systems operational</span>
* {/if}
* ```
*
* Changes to `page` are available exclusively with runes. (The legacy reactivity syntax will not reflect any changes)
*
* ```svelte
* <!--- file: +page.svelte --->
* <script>
* 	import { page } from '$app/state';
* 	const id = $derived(page.params.id); // This will correctly update id for usage on this page
* 	$: badId = page.params.id; // Do not use; will never update after initial load
* <\/script>
* ```
*
* On the server, values can only be read during rendering (in other words _not_ in e.g. `load` functions). In the browser, the values can be read at any time.
*
* @type {import('@sveltejs/kit').Page}
*/
var page = {
	get data() {
		return context_dev("page.data").page.data;
	},
	get error() {
		return context_dev("page.error").page.error;
	},
	get form() {
		return context_dev("page.form").page.form;
	},
	get params() {
		return context_dev("page.params").page.params;
	},
	get route() {
		return context_dev("page.route").page.route;
	},
	get state() {
		return context_dev("page.state").page.state;
	},
	get status() {
		return context_dev("page.status").page.status;
	},
	get url() {
		return context_dev("page.url").page.url;
	}
};
//#endregion
//#region node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte
Error$1[FILENAME] = "node_modules/@sveltejs/kit/src/runtime/components/svelte-5/error.svelte";
function Error$1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<h1>`);
		push_element($$renderer, "h1", 7, 0);
		$$renderer.push(`${escape_html(page.status)}</h1>`);
		pop_element();
		$$renderer.push(` <p>`);
		push_element($$renderer, "p", 8, 0);
		$$renderer.push(`${escape_html(page.error?.message)}</p>`);
		pop_element();
	}, Error$1);
}
Error$1.render = function() {
	throw new Error$1("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
//#endregion
export { Error$1 as default };
