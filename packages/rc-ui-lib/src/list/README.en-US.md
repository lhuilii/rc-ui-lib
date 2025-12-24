# List

### Introduction

Waterfall scroll loading for displaying long lists. When the list is about to scroll to the bottom, it will trigger an event and load more list items.

### Import

```js
import { List } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

When the List component scrolls to the bottom, it will trigger the `onLoad` event. At this time, you can initiate an asynchronous operation and update the data. If all data has been loaded, you can directly set `finished` to `true`.

> Different from vant, rc-ui-lib maintains loading and error states internally in the component based on onLoad.

```jsx
<List finished={finished} onLoad={onLoad}>
  {list.length
    ? list.map((item) => {
        return <Cell key={item} title={item} />;
      })
    : null}
</List>
```

```js
async function getData(throwError?) {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(new Error('error'));
      }
      resolve(Array.from({ length: 10 }, (_, i) => i));
    }, 1000);
  });
}

const [list, setList] = useState([]);
const [finished, setFinished] = useState(false);

const onLoad = async () => {
  // Asynchronously update data
  const data = await getData();
  setList((v) => [...v, ...data]);
  if (list.length >= 30) {
    setFinished(true);
  }
};
```

### Error Hint

If onLoad throws an error, an error hint will be displayed. After the user clicks the error hint, the onLoad event will be triggered again.

```jsx
<List errorText="Request failed, click to reload" onLoad={onLoadError}>
  {errorList.length
    ? errorList.map((item) => {
        return <Cell key={item} title={item} />;
      })
    : null}
</List>
```

```js
// Simulate async error, not needed in actual business
const [count, setCount] = useState(0);
const [errorList, setErrorList] = useState([]);

const onLoadError = async () => {
  // Asynchronously update data
  setCount((v) => v + 1);
  // When request count equals 1, getData will throw an error
  const data = await getData(count === 1);
  setErrorList((v) => [...v, ...data]);
  if (list.length >= 30) {
    setFinished(true);
  }
};
```

### Pull to Refresh

The List component can be used together with the [PullRefresh](#/en-US/pull-refresh) component to achieve pull-to-refresh effect.

```jsx
<PullRefresh onRefresh={onRefresh}>
  <List ref={listRef} finished={finished} onLoad={onLoadRefresh}>
    {list.length
      ? list.map((item) => {
          return <Cell key={item} title={item} />;
        })
      : null}
  </List>
</PullRefresh>
```

```js
const listRef = useRef(null);
const [finished, setFinished] = useState(false);
const [refreshList, setRefreshList] = useState([]);

const onLoadRefresh = async (isRefresh) => {
  const data = await getData();
  setRefreshList((v) => {
    const newList = isRefresh ? data : [...v, ...data];
    if (newList.length >= 30) {
      setFinished(true);
    }
    return newList;
  });
};

const onRefresh = async () => {
  setFinished(false);
  await onLoadRefresh(1);
  // Call the check method of list to check if onLoad method needs to continue executing
  listRef.current?.check();
};
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| loading | Whether it is in loading state. During loading, `load` event will not be triggered | _boolean_ | `false` |
| finished | Whether loading is complete. After loading is complete, `load` event will no longer be triggered | _boolean_ | `false` |
| error | Whether loading failed. After loading fails, clicking the error hint can trigger `load` event again. Must use `sync` modifier | _boolean_ | `false` |
| offset | Trigger `load` event when the distance between scrollbar and bottom is less than offset | _number \| string_ | `300` |
| loadingText | Hint text during loading | _ReactNode_ | `Loading...` |
| finishedText | Hint text after loading is complete | _ReactNode_ | - |
| errorText | Hint text after loading fails | _ReactNode_ | - |
| immediateCheck | Whether to immediately execute scroll position check during initialization | _boolean_ | `true` |
| autoCheck `v1.0.1` | Whether to check scroll position again after onLoad is executed | _boolean_ | `true` |

### Events

| Event Name | Description | Type | Callback Parameters |
| --- | --- | --- | --- |
| onLoad | Triggered when the distance between scrollbar and bottom is less than offset | _() => (Promise \| void)_ | - |

### Methods

You can get the List instance and call instance methods through ref

| Method Name | Description | Parameters | Return Value |
| --- | --- | --- | --- |
| check | Check the current scroll position. If it has scrolled to the bottom, the onLoad event will be triggered | - | - |

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-list-text-color | _var(--rc-gray-6)_ | - |
| --rc-list-text-font-size | _var(--rc-font-size-md)_ | - |
| --rc-list-text-line-height | _50px_ | - |
| --rc-list-loading-icon-size | _16px_ | - |

## Common Issues

### How does List work?

List listens to the browser's scroll event and calculates the position of the list. When the distance between the bottom of the list and the visible area is less than `offset`, List will trigger a load event.

### Why does List trigger load event immediately after initialization?

List will trigger a load event after initialization to load the first screen of data. This feature can be disabled through the `immediateCheck` property.

### Why does it trigger load events continuously?

If the number of data items loaded in one request is small, causing the list content to not fill the current screen, List will continue to trigger load events until the content fills the screen or all data is loaded. Therefore, you need to adjust the number of data items obtained each time. Ideally, the number of data items obtained in each request should be able to fill one screen height.

### What do loading and finished mean?

`List` has the following three states. Understanding these states will help you use the `List` component correctly:

- Not loading, `loading` is `false`. At this time, it will judge whether to trigger the `load` event based on the list scroll position (when the list content is less than one screen, it will trigger directly)
- Loading, `loading` is `true`, indicating that an asynchronous request is being sent. At this time, the `load` event will not be triggered
- Loading complete, `finished` is `true`. At this time, the `load` event will not be triggered

After each request is completed, you need to manually set `loading` to `false` to indicate that loading has ended

### Always triggering loading after setting overflow on html and body?

If you set the `overflow-x: hidden` style on the html and body tags, it will cause List to always trigger loading.

```css
html,
body {
  overflow-x: hidden;
}
```

The reason for this problem is that when an element has the `overflow-x: hidden` style set, the element's `overflow-y` will be set to `auto` by the browser instead of the default value `visible`, causing List to be unable to correctly judge the scroll container. The solution is to remove this style, or add the `height: 100%` style to the html and body tags.

