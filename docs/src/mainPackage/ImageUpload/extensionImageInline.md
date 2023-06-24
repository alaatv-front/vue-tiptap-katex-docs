## extensionImageInline

This code exports a custom node for the Tiptap editor in JavaScript. The node is created using the
`Node.create()` method and has various properties such as `name`, `group`, `atom`, `inline`, and
`draggable`. It also has attributes such as `url`, `width`, `height`, `justify`, `vertical`, and
`horizontal`. The `parseHTML()` method specifies how the node should be parsed from HTML, while the
`renderHTML()` method specifies how it should be rendered as HTML. Finally, the `addNodeView()`
method specifies how the node should be rendered in the editor using a Vue component.

## addAttributes():url

This code is defining the `url` attribute for the custom node in the Tiptap editor. The
`parseHTML` method is parsing the `src` attribute of an HTML `img` element and returning its
value as the `url` attribute of the custom node. The `renderHTML` method is returning an
object with a `src` property set to the value of the `url` attribute passed in as an
argument. This is used to render the custom node as an `img` element with the `src`
attribute set to the value of the `url` attribute.

```javascript
  url: {
        default: '',
        parseHTML: (element) => element.getAttribute('src'),
        renderHTML: (attributes) => ({
          src: attributes.url
        })
      }
```

## addAttributes():vertical:parseHTML

This code is defining the `parseHTML` method for the custom node in the Tiptap editor.
Specifically, it is parsing the `data-vertical` attribute of an HTML element and returning
its value as an integer.

```javascript
  parseHTML: (element) => {
          const vertical = parseInt(element.getAttribute('data-vertical'), 10)
          if (Number.isNaN(vertical)) {
            return 0
          }
          return vertical
  }
```

## addAttributes():vertical:renderHTML

The code is defining the `renderHTML` method for the `vertical` attribute of the custom node
in the Tiptap editor. Specifically, it is returning an object with two properties:
`data-vertical` and `style`. The `data-vertical` property is set to the value of the
`vertical` attribute passed in as an argument. The `style` property is a string that sets the
`vertical-align` CSS property to a negative value of the `vertical` attribute multiplied by
-1 and appended with the `px` unit. This is used to vertically align the custom node in the
editor.

```javascript
  renderHTML: (attributes) => ({
          'data-vertical': attributes.vertical,
          style: `vertical-align: ${-1 * attributes.vertical}px`
  })
```
## renderHTML()

The `renderHTML()` method is defining how the custom node should be rendered as HTML. In this case,
it is returning an array with the tag name `img` and the `HTMLAttributes` object passed in as an
argument, which contains all the attributes of the custom node. The `mergeAttributes()` function is
used to merge the `HTMLAttributes` object with any additional attributes that may be added later.
This ensures that all attributes are included in the final HTML output.

```javascript
  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(HTMLAttributes)]
  }
```

## addNodeView()

This function returns a VueNodeViewRenderer for TiptapInteractiveImageUpload.

returns: The `addNodeView()` method is returning a Vue component that is used to render a custom node view for Tiptap editor. The component being returned is `VueNodeViewRenderer(TiptapInteractiveImageUpload)`, which is a higher-order component that takes `TiptapInteractiveImageUpload` as an argument and returns a new component that can be used as a node view in Tiptap

```javascript
  addNodeView() {
    return VueNodeViewRenderer(TiptapInteractiveImageUpload)
  }
```
