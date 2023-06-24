## convertToTiptap()

The `convertToTiptap` function takes a string as input and performs several operations on it,
such as replacing certain characters with their corresponding HTML entities, removing empty
formula elements, and converting LaTeX formulas to HTML using the `convertKatex` function.
The function also has commented out code for modifying special elements and converting
images, which are not currently being used. Finally, the function returns the modified
string.


```javascript
convertToTiptap(string) { //call this function when you want to convert pure HTML to tiptap format
            if (string === null || typeof string === 'undefined') {
                return ''
            }
            string = string.replaceAll('¬', '&#8202;')
            string = string.replaceAll('­', '&#8202;')
            string = string.replaceAll('', '')
            string = this.removeEmptyFormulaElements(string)
            // string = this.modifySpecialElements(string)
            string = this.convertKatex(string)
            // string = this.convertImage(string)
            return string
        }   
```

## convertKatex()

The `convertKatex` function replaces certain characters
with their corresponding HTML entities, removes unnecessary spaces, and uses a regular
expression to find LaTeX formulas in the string. It then extracts the formula and replaces
it with HTML code that renders the formula using the `katex.renderToString` function. The
resulting HTML code is wrapped in a `span` element with a `data-katex` attribute to indicate
that it contains a LaTeX formula. Finally, the modified string is returned.

```javascript
convertKatex(string) {
            string = string.replaceAll('\\[ ', '\\[')
            string = string.replaceAll(' \\]', '\\]')
            string = string.replaceAll(' $', '$')
            string = string.replaceAll('$ ', '$')

            let regex = this.getRegexPatternForFormula()
            string = string.replace(regex, (match) => {
                let finalMatch
                if (match.includes('$$')) {
                    finalMatch = match.slice(2, -2)
                } else if (match.includes('$')) {
                    finalMatch = match.slice(1, -1)
                } else {
                    finalMatch = match.slice(2, -2)
                }
                finalMatch = finalMatch.replaceAll('&amp;', '&').replaceAll('&nbsp;', ' ')
                finalMatch = finalMatch.replaceAll('&amp;', '&')
                if (finalMatch.includes('\\~')) {
                    finalMatch = finalMatch.replaceAll('~', 'sim ')
                }
                finalMatch = this.correctCurlyBrackets(finalMatch)
                return '<span data-katex="true">$' + finalMatch + '$</span>'
            })

            return string
        }    
```

## getRegexPatternForFormula()

`getRegexPatternForFormula()` is a method that returns a regular expression pattern used to
match LaTeX formulas in a string. The regular expression pattern includes four groups,
separated by the `|` character, that match different types of LaTeX formulas.

```javascript
getRegexPatternForFormula() {
            return /(\${2}((?!\$\$).)+?\${2})|(\${1}((?!\$).)+?\${1})|(\\\[.+?\\\])|(\[\\.+?\]\\)/gms;
}         
```

## renderKatexToHTML()

The function takes in a string input and uses regular expressions to replace LaTeX formulas with their corresponding HTML code using the KaTeX library.

param input - The input string that contains the LaTeX formulas to be rendered as HTML.

param [katexConfig] - An optional object that contains configuration options for the KaTeX library.

returns: The function `renderKatexToHTML` returns a string that has been processed to convert any LaTeX formulas into HTML using the KaTeX library. The input string is first converted to a format compatible with the Tiptap editor, and then a regular expression is used to identify any LaTeX formulas in the string. Each formula is then processed using the `katex.renderToString` function.

```javascript
renderKatexToHTML (input, katexConfig = {
            throwOnError: false,
            strict: 'warn',
            safe: true,
            trust: true
        }) {
            let string = input
            string = this.convertToTiptap(string)
            let regex = this.getRegexPatternForFormula()
            string = string.replace(regex, (match) => {
                let finalMatch
                if (match.includes('$')) {
                    finalMatch = match.slice(1, -1)
                } else {
                    finalMatch = match.slice(2, -2)
                }
                if (finalMatch){
                    finalMatch = this.replaceKatexSigns(finalMatch)
                }
                return katex.renderToString(finalMatch, katexConfig)
            })
            return string
        }      
```
