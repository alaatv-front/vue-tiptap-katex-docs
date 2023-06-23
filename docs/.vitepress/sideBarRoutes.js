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
            { text: 'Components',
                items: [
                    { text: 'formula',
                        items: [
                            { text: 'TiptapInteractiveKatex', link: '/mainPackage/components/formula/TiptapInteractiveKatex.md' },
                            // { text: 'Getting Started', link: '/mainPackage/components/' }
                        ]
                    },
                    { text: 'ImageUpload',
                        items: [
                            { text: 'TiptapInteractiveImageUpload', link: '/mainPackage/components/ImageUpload/TiptapInteractiveImageUpload.md' },
                            // { text: 'Getting Started', link: '/mainPackage/components/ImageUpload/' }
                        ]
                    },
                    { text: 'poem',
                        items: [
                            { text: 'mesra', link: '/mainPackage/components/poem/mesra.md' },
                            { text: 'TiptapInteractivePoem', link: '/mainPackage/components/poem/TiptapInteractivePoem.md' }
                        ]
                    },
                    { text: 'reading',
                        items: [
                            { text: 'TiptapInteractiveReading', link: '/mainPackage/components/reading/TiptapInteractiveReading.md' },
                            // { text: 'Getting Started', link: '/mainPackage/components/reading' }
                        ]
                    },
                    { text: 'EditTableModal', link: '/mainPackage/components/EditTableModal.md' },
                    { text: 'vue3-tiptap-katex', link: '/mainPackage/components/vue3-tiptap-katex' },
                ]
            }
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
                    { text: 'toolbar', link: '/corePackage/toolbar/toolbar.md' },
                    // { text: 'Getting Started', link: '/mainPackage/components/reading' }
                ]
            },
            // { text: 'EditTableModal', link: '/mainPackage/components/EditTableModal.md' },
            // { text: 'vue3-tiptap-katex', link: '/mainPackage/components/vue3-tiptap-katex' },
        ]
    }
]
export default sideBarRoutes
