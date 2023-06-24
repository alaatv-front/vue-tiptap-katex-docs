## onFileUpload

The `onFileUpload` function is called when a file is uploaded and updates the attributes of the image
node with the new URL, width, and height values. It first checks if there is an error and
returns if there is. Then, it gets the image URL from the response using the
`getImageUrlFromResponse` method and updates the `url` attribute of the image node with the
new URL. It then creates a new `Image` object and sets its `onload` function to update the
`width` and `height` attributes of the image node with the natural width and height of the
image. Finally, it sets the `src` attribute of the `Image` object to the new image URL.


```javascript
onFileUpload (err, file) {
            if (err) {
                return
            }

            const imageUrl = this.getImageUrlFromResponse(JSON.parse(file.serverId))
            this.updateAttributes({
                url: imageUrl
            })
            let img = new Image();
            let that = this
            img.onload = function() {
                that.updateAttributes({
                    width: img.naturalWidth,
                    height: img.naturalHeight
                })
                that.setNaturalSize()
            };
            img.src = imageUrl
        }       
```

## resizeEnd()

This function is called when the user finishes resizing an image in the editor. The function updates the
width and height attributes of the image node with the new values from the resize event. If
the editor has an onResizeEnd option set, it also calls that function with the image URL and
the new width and height values as arguments, and updates the URL attribute of the image
node with the returned value.

```javascript
resizeEnd (event) {
            this.updateAttributes({
                width: event.width,
                height: event.height
            })
            if (this.editor.editorOptions.onResizeEnd) {
                this.updateAttributes({
                    url: this.editor.editorOptions.onResizeEnd(this.node.attrs.url, event.width, event.height)
                })
            }
        }         
```
