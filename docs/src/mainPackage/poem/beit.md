## bait.mjs

This code exports a custom node for the Tiptap editor called `TiptapInteractivePoem`. It defines how
the node should be parsed from HTML using the `parseHTML()` method, and how it should be rendered as
HTML using the `renderHTML()` method. It also defines a Vue component for the node view using the
`addNodeView()` method, which returns a `VueNodeViewRenderer` for the `TiptapInteractivePoem` node.
This allows the node to be rendered as a custom Vue component in the editor.

## parseHTML()

`parseHTML()` is a method used by the `Node` object to define how the node should be parsed from
HTML. In this case, it returns an array with a single object that describes how to parse a `div`
element with a class of `beit`. The `getAttrs` function is used to determine if the element has
the correct class, and if so, it will be parsed as a `TiptapInteractivePoem` node.

```javascript
  parseHTML() {
    return [
      {
        tag: 'div',
        getAttrs: (element) => element.getAttribute('class') === 'beit'
      }
    ]
  }
```

## renderHTML()

`renderHTML()` is a method used by the `Node` object to define how the node should be rendered as
HTML. In this case, it returns an array with a single `div` element with a class of `beit` and a
content of `0`. This means that when the `TiptapInteractivePoem` node is rendered as HTML, it will
be represented as a `div` element with the class `beit`. The `0` in the array represents the content
of the node, which in this case is empty.

```javascript
  renderHTML() {
    return ['div', { class: 'beit' }, 0]
  }
```

## addNodeView()

This function returns a VueNodeViewRenderer for TiptapInteractivePoem.

returns: The `addNodeView()` method is returning a Vue component that renders a custom node view for the TiptapInteractivePoem node. The `VueNodeViewRenderer` is a helper function provided by Tiptap that creates a Vue component for a node view.

```javascript
  addNodeView() {
    return VueNodeViewRenderer(TiptapInteractivePoem)
  }
```
