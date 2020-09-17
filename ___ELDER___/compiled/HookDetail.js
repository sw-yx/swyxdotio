"use strict";var e=require("./index-c81a418a.js");const t={code:".list.svelte-j2nwtd.svelte-j2nwtd{display:block;margin-bottom:0.5rem;font-size:13px}.list.svelte-j2nwtd .code.svelte-j2nwtd{cursor:help}.hook.svelte-j2nwtd.svelte-j2nwtd{max-width:100%;text-overflow:wrap;padding:1rem;border:1px solid #ddd;border-collapse:collapse;margin-bottom:1rem;border-radius:1rem;position:relative;background:white}.hook-number.svelte-j2nwtd.svelte-j2nwtd{position:absolute;top:0;right:0px;width:2rem;height:1.75rem;border-top-right-radius:1rem;border-bottom-left-radius:1rem;text-align:center;padding-top:3px;background:#ddd;font-size:14px}.overview.svelte-j2nwtd.svelte-j2nwtd{margin-right:1rem}@media(min-width: 768px){.hook.svelte-j2nwtd.svelte-j2nwtd:nth-child(even){margin-left:0.5rem}.hook.svelte-j2nwtd.svelte-j2nwtd:nth-child(odd){margin-right:0.5rem}}.use.svelte-j2nwtd.svelte-j2nwtd{font-size:14px}.use ul{padding-left:1rem}.overview.svelte-j2nwtd.svelte-j2nwtd{margin-bottom:0.75rem;padding-bottom:0.75rem;border-bottom:1px solid #ddd}",map:'{"version":3,"file":"HookDetail.svelte","sources":["HookDetail.svelte"],"sourcesContent":["<script>\\n  export let hook;\\n  export let i;\\n\\n  let hover = false;\\n\\n  let x, y;\\n\\n  const hookEntityDefinitions = {\\n    allRequests: `This represents all of the valid requests Elder.js is aware of. This is collected during bootstrap and can be modified on the \'allRequests\' hook. It is important to note that \'allRequests\' will be different at the \'requestStart\' hook during a build because the requests are split between different processes during build time using the allRequests object.`,\\n    hookInterface:\\n      \'The hook interface is what defines the \\"contract\\" for each hook. It includes what properties the hook has access to and which of those properties can be mutated.\',\\n    customProps: \'An object that represents any custom props added during the \\"customizeHook\\" hook\',\\n    errors: \'An array of errors collected during the build process.\',\\n    request:\\n      \'An object that represents the paramaters required to generate a specific page on a specific route. This object originating from the all() query of a route.js file.\',\\n    helpers:\\n      \'An object of helpers loaded from `./src/helpers/index.js` in addition to the Elder.js provided helper functions.\',\\n    data: \'An object that is passed to Svelte templates as the \\"data\\" prop.\',\\n    settings: \'An object representing the elder.config.js and other details about the build.\',\\n    routes: \'An object that represents all of the routes registered with Elder.js.\',\\n    hooks: \'An array of all of the hooks that have been validated by Elder.js.\',\\n    query: \'An object that is initially empty but is reserved for plugins and sites to add database or api access to.\',\\n    route: \'An object representing the specific route (similar to a route.js file) for a specific request.\',\\n    headStack:\\n      \'A \\"stack\\" of strings to be merged together (a long with cssStack) that are written to the <head> tag. If you are looking to customize the head you\\\\\'re probably better looking at the \\"headString.\\"\',\\n    cssStack:\\n      \'A \\"stack\\" of strings to be merged together to create the the cssString prop. This is mainly uses to collect the css strings emitted by SSR\\\\\'d Svelte files.\',\\n    styleTag: \'The full style tag that is going to be written to the head of the page.\',\\n    cssString:\\n      \'The the css string that is wrapped in the styleTag. Added purely for convience in case users wanted to minify the css.\',\\n    headString: \'The complete <head></head> string just before it is written to the head.\',\\n    beforeHydrateStack:\\n      \'A \\"stack\\" of generally JS script tags that are required to be loaded before a Svelte component is hydrated. This is only written to the page when a Svelte component needs to be hydrated.\',\\n    hydrateStack: \'A \\"stack\\" Svelte components that will be hydrated.\',\\n    customJsStack:\\n      \'A \\"stack\\" of user specific customJs strings that will to be merged together. This is written after the Svelte components.\',\\n    footerStack: \'A \\"stack\\" of strings to be merged together that will be added to the footer tag.\',\\n    htmlString: \'The fully generated html for the page.\',\\n    timings: \'An array of collected timings of the system. These are collected using the performance observer.\',\\n    req: \\"The \'req\' object from Express or Polka when Elder.js is being used as middleware.\\",\\n    next: \\"The \'next\' object from Express or Polka when Elder.js is being used as middleware.\\",\\n  };\\n<\/script>\\n\\n<style>.list {\\n  display: block;\\n  margin-bottom: 0.5rem;\\n  font-size: 13px;\\n}\\n\\n.list .code {\\n  cursor: help;\\n}\\n\\n.hook {\\n  max-width: 100%;\\n  text-overflow: wrap;\\n  padding: 1rem;\\n  border: 1px solid #ddd;\\n  border-collapse: collapse;\\n  margin-bottom: 1rem;\\n  border-radius: 1rem;\\n  position: relative;\\n  background: white;\\n}\\n\\n.hook-number {\\n  position: absolute;\\n  top: 0;\\n  right: 0px;\\n  width: 2rem;\\n  height: 1.75rem;\\n  border-top-right-radius: 1rem;\\n  border-bottom-left-radius: 1rem;\\n  text-align: center;\\n  padding-top: 3px;\\n  background: #ddd;\\n  font-size: 14px;\\n}\\n\\n.overview {\\n  margin-right: 1rem;\\n}\\n\\n@media (min-width: 768px) {\\n  .hook:nth-child(even) {\\n    margin-left: 0.5rem;\\n  }\\n\\n  .hook:nth-child(odd) {\\n    margin-right: 0.5rem;\\n  }\\n}\\n\\n.use {\\n  font-size: 14px;\\n}\\n\\n:global(.use ul) {\\n  padding-left: 1rem;\\n}\\n\\n.overview {\\n  margin-bottom: 0.75rem;\\n  padding-bottom: 0.75rem;\\n  border-bottom: 1px solid #ddd;\\n}</style>\\n\\n<div class=\\"hook\\">\\n\\n  {#if i || i === 0}\\n    <span class=\\"hook-number\\">{i + 1}.</span>\\n  {/if}\\n\\n  <div class=\\"overview\\">\\n    <span class=\\"hook-name\\">\\n\\n      {#if hook.link && hook.link.length > 0}\\n        <a href={hook.link}>{hook.hook}</a>\\n      {:else}{hook.hook}{/if}\\n    </span>\\n    : {hook.context}\\n  </div>\\n  <div class=\\"use\\">\\n    {@html hook.use}\\n  </div>\\n\\n  <div class=\\"list\\">\\n    <strong>Props</strong>\\n    :\\n    {#each hook.props as prop}\\n      <div class=\\"code\\" data-balloon-length=\\"medium\\" data-balloon-pos=\\"up\\" aria-label={hookEntityDefinitions[prop]}>\\n        {prop}\\n      </div>\\n    {/each}\\n  </div>\\n  <div class=\\"list\\">\\n    <strong>Mutable</strong>\\n    :\\n    {#each hook.mutable as mutable}\\n      <div class=\\"code\\" data-balloon-length=\\"medium\\" data-balloon-pos=\\"up\\" aria-label={hookEntityDefinitions[mutable]}>\\n        {mutable}\\n      </div>\\n    {/each}\\n  </div>\\n\\n  {#if hook.advanced}\\n    <div>\\n      <small>This hook is an \'advanced\' hook meaning it geared towards advanced users or plugins.</small>\\n    </div>\\n  {/if}\\n\\n  <small>{hook.expiremental ? \'Expiremental\' : \'Stable\'} &middot; Location: {hook.location}</small>\\n</div>\\n"],"names":[],"mappings":"AA6CO,KAAK,4BAAC,CAAC,AACZ,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,MAAM,CACrB,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,mBAAK,CAAC,KAAK,cAAC,CAAC,AACX,MAAM,CAAE,IAAI,AACd,CAAC,AAED,KAAK,4BAAC,CAAC,AACL,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,eAAe,CAAE,QAAQ,CACzB,aAAa,CAAE,IAAI,CACnB,aAAa,CAAE,IAAI,CACnB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,KAAK,AACnB,CAAC,AAED,YAAY,4BAAC,CAAC,AACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,GAAG,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,OAAO,CACf,uBAAuB,CAAE,IAAI,CAC7B,yBAAyB,CAAE,IAAI,CAC/B,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,SAAS,4BAAC,CAAC,AACT,YAAY,CAAE,IAAI,AACpB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AACzB,iCAAK,WAAW,IAAI,CAAC,AAAC,CAAC,AACrB,WAAW,CAAE,MAAM,AACrB,CAAC,AAED,iCAAK,WAAW,GAAG,CAAC,AAAC,CAAC,AACpB,YAAY,CAAE,MAAM,AACtB,CAAC,AACH,CAAC,AAED,IAAI,4BAAC,CAAC,AACJ,SAAS,CAAE,IAAI,AACjB,CAAC,AAEO,OAAO,AAAE,CAAC,AAChB,YAAY,CAAE,IAAI,AACpB,CAAC,AAED,SAAS,4BAAC,CAAC,AACT,aAAa,CAAE,OAAO,CACtB,cAAc,CAAE,OAAO,CACvB,aAAa,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,AAC/B,CAAC"}'},o=e.create_ssr_component((o,n,s,a)=>{let{hook:r}=n,{i:i}=n;const A={allRequests:"This represents all of the valid requests Elder.js is aware of. This is collected during bootstrap and can be modified on the 'allRequests' hook. It is important to note that 'allRequests' will be different at the 'requestStart' hook during a build because the requests are split between different processes during build time using the allRequests object.",hookInterface:'The hook interface is what defines the "contract" for each hook. It includes what properties the hook has access to and which of those properties can be mutated.',customProps:'An object that represents any custom props added during the "customizeHook" hook',errors:"An array of errors collected during the build process.",request:"An object that represents the paramaters required to generate a specific page on a specific route. This object originating from the all() query of a route.js file.",helpers:"An object of helpers loaded from `./src/helpers/index.js` in addition to the Elder.js provided helper functions.",data:'An object that is passed to Svelte templates as the "data" prop.',settings:"An object representing the elder.config.js and other details about the build.",routes:"An object that represents all of the routes registered with Elder.js.",hooks:"An array of all of the hooks that have been validated by Elder.js.",query:"An object that is initially empty but is reserved for plugins and sites to add database or api access to.",route:"An object representing the specific route (similar to a route.js file) for a specific request.",headStack:'A "stack" of strings to be merged together (a long with cssStack) that are written to the <head> tag. If you are looking to customize the head you\'re probably better looking at the "headString."',cssStack:'A "stack" of strings to be merged together to create the the cssString prop. This is mainly uses to collect the css strings emitted by SSR\'d Svelte files.',styleTag:"The full style tag that is going to be written to the head of the page.",cssString:"The the css string that is wrapped in the styleTag. Added purely for convience in case users wanted to minify the css.",headString:"The complete <head></head> string just before it is written to the head.",beforeHydrateStack:'A "stack" of generally JS script tags that are required to be loaded before a Svelte component is hydrated. This is only written to the page when a Svelte component needs to be hydrated.',hydrateStack:'A "stack" Svelte components that will be hydrated.',customJsStack:'A "stack" of user specific customJs strings that will to be merged together. This is written after the Svelte components.',footerStack:'A "stack" of strings to be merged together that will be added to the footer tag.',htmlString:"The fully generated html for the page.",timings:"An array of collected timings of the system. These are collected using the performance observer.",req:"The 'req' object from Express or Polka when Elder.js is being used as middleware.",next:"The 'next' object from Express or Polka when Elder.js is being used as middleware."};return void 0===n.hook&&s.hook&&void 0!==r&&s.hook(r),void 0===n.i&&s.i&&void 0!==i&&s.i(i),o.css.add(t),`<div class="hook svelte-j2nwtd">${i||0===i?`<span class="hook-number svelte-j2nwtd">${e.escape(i+1)}.</span>`:""}\n\n  <div class="overview svelte-j2nwtd"><span class="hook-name">${r.link&&r.link.length>0?`<a${e.add_attribute("href",r.link,0)}>${e.escape(r.hook)}</a>`:""+e.escape(r.hook)}</span>\n    : ${e.escape(r.context)}</div>\n  <div class="use svelte-j2nwtd">${r.use}</div>\n\n  <div class="list svelte-j2nwtd"><strong>Props</strong>\n    :\n    ${e.each(r.props,t=>`<div class="code svelte-j2nwtd" data-balloon-length="medium" data-balloon-pos="up"${e.add_attribute("aria-label",A[t],0)}>${e.escape(t)}\n      </div>`)}</div>\n  <div class="list svelte-j2nwtd"><strong>Mutable</strong>\n    :\n    ${e.each(r.mutable,t=>`<div class="code svelte-j2nwtd" data-balloon-length="medium" data-balloon-pos="up"${e.add_attribute("aria-label",A[t],0)}>${e.escape(t)}\n      </div>`)}</div>\n\n  ${r.advanced?"<div><small>This hook is an &#39;advanced&#39; hook meaning it geared towards advanced users or plugins.</small></div>":""}\n\n  <small>${e.escape(r.expiremental?"Expiremental":"Stable")} · Location: ${e.escape(r.location)}</small></div>`});module.exports=o;