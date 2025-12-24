# Dialog

### Introduction

Modal popup, commonly used for message prompts, message confirmation, or completing specific interactive operations on the current page.

The dialog component supports both function call and component call methods.

### Function Call

Dialog is a function. After calling it, the corresponding modal will pop up directly on the page.

```js
import { Dialog } from 'rc-ui-lib';
```

## Code Example

### Message Alert

Used to prompt some messages, containing only a confirm button.

```js
Dialog.alert({
  title: 'Title',
  message: 'Dialog content',
}).then(() => {
  // on close
});
```

### Promise Call

Dialog supports promise

```js
try {
  await Dialog.confirm({
    title: 'Title',
    message: 'Dialog content',
  });
  // after confirm do something
  console.log('confirm');
} catch (erorr) {
  // after cancel do something
}
```

### Message Confirm

Used to confirm messages, containing cancel and confirm buttons.

```js
Dialog.confirm({
  title: 'Title',
  message: 'Dialog content',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### Round Button Style

Setting the theme option to `round-button` can display a dialog with round button style. This option is supported from version 2.10.0.

```jsx
Dialog.alert({
  title: 'Title',
  message: 'Dialog content',
  theme: 'round-button',
});

Dialog.alert({
  message: 'Dialog content',
  theme: 'round-button',
});
```

### Custom Content

You can pass in `JSX` through the `children` property to customize the displayed content.

```jsx
Dialog.alert({
  title: 'Title',
  closeable: true,
  theme: 'round-button',
  children: (
    <div style={{ textAlign: 'center', margin: '16px' }}>
      Code is written to be read by people, with the added benefit that it can run on machines
    </div>
  ),
});
```

### Async Close

Return a `Promise` function through the `onConfirm` and `onCancel` properties to perform specific operations before the dialog closes.

```jsx
const onConfirm = (action, done) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
      Toast.success({ message: 'Confirm button async' });
    }, 3000);
  });
};

Dialog.confirm({
  title: 'Title',
  message: 'Dialog content',
  onConfirm,
});
```

### Component Call

If you need to embed components or other custom content in the dialog, you can use the component call method.

```js
const [show, setShow] = useState(false);
```

```jsx
<Dialog
  visible={show}
  title="Title"
  showCancelButton
  onCancel={() => setShow(false)}
  onConfirm={() => alert('confirm button click')}
>
  <img src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="2131" />
</Dialog>
```

## API

### Methods

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| Dialog | Dialog component | `options` | `React.ReactNode` |
| Dialog.show | Show alert dialog | `options` | `Promise` |
| Dialog.alert | Show message alert dialog | `options` | `Promise` |
| Dialog.confirm | Show message confirm dialog | `options` | `Promise` |

### Props

When calling `Dialog` via function, the following options are supported:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| visible | Whether to show dialog | _boolean_ | - |
| title | Title | _string_ | - |
| width | Dialog width, default unit is `px` | _number \| string_ | `320px` |
| message | Text content, supports line breaks via `\n` | _string_ | - |
| messageAlign | Content alignment, optional values are `left` `right` | _string_ | `center` |
| theme | Style theme, optional value is `round` | _string_ | `default` |
| className | Custom class name | _any_ | - |
| showConfirmButton | Whether to show confirm button | _boolean_ | `true` |
| showCancelButton | Whether to show cancel button | _boolean_ | `false` |
| confirmButtonText | Confirm button text | _string_ | `Confirm` |
| confirmButtonColor | Confirm button color | _string_ | `#ee0a24` |
| cancelButtonText | Cancel button text | _string_ | `Cancel` |
| cancelButtonColor | Cancel button color | _string_ | `black` |
| overlay | Whether to show overlay | _boolean_ | `true` |
| overlayClass | Custom overlay class name | _string_ | - |
| overlayStyle | Custom overlay style | _object_ | - |
| closeOnPopstate | Whether to close automatically when page goes back | _boolean_ | `true` |
| closeOnClickOverlay | Whether to close dialog after clicking overlay | _boolean_ | `false` |
| lockScroll | Whether to lock background scrolling | _boolean_ | `true` |
| transition | Animation class name [see](https://reactcommunity.org/react-transition-group/) | _string_ | - |
| onCancel | Triggered when clicking cancel button | _Function_ | - |
| onConfirm | Triggered when clicking confirm button | _Function_ | - |
| onClose | Callback when Dialog closes | _Function_ | - |
| onClosed | Callback when Dialog is completely closed | _Function_ | - |
| teleport | Specify mount node | _HTMLElement \| () => HTMLElement_ | `body` |
| footer | Custom bottom button area | _ReactNode_ | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-dialog-width | _320px_ | - |
| --rc-dialog-small-screen-width | _90%_ | - |
| --rc-dialog-font-size | _var(--rc-font-size-lg)_ | - |
| --rc-dialog-transition | _var(--rc-animation-duration-base)_ | - |
| --rc-dialog-border-radius | _16px_ | - |
| --rc-dialog-background-color | _var(--rc-white)_ | - |
| --rc-dialog-header-font-weight | _var(--rc-font-weight-bold)_ | - |
| --rc-dialog-header-line-height | _24px_ | - |
| --rc-dialog-header-padding-top | _26px_ | - |
| --rc-dialog-header-isolated-padding | _var(--rc-padding-lg) 0_ | - |
| --rc-dialog-message-padding | _var(--rc-padding-lg)_ | - |
| --rc-dialog-message-font-size | _var(--rc-font-size-md)_ | - |
| --rc-dialog-message-line-height | _var(--rc-line-height-md)_ | - |
| --rc-dialog-message-max-height | _60vh_ | - |
| --rc-dialog-has-title-message-text-color | _var(--rc-gray-7)_ | - |
| --rc-dialog-has-title-message-padding-top | _var(--rc-padding-xs)_ | - |
| --rc-dialog-button-height | _48px_ | - |
| --rc-dialog-round-button-height | _36px_ | - |
| --rc-dialog-confirm-button-text-color | _var(--rc-danger-color)_ | - |

