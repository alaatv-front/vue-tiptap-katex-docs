## toolbar.vue

The Toolbar.vue code is a component that provides a toolbar for the vue3-tiptap-katex editor.
The toolbar items are defined within an unordered list (`<ul>`) and each item is defined within a list item (`<li>`).
Each toolbar item is a div element with a unique ID and a class of toolbar-item. The `editor.chain()` method is used to create a chain of commands to run on the editor instance. The `focus()` method is used to focus on the editor instance.

Finally, a command is run to set the paragraph, toggle bold, italic, or underline styles.

## importing tippy.js 

```javascript
// for srr support
    if (typeof window !== 'undefined') {
      import('tippy.js')
          .then((response) => {
            Tippy = response.default
            this.isToolbarReady = true
            this.$nextTick(() => {
              this.setAllTooltips()
            })
          })
    }
```
