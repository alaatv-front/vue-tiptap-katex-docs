import{_ as t,o as e,c as a,O as o}from"./chunks/framework.57e84c95.js";const b=JSON.parse('{"title":"Vue Tiptap Katex","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),n={name:"index.md"},r=o(`<h1 id="vue-tiptap-katex" tabindex="-1">Vue Tiptap Katex <a class="header-anchor" href="#vue-tiptap-katex" aria-label="Permalink to &quot;Vue Tiptap Katex&quot;">​</a></h1><p>A rich-text and math editor for Vue.js v3 powered by <a href="https://www.npmjs.com/package/tiptap" target="_blank" rel="noreferrer">Tiptap</a> and <a href="https://www.npmjs.com/package/mathlive" target="_blank" rel="noreferrer">Mathlive</a>.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><pre><code>npm install --save vue3-tiptap-katex
</code></pre><h2 id="changelog" tabindex="-1">Changelog <a class="header-anchor" href="#changelog" aria-label="Permalink to &quot;Changelog&quot;">​</a></h2><ul><li>add support for v-model</li><li>add support for custom table cells</li></ul><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2><pre><code>git clone https://github.com/kerasus/vue3-tiptap-katex
cd vue3-tiptap-katex
npm install
npm run serve
</code></pre><p>Then you should be able to navigate with your browser and see the demo in <a href="http://localhost:8080/" target="_blank" rel="noreferrer">http://localhost:8080/</a></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="on-template-add" tabindex="-1">on &lt;template&gt; add <a class="header-anchor" href="#on-template-add" aria-label="Permalink to &quot;on &amp;lt;template&amp;gt; add&quot;">​</a></h3><p>something like this</p><pre><code>&lt;vue-tiptap-katex ref=&quot;editor&quot; /&gt;
</code></pre><h3 id="on-script-add" tabindex="-1">on &lt;script&gt; add <a class="header-anchor" href="#on-script-add" aria-label="Permalink to &quot;on &amp;lt;script&amp;gt; add&quot;">​</a></h3><h4 id="option-1" tabindex="-1">option 1 <a class="header-anchor" href="#option-1" aria-label="Permalink to &quot;option 1&quot;">​</a></h4><p>In the same template file, at <code>&lt;script&gt;</code> part, this will make the component available only to the template in this file</p><pre><code>import VueTiptapKatex from &#39;vue3-tiptap-katex&#39;
...
export default {
  ...
  components: {
    VueTiptapKatex,
    ...
  },
  ...
}
</code></pre><h4 id="option-2" tabindex="-1">option 2 <a class="header-anchor" href="#option-2" aria-label="Permalink to &quot;option 2&quot;">​</a></h4><p>At main Vue configuration, this will make the component available to all templates in your app</p><pre><code>import Vue from &#39;vue&#39;
import VueTiptapKatex from &#39;vue3-tiptap-katex&#39;
...
Vue.component(&#39;vue-tiptap-katex&#39;, VueTiptapKatex)
</code></pre><h2 id="how-to-set-and-get-content" tabindex="-1">How to set and get content <a class="header-anchor" href="#how-to-set-and-get-content" aria-label="Permalink to &quot;How to set and get content&quot;">​</a></h2><pre><code>export default {
    ...
    methods: {
        ...
        getContent() {
            const content = this.$refs.editor.getContent()
            console.log(content)
        },
        setContent() {
            const content = &quot;&lt;p&gt;Hellow World!&lt;/p&gt;&quot;
            this.$refs.editor.setContent(content)
        },
        ...
    },
    ...
}
</code></pre><h3 id="note" tabindex="-1">Note: <a class="header-anchor" href="#note" aria-label="Permalink to &quot;Note:&quot;">​</a></h3><p>vue-tiptap-katex accepts plain text and HTML as input and exports text as HTML.</p><h2 id="alternative-option-v-model" tabindex="-1">Alternative option: v-model: <a class="header-anchor" href="#alternative-option-v-model" aria-label="Permalink to &quot;Alternative option: v-model:&quot;">​</a></h2><pre><code>&lt;vue-tiptap-katex v-model=&quot;text&quot; /&gt;
</code></pre><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><p>Note that all props are optional.</p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>loading</td><td>Boolean</td><td>false</td><td>Loading overlay</td></tr><tr><td>options</td><td>Object</td><td>See <a href="#options-prop">Options Prop</a></td><td>Editor Options</td></tr></tbody></table><h3 id="options-prop" tabindex="-1">Options Prop <a class="header-anchor" href="#options-prop" aria-label="Permalink to &quot;Options Prop&quot;">​</a></h3><p>All options are optional:</p><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>bubbleMenu</td><td>Boolean</td><td>true</td><td>Whether to show Bubble Menu or not</td></tr><tr><td>floatingMenu</td><td>Boolean</td><td>true</td><td>Whether to show Floating Menu or not</td></tr><tr><td>poem</td><td>Boolean</td><td>false</td><td>Whether to show Poem Button in toolbar or not (This feature is designed for Arabic based languages)</td></tr><tr><td>persianKeyboard</td><td>Boolean</td><td>false</td><td>Adding Persian keyboard to Mathlive</td></tr><tr><td>mathliveOptions</td><td>Object</td><td>{}</td><td>This Object is passed directly to Mathlive instance</td></tr><tr><td>uploadServer</td><td>Object</td><td>{}</td><td>Upload image request config</td></tr><tr><td>onResizeEnd</td><td>Function</td><td>null</td><td>Gets called after resizing image</td></tr></tbody></table><h4 id="uploadserver-example" tabindex="-1">uploadServer example: <a class="header-anchor" href="#uploadserver-example" aria-label="Permalink to &quot;uploadServer example:&quot;">​</a></h4><pre><code>{ url: upload.com/image, headers: { Authentication: &quot;token&quot; }}
</code></pre><h4 id="onresizeend" tabindex="-1">onResizeEnd: <a class="header-anchor" href="#onresizeend" aria-label="Permalink to &quot;onResizeEnd:&quot;">​</a></h4><p>Arguments: url, width, height Return value: url</p><p>Example:</p><pre><code>onResizeEnd (url, width, height) {
    return url.split(&#39;?w=&#39;)[0] + &#39;?w=&#39; + width + &#39;&amp;h=&#39; + height
}
</code></pre><h2 id="develop-and-build" tabindex="-1">Develop and build <a class="header-anchor" href="#develop-and-build" aria-label="Permalink to &quot;Develop and build&quot;">​</a></h2><pre><code>npm install
npm run build
</code></pre>`,40),d=[r];function i(l,p,h,s,c,u){return e(),a("div",null,d)}const f=t(n,[["render",i]]);export{b as __pageData,f as default};
