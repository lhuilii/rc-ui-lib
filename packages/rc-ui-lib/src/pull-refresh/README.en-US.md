# PullRefresh 

### Introduction

Used to provide pull-to-refresh interaction.

### Import

```js
import { PullRefresh } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

When pulling to refresh, the `onRefresh` event will be triggered. In the callback function of the event, you can perform synchronous or asynchronous operations. After the operation is completed, it indicates that loading is complete.

> Different from vant, rc-ui-lib maintains loading state internally in the component based on onRefresh.

```jsx
export default () => {
  const onRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };
  return (
    <PullRefresh onRefresh={onRefresh}>
      <p>Pull to refresh</p>
    </PullRefresh>
  );
};
```

### Success Hint

You can set the top hint text after successful refresh through `successText`.

```jsx
<PullRefresh successText="Refresh successful" onRefresh={onRefresh}>
  <p>Pull to refresh</p>
</PullRefresh>
```

### Custom Hint

You can customize the hint content during the pull-to-refresh process through slots.

```jsx
<PullRefresh
  headHeight={80}
  pullingText={({ distance }) => (
    <img
      className="doge"
      src="https://img.yzcdn.cn/vant/doge.png"
      style={{ transform: `scale(${distance / 80})` }}
    />
  )}
  loosingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge.png" />}
  loadingText={() => <img className="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />}
  onRefresh={onRefresh}
>
  <p>{tips}</p>
</PullRefresh>
```

```css
.doge {
  width: 140px;
  height: 72px;
  margin-top: 8px;
  border-radius: 4px;
}
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| pullingText | Hint text during pulling | _ReactNode\|({ distance }) => ReactNode_ | `Pull to refresh...` |
| loosingText | Hint text during releasing | _ReactNode\|({ distance }) => ReactNode_ | `Release to refresh...` |
| loadingText | Hint text during loading | _ReactNode\|({ distance }) => ReactNode_ | `Loading...` |
| successText | Hint text after successful refresh | _ReactNode\|({ distance }) => ReactNode_ | - |
| successDuration | Display duration of successful refresh hint (ms) | _number \| string_ | `500` |
| animationDuration | Animation duration | _number \| string_ | `300` |
| headHeight | Top content height | _number \| string_ | `50` |
| pullDistance | Distance to trigger pull-to-refresh | _number \| string_ | Same as `headHeight` |
| disabled | Whether to disable pull-to-refresh | _boolean_ | `false` |

### Events

| Event Name | Description | Type | Callback Parameters |
| --- | --- | --- | --- |
| onRefresh | Triggered when pulling to refresh | _() => (Promise\|void)_ | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-pull-refresh-head-height | _50px_ | - |
| --rc-pull-refresh-head-font-size | _var(--rc-font-size-md)_ | - |
| --rc-pull-refresh-head-text-color | _var(--rc-gray-6)_ | - |
| --rc-pull-refresh-loading-icon-size | _16px_ | - |

## Common Issues

### When PullRefresh content does not fill the screen, only part of the area can be pulled?

By default, the height of the pull area is consistent with the content height. If you need to make the pull area always full screen, you can set a minimum height equal to the screen size for PullRefresh:

```jsx
<PullRefresh style="min-height: 100vh;" />
```

