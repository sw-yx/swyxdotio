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

/* src/routes/article/Article.svelte generated by Svelte v3.25.1 */

const css = {
	code: ".prose ul > li{margin-top:0;margin-bottom:0}.prose.svelte-ef1qfd \n    h1 a[aria-hidden=\"true\"],\n    h2 a[aria-hidden=\"true\"],\n    h3 a[aria-hidden=\"true\"],\n    h4 a[aria-hidden=\"true\"],\n    h5 a[aria-hidden=\"true\"],\n    h6 a[aria-hidden=\"true\"]\n  {margin-left:1rem}.prose.svelte-ef1qfd code{font-size:90%;background-color:rgba(29, 80, 80, 0.3);padding:0.25em 0.5em}.prose.svelte-ef1qfd pre{font-size:90%;background-color:#292d3e;box-shadow:inset 1px 1px 5px rgba(0, 0, 0, 0.05);padding:1em;border-radius:2px;overflow-x:auto}.prose.svelte-ef1qfd pre code{background-color:transparent;padding:0}.prose.svelte-ef1qfd blockquote{position:relative;margin-left:0;padding-left:1em;padding-right:0.5em;font-size:0.9em;line-height:1.4em;margin-right:0;border-left:0.25em solid var(--brand-color-primary)}.prose.svelte-ef1qfd blockquote:before{content:\"\";width:100%;height:100%;position:absolute;left:0;background-color:var(--link-color);opacity:0.1;pointer-events:none}.prose.svelte-ef1qfd a{border-bottom:2px solid #F26111}.prose.svelte-ef1qfd ul{line-height:1.5}.prose.svelte-ef1qfd li{margin:0 0 0.5em 0}.prose.svelte-ef1qfd .icon-link{font-size:smaller}.prose.svelte-ef1qfd img{max-width:80%;margin:0 auto;display:block}@media(min-width: 480px){.prose.svelte-ef1qfd a::before{content:attr(href);position:absolute;transform:translate(-10rem, 1.5rem) scale(0);background:linear-gradient(45deg, var(--hover-color-primary),var(--hover-color-secondary));visibility:visible;opacity:0;transition-duration:0.5s;transition-property:opacity, transform}.prose.svelte-ef1qfd a:hover::before{opacity:1;transform:translateY(1.5rem) scale(1)}}",
	map: "{\"version\":3,\"file\":\"Article.svelte\",\"sources\":[\"Article.svelte\"],\"sourcesContent\":[\"<script>\\n  export let data\\n  const { html, frontmatter } = data\\n</script>\\n\\n<style>:global(.prose ul > li) {\\n  margin-top: 0;\\n  margin-bottom: 0;\\n}\\n\\n/* Add space to the left of the anchor\\n     generated by `remark-autolink-headings`\\n     Ref: https://github.com/sw-yx/ssg/blob/c920826e062f379e3634ae8bd26c3b037ec12b40/packages/source-devto/src/index.ts#L27-L38\\n     */\\n\\n.prose :global(\\n    h1 a[aria-hidden=\\\"true\\\"],\\n    h2 a[aria-hidden=\\\"true\\\"],\\n    h3 a[aria-hidden=\\\"true\\\"],\\n    h4 a[aria-hidden=\\\"true\\\"],\\n    h5 a[aria-hidden=\\\"true\\\"],\\n    h6 a[aria-hidden=\\\"true\\\"]\\n  ) {\\n  margin-left: 1rem;\\n}\\n\\n.prose :global(code) {\\n  font-size: 90%;\\n  background-color: rgba(29, 80, 80, 0.3);\\n  padding: 0.25em 0.5em;\\n}\\n\\n.prose :global(pre) {\\n  font-size: 90%;\\n  background-color: #292d3e;\\n  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);\\n  padding: 1em;\\n  border-radius: 2px;\\n  overflow-x: auto;\\n}\\n\\n.prose :global(pre) :global(code) {\\n  background-color: transparent;\\n  padding: 0;\\n}\\n\\n.prose :global(blockquote) {\\n  position: relative;\\n  margin-left: 0;\\n  padding-left: 1em;\\n  padding-right: 0.5em;\\n  font-size: 0.9em;\\n  line-height: 1.4em;\\n  margin-right: 0;\\n  /* font-style: italic; */\\n  border-left: 0.25em solid var(--brand-color-primary);\\n}\\n\\n.prose :global(blockquote:before) {\\n  content: \\\"\\\";\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  left: 0;\\n  background-color: var(--link-color);\\n  opacity: 0.1;\\n  pointer-events: none;\\n}\\n\\n.prose :global(a) {\\n  border-bottom: 2px solid #F26111;\\n}\\n\\n.prose :global(ul) {\\n  line-height: 1.5;\\n}\\n\\n.prose :global(li) {\\n  margin: 0 0 0.5em 0;\\n}\\n\\n.prose :global(.icon-link) {\\n  font-size: smaller;\\n}\\n\\n.prose :global(img) {\\n  max-width: 80%;\\n  margin: 0 auto;\\n  display: block;\\n}\\n\\n@media (min-width: 480px) {\\n  .prose :global(a)::before {\\n    content: attr(href);\\n    position: absolute;\\n    transform: translate(-10rem, 1.5rem) scale(0);\\n    background: linear-gradient(45deg, var(--hover-color-primary),var(--hover-color-secondary));\\n    visibility: visible;\\n    opacity: 0;\\n    /*transition: all 0.5s; this is buggy*/\\n    transition-duration: 0.5s;\\n    transition-property: opacity, transform;\\n  }\\n\\n  .prose :global(a):hover::before {\\n    opacity: 1;\\n    transform: translateY(1.5rem) scale(1);\\n  }\\n}\\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMvYXJ0aWNsZS9zcmMvcm91dGVzL2FydGljbGUvQXJ0aWNsZS5zdmVsdGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUdBOzs7TUFHSTs7QUFDRDs7Ozs7Ozs7RUFRRCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsdUNBQXVDO0VBQ3ZDLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsaURBQWlEO0VBQ2pELFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsb0RBQW9EO0FBQ3REOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0MsMkZBQTJGO0lBQzNGLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysc0NBQXNDO0lBQ3RDLHlCQUF5QjtJQUN6Qix1Q0FBdUM7RUFDekM7O0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysc0NBQXNDO0VBQ3hDO0FBQ0YiLCJmaWxlIjoic3JjL3JvdXRlcy9hcnRpY2xlL0FydGljbGUuc3ZlbHRlIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIDpnbG9iYWwoLnByb3NlIHVsID4gbGkpIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cblxuXG4gIC8qIEFkZCBzcGFjZSB0byB0aGUgbGVmdCBvZiB0aGUgYW5jaG9yXG4gICAgIGdlbmVyYXRlZCBieSBgcmVtYXJrLWF1dG9saW5rLWhlYWRpbmdzYFxuICAgICBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdy15eC9zc2cvYmxvYi9jOTIwODI2ZTA2MmYzNzllMzYzNGFlOGJkMjZjM2IwMzdlYzEyYjQwL3BhY2thZ2VzL3NvdXJjZS1kZXZ0by9zcmMvaW5kZXgudHMjTDI3LUwzOFxuICAgICAqL1xuICAgICAucHJvc2UgOmdsb2JhbChcbiAgICBoMSBhW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSxcbiAgICBoMiBhW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSxcbiAgICBoMyBhW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSxcbiAgICBoNCBhW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSxcbiAgICBoNSBhW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSxcbiAgICBoNiBhW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXVxuICApIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxuXG4gIC5wcm9zZSA6Z2xvYmFsKGNvZGUpIHtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI5LCA4MCwgODAsIDAuMyk7XG4gICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICB9XG4gIC5wcm9zZSA6Z2xvYmFsKHByZSkge1xuICAgIGZvbnQtc2l6ZTogOTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTJkM2U7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cblxuICAucHJvc2UgOmdsb2JhbChwcmUpIDpnbG9iYWwoY29kZSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAucHJvc2UgOmdsb2JhbChibG9ja3F1b3RlKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXG4gICAgYm9yZGVyLWxlZnQ6IDAuMjVlbSBzb2xpZCB2YXIoLS1icmFuZC1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICAucHJvc2UgOmdsb2JhbChibG9ja3F1b3RlOmJlZm9yZSkge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICAucHJvc2UgOmdsb2JhbChhKSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGMjYxMTE7XG4gIH1cbiAgLnByb3NlIDpnbG9iYWwodWwpIHtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLnByb3NlIDpnbG9iYWwobGkpIHtcbiAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICB9XG4gIC5wcm9zZSA6Z2xvYmFsKC5pY29uLWxpbmspIHtcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XG4gIH1cblxuICAucHJvc2UgOmdsb2JhbChpbWcpIHtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcbiAgICAucHJvc2UgOmdsb2JhbChhKTo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoaHJlZik7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTByZW0sIDEuNXJlbSkgc2NhbGUoMCk7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHZhcigtLWhvdmVyLWNvbG9yLXByaW1hcnkpLHZhcigtLWhvdmVyLWNvbG9yLXNlY29uZGFyeSkpO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAvKnRyYW5zaXRpb246IGFsbCAwLjVzOyB0aGlzIGlzIGJ1Z2d5Ki9cbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5LCB0cmFuc2Zvcm07XG4gICAgfVxuICAgIC5wcm9zZSA6Z2xvYmFsKGEpOmhvdmVyOjpiZWZvcmUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjVyZW0pIHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuIl19 */</style>\\n\\n<svelte:head>\\n  <title>{frontmatter.title} | swyx.io</title>\\n</svelte:head>\\n<a href=\\\"/\\\">&LeftArrow; Home</a>\\n\\n<article\\n  class=\\\"px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16\\n    lg:px-8 xl:max-w-6xl\\\">\\n    \\n    <div class=\\\"flex gap-2\\\">\\n      {#each frontmatter.categories as tag}\\n      <span\\n        class=\\\"inline-flex items-center px-3 py-0.5 rounded-full text-sm\\n          font-medium leading-5 bg-indigo-100 text-indigo-800\\\">\\n        {tag}\\n      </span>\\n    {/each}\\n    </div>\\n  <div class=\\\"prose lg:prose-xl\\\">\\n    <div class=\\\"title\\\">\\n      <h1 class=\\\"text-white\\\">{frontmatter.title}</h1>\\n      {#if frontmatter.author}<small>By {frontmatter.author}</small>{/if}\\n    </div>\\n\\n    {#if html}\\n      {@html html}\\n    {:else}\\n      <h1>There was a problem rendering this page - please let @swyx know!</h1>\\n    {/if}\\n  </div>\\n</article>\\n\"],\"names\":[],\"mappings\":\"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\"}"
};

const Article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let { data } = $$props;
	const { html, frontmatter } = data;
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css);

	return `${($$result.head += `${($$result.title = `<title>${escape(frontmatter.title)} | swyx.io</title>`, "")}`, "")}
<a href="${"/"}">← Home</a>

<article class="${"px-4 py-10 max-w-3xl mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16\n    lg:px-8 xl:max-w-6xl"}"><div class="${"flex gap-2"}">${each(frontmatter.categories, tag => `<span class="${"inline-flex items-center px-3 py-0.5 rounded-full text-sm\n          font-medium leading-5 bg-indigo-100 text-indigo-800"}">${escape(tag)}
      </span>`)}</div>
  <div class="${"prose lg:prose-xl svelte-ef1qfd"}"><div class="${"title"}"><h1 class="${"text-white"}">${escape(frontmatter.title)}</h1>
      ${frontmatter.author
	? `<small>By ${escape(frontmatter.author)}</small>`
	: ``}</div>

    ${html
	? `${html}`
	: `<h1>There was a problem rendering this page - please let @swyx know!</h1>`}</div></article>`;
});

module.exports = Article;
