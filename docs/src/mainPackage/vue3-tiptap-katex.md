## VueTiptapKatex

This is where all the magic happens!

This is the main component that contains the options below to gather every other components needed in order to define and make the editor as it should be:

## EditorContent, BubbleMenu, FloatingMenu

all `@tiptap` components which accept the editor instance as a prop
The code has a data property called newTableData. The newTableData property is initialized with the original tableData passed as a prop.

## edit-table-modal

A custome made that is being used when a table cell is being edited by the user.

## toolbar

all the needed options to be on editor's toolbar are placed in this custome component. based on each option a specified chain of editor commands is ran to execute the desired functionality


## Editor instance

The editor instance is being initialized in the `mounted()` hook, all the necessary plugins are being configured with the `extensions` option, and at `onUpdate({})` method we normalize the given context using `convertToTiptap` method.
This created instance is then being passed as prop to all the components that need to use editor's config, commands and current context.
