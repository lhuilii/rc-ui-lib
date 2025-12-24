# Notify 

### Introduction

Display message notifications at the top of the page, supporting both function call and component call methods.

### Function Call

Notify is a function. After calling it, the corresponding message notification will pop up directly on the page.

```js
import { Notify } from 'rc-ui-lib';

Notify.show('Notification content');
```

### Component Call

When calling Notify through a component, you can register it in the following way:

```js
import { useState } from 'react';
import { Notify, Flex, Icon, Button } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>Open Notify</Button>
      <Notify visible={visible} type="success">
        <Flex style={{ width: '100%' }} align="center" justify="between">
          <div />
          <div>
            <Icon name="bell" style={{ marginRight: 4 }} />
            <span>Notification content</span>
          </div>
          <Icon name="close" onClick={() => setVisible(false)} />
        </Flex>
      </Notify>
    </>
  );
};
```

## Code Example

### Basic Usage

```jsx
Notify.show('Notification content');
```

### Notification Type

Supports four notification types: `primary`, `success`, `warning`, and `danger`. The default is `danger`.

```js
// Primary notification
Notify.show({ type: 'primary', message: 'Notification content' });

// Success notification
Notify.show({ type: 'success', message: 'Notification content' });

// Danger notification
Notify.show({ type: 'danger', message: 'Notification content' });

// Warning notification
Notify.show({ type: 'warning', message: 'Notification content' });
```

### Custom Notification

Customize the color and display duration of message notifications.

```jsx
Notify.show({
  message: 'Custom color',
  color: '#ad0000',
  background: '#ffe1e1',
});

Notify.show({
  message: 'Custom duration',
  duration: 1000,
});
```

## API

### Methods

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| Notify.show | Show notification | `options \| message` | notify instance |
| Notify.clear | Close notification | - | `void` |
| Notify.setDefaultOptions | Modify default options, effective for all Notify | `options` | `void` |
| Notify.resetDefaultOptions | Reset default options, effective for all Notify | - | `void` |

### Options

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type, optional values are `primary` `success` `warning` | _string_ | `danger` |
| message | Display text, supports line breaks through `\n` | _string\|React.ReactNode_ | - |
| duration | Display duration (ms), when the value is 0, notify will not disappear | _number_ | `3000` |
| color | Font color | _string_ | `white` |
| background | Background color | _string_ | - |
| className | Custom class name | _string_ | - |
| lockScroll | Whether to lock background scrolling | _boolean_ | `false` |
| onClick | Callback function when clicking | _(event: MouseEvent): void_ | - |
| onClose | Callback function when closing | _() => void_ | - |
| teleport | Specify the mounted node | _HTMLElement \| () => HTMLElement_ | `body` |

### Type Definitions

The component exports the following type definitions:

```js
import type { NotifyType, NotifyProps } from 'rc-ui-lib';
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-notify-text-color | _var(--rc-white)_ | - |
| --rc-notify-padding | _var(--rc-padding-xs) var(--rc-padding-md)_ | - |
| --rc-notify-font-size | _var(--rc-font-size-md)_ | - |
| --rc-notify-line-height | _var(--rc-line-height-md)_ | - |
| --rc-notify-primary-background-color | _var(--rc-primary-color)_ | - |
| --rc-notify-success-background-color | _var(--rc-success-color)_ | - |
| --rc-notify-danger-background-color | _var(--rc-danger-color)_ | - |
| --rc-notify-warning-background-color | _var(--rc-warning-color)_ | - |

