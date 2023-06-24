## the Formula Flow

simple and neat, here is how your formula turns into html elements in editor:

## 1. loadMathLive

when you open the formula box, you create a TiptapInteractiveKatex node in editor,
which has its own custom functionality, when you finish typing your formula and close the mathlive box, a method called `loadMathLive()` is ran and the mathlive element (`Mathfield()`) outputs the  LaTex of your context.
for more info, checkout the documentation of [MixinComponentFormula](/corePackage/formula/mixin.md).

## 2. renderHTML

then the value of `katex` variable will be rendered into the html element below using `renderHTML()` method defined in our custom tiptap extention (extensionFormulaInline.mjs):

```html
   <span data-katex="true">your formula</title>
```

## 3. computedKatex

when you are out of editMode, `v-html="computedKatex"` part makes your just-updated katex node attribute to be rendered as html elments and tags using the KaTex library's `renderToString` method:


```javascript
computedKatex() {
            const purifiedKatex = mixinConvertToTiptap.methods.replaceKatexSigns(this.node.attrs.katex.toString())
            this.checkMathLivePanelVisibility(purifiedKatex)
            return katex.renderToString(purifiedKatex, {
                throwOnError: false,
                safe: true,
                trust: true
            })
        }
```

## 4. onUpdate({ editor }){}

meanwhile anytime you change anything in editor, the onUpdate method is being called in which we use the html output of editor (with `editor.getHTML()` method),
and update our model value, with the help of `convertToTiptap()` method as a normalizer.

## 5. convertToTiptap

This method is placed in the core file [convertToTiptap.mjs](/corePackage/mixins/convertToTiptap.md) with the path below:

`vue-tiptap-katex-core/mixins/convertToTiptap.mjs`

we use this method as a normalizer to make the context tiptap-katex ready.
since we use KaTex in order to render LaTex there happens to be a need changing some characters or removing them so our convertor works smoothly and error-freely.

we basically find the formula context using regex (`getRegexPatternForFormula()` method), make the necessary changes and then return the context.


And that's all for how the flow works. If you need more detailed info, read the docs of each file.
