'use strict';

function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src/components/BlogTeaser/BlogTeaser.svelte generated by Svelte v3.24.1 */

const BlogTeaser = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { blog } = $$props;
	if ($$props.blog === void 0 && $$bindings.blog && blog !== void 0) $$bindings.blog(blog);

	return `<div class="${"hover:bg-red-100"}"><div class="${"flex gap-2"}">
    ${each(blog.data.categories || ["uncategorized"], tag => `<span class="${"inline-flex items-center px-3 py-0.5 rounded-full text-sm\n          font-medium leading-5 bg-indigo-100 text-indigo-800"}">${escape(tag)}
      </span>`)}
    </div>
  <a${add_attribute("href", blog.slug, 0)} class="${"block"}"><h3 class="${"mt-4 text-xl leading-7 font-semibold text-gray-900\n        hover:text-blue-700"}">${escape(blog.data.title)}</h3>
    
    ${blog.data.description
	? `<p class="${"mt-3 text-base leading-6 text-gray-500 hover:text-teal-700"}">${escape(blog.data.description)}</p>`
	: ``}</a>
  </div>`;
});

module.exports = BlogTeaser;