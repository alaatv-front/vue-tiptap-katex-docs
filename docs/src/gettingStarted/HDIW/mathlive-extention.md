## mathlive extention

we use Mathlive as a [tiptap extention](https://tiptap.dev/guide/custom-extensions) to support LaTeX mathematical expressions and more.

we call our node TiptapInteractiveKatex, with main node placed in

```bash
src/components/formula/extensionFormulaInline.mjs
```

and the vue component to render placed in

```bash
src/components/formula/TiptapInteractiveKatex.vue
```

in order to fully undrestand how tiptap extensions work, you need to refer to tiptap documentation, but here are the key pages you must look up: 


- [tiptap custom extensions](https://tiptap.dev/guide/custom-extensions)
- [Interactive node views](https://tiptap.dev/guide/node-views/vue)
- [tiptap configuration](https://tiptap.dev/guide/configuration#nodes-marks-and-extensions)

you can finde more explanation of how exactly TiptapInteractiveKatex works in [main package files / TiptapInteractiveKatex](/mainPackage/components/formula/TiptapInteractiveKatex.html)    where we explain each file and each method separately.
