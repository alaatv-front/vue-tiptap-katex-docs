const sideBarRoutes = [
    {
        text: 'Getting Started',
        items: [
            { text: 'main libraries explained', link: '/gettingStarted/main-libraries.md' },
            { text: 'How does It Work?',
                items: [
                    { text: 'tiptap interactive katex', link: '/gettingStarted/HDIW/mathlive-extention' },
                    { text: 'formula rendering flow', link: '/gettingStarted/HDIW/theFormulaFlow' }
                ]
            }
        ]
    },
    {
        text: 'main package files',
        items: [
            { text: 'formula',
                items: [
                    { text: 'TiptapInteractiveKatex', link: '/mainPackage/formula/TiptapInteractiveKatex.md' },
                    { text: 'extensionFormulaInline', link: '/mainPackage/formula/extensionFormulaInline.md' }
                ]
            },
            { text: 'ImageUpload',
                items: [
                    { text: 'TiptapInteractiveImageUpload', link: '/mainPackage/ImageUpload/extensionImageInline.md' }
                ]
            },
            { text: 'poem',
                items: [
                    { text: 'mesra', link: '/mainPackage/poem/mesra.md' },
                    { text: 'beit', link: '/mainPackage/poem/beit.md' }
                ]
            },
            { text: 'EditTableModal', link: '/mainPackage/EditTableModal.md' },
            { text: 'vue3-tiptap-katex', link: '/mainPackage/vue3-tiptap-katex' },
        ]
    },
    {
        text: 'core package files',
        items: [
            { text: 'extension',
                items: [
                    { text: 'text-direction-extension', link: '/corePackage/extension/tiptap-text-direction-extension.md' },
                    { text: 'TiptapShortkeys', link: '/corePackage/extension/TiptapShortkeys.md' }
                ]
            },
            { text: 'formula',
                items: [
                    { text: 'ExtraKeyboard', link: '/corePackage/formula/ExtraKeyboard.md' },
                    { text: 'KatexShortkeys', link: '/corePackage/formula/KatexShortkeys.md' },
                    { text: 'mixin', link: '/corePackage/formula/mixin.md' }
                ]
            },
            { text: 'ImageUpload',
                items: [
                    { text: 'mixin', link: '/corePackage/ImageUpload/mixin.md' }
                ]
            },
            { text: 'mixins',
                items: [
                    { text: 'convertToTiptap', link: '/corePackage/mixins/convertToTiptap.md' }
                ]
            },
            { text: 'toolbar',
                items: [
                    { text: 'toolbar', link: '/corePackage/toolbar/toolbar.md' }
               ]
            },
      ]
    }
]
export default sideBarRoutes
