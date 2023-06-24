## extensionFormulaInline

This code is creating a custom node for the Tiptap editor called `TiptapInteractiveKatexInline`. The
node is defined as an inline element that can be dragged. It has an attribute called
`katex` with a default value of `'formulaEditPanel'`, which can be parsed from HTML using the
`parseHTML` function. The `parseHTML` function returns an array with a single object that specifies
that the node should be created from a `span` element that has a `data-katex` attribute. The
`renderHTML` function defines how the node should be rendered as HTML when the editor content is
exported or serialized. It creates a `span` element with a `data-katex` attribute set to `true`, and
the `katex` attribute value is wrapped in `$` signs to indicate that it is a LaTeX formula. Finally,
the `addNodeView` function returns a VueNodeViewRenderer for the custom node, which is defined in
the `TiptapInteractiveKatex.vue` file.

## addAttributes()

The code is defining an attribute called `katex` for the custom node being created. The
`default` value for this attribute is set to `'formulaEditPanel'`. The `parseHTML` function is
used to extract the value of the `katex` attribute from the HTML element when the node is being
parsed from HTML. In this case, it splits the innerHTML of the element by the `$` character and
returns the second element of the resulting array, which is the value of the `katex` attribute.
This allows the editor to recognize and create the node when importing or deserializing content
that contains a `span` element with a `data-katex` attribute and a `katex` attribute value.

```javascript
  addAttributes() {
    return {
      katex: {
        default: 'formulaEditPanel',
        parseHTML: (element) => element.innerHTML.split('$')[1]
      },
      inline: {
        default: true
      },
      editMode: {
        default: false
      }
    }
  },
```

## parseHTML()

`parseHTML()` is a method that defines how the node should be parsed from HTML when the editor
content is imported or deserialized. In this case, it returns an array with a single object that
specifies that the node should be created from a `span` element that has a `data-katex` attribute.
The `getAttrs` function checks if the `data-katex` attribute is present in the element and returns
`true` if it is, which indicates that the node should be created. This allows the editor to
recognize and create the node when importing or deserializing content that contains a `span`
element with a `data-katex` attribute.

```javascript
  parseHTML() {
    return [
      {
        tag: 'span',
        getAttrs: (element) => element.hasAttribute('data-katex')
      }
    ]
  }
```

## renderHTML()

This code defines how the node should be rendered as HTML when the editor content is exported or
serialized. It creates a `span` element with a `data-katex` attribute set to `true`, and the
`katex` attribute value is wrapped in `$` signs to indicate that it is a LaTeX formula. The
`HTMLAttributes` parameter is an object that contains all the attributes defined for the node, and
in this case, it retrieves the `katex` attribute value to be used in the rendered HTML.

```javascript
  parseHTML() {
    return [
      {
        tag: 'span',
        getAttrs: (element) => element.hasAttribute('data-katex')
      }
    ]
  }
```

## addNodeView()

This function returns a VueNodeViewRenderer for TiptapInteractiveKatex.

returns: The `addNodeView()` method is returning a Vue component that is used to render a custom node view for Tiptap editor. The component being returned is `VueNodeViewRenderer(TiptapInteractiveKatex)`, which is a higher-order component that takes `TiptapInteractiveKatex` as an argument and returns a new component that can be used as a node view in Tiptap.

```javascript
   addNodeView() {
    return VueNodeViewRenderer(TiptapInteractiveKatex)
  }
```
