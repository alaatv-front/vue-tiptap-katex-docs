## TiptapShortkeys.js

This file is creating a custom extension for the Tiptap editor. The extension is
called `Shortkeys` and it adds several keyboard shortcuts to the editor. The `Extension` and
`mixinConvertToTiptap` are imported from external modules. The `addKeyboardShortcuts()` method
returns an object that maps keyboard shortcuts to functions that will be executed when the shortcut
is pressed. The functions perform various actions such as pasting text from the clipboard, inserting
HTML elements, and inserting TiptapInteractiveKatex. Finally, the `Shortkeys` extension is exported
as the default export of the module.

## 'Mod-Shift-v'

This code block defines a keyboard shortcut `'Mod-Shift-v'` that, when pressed, reads the text from the clipboard and performs several operations on it. It replaces any text that matches a regular expression pattern for formulas with a unique placeholder, splits the text into paragraphs, converts each paragraph to HTML with a `dir` attribute set to `auto`, replaces the unique placeholders with their original formulas, converts the resulting string to Tiptap format using a mixin method, and finally inserts the converted content into the editor. If there is an error reading the clipboard contents,an error message is logged to the console.


```javascript
// Paste Shortkey
'Mod-Shift-v': () => navigator.clipboard.readText()
                .then(text => {
                    let regex = mixinConvertToTiptap.methods.getRegexPatternForFormula()
                    let counter = 0
                    let formulas = []
                    text = text.replace(regex, match => {
                        formulas.push(match)
                        return '<UniqueFormulaPlaceholder>' + counter++ + '</UniqueFormulaPlaceholder>'
                    })
                    let splited_string = text.split(/\r?\n/)
                    for (let i = 0; i < splited_string.length; i++) {
                        splited_string[i] = '<p dir="auto">' + splited_string[i] + '</p>'
                    }
                    let str = splited_string.join('')
                    for (let i = 0; i < formulas.length; i++) {
                        str = str.replace('<UniqueFormulaPlaceholder>' + i + '</UniqueFormulaPlaceholder>', formulas[i])
                    }
                    let string = mixinConvertToTiptap.methods.convertToTiptap(str)
                    this.editor.commands.insertContent(string)

                })
                .catch(err => {
                    console.error('Failed to read clipboard contents: ', err);
                })
                
```
