## EXTRA_KEYBOARD_LAYER

Used to define custome layers in mathlive

```javascript
const EXTRA_KEYBOARD_LAYER = {
    'others-keyboard-layer': {
        styles: '',
        rows: []
    },
    'matrix-keyboard-layer': {},
    'extra-keyboard-layer': {},
};
                
```

## EXTRA_KEYBOARD

An object called `EXTRA_KEYBOARD` which contains properties for different
virtual keyboard options. Each keyboard option has a label, tooltip, and layer associated with it.
Each layer is defined in `EXTRA_KEYBOARD_LAYER`.
These virtual keyboards can be used in mathlive to provide users with different keyboard
layouts and functionalities.

```javascript
const EXTRA_KEYBOARD = {
    ...
};
                
```

