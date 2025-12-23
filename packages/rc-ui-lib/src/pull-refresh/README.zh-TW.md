# PullRefresh 下拉刷新

### 介紹

用於提供下拉刷新的交互操作。

### 引入

```js
import { PullRefresh } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

下拉刷新時會觸發 `onRefresh` 事件，在事件的回調函數中可以進行同步或異步操作，操作完成後表示載入完成。

> 和 vant 不同的是，rc-ui-lib 根據 onRefresh 在元件內部維護了 loading 狀態。

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
      <p>下拉刷新</p>
    </PullRefresh>
  );
};
```

### 成功提示

通過 `successText` 可以設置刷新成功後的頂部提示文案。

```jsx
<PullRefresh successText="刷新成功" onRefresh={onRefresh}>
  <p>下拉刷新</p>
</PullRefresh>
```

### 自定義提示

通過插槽可以自定義下拉刷新過程中的提示內容。

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

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| pullingText | 下拉過程提示文案 | _ReactNode\|({ distance }) => ReactNode_ | `下拉即可刷新...` |
| loosingText | 釋放過程提示文案 | _ReactNode\|({ distance }) => ReactNode_ | `釋放即可刷新...` |
| loadingText | 載入過程提示文案 | _ReactNode\|({ distance }) => ReactNode_ | `載入中...` |
| successText | 刷新成功提示文案 | _ReactNode\|({ distance }) => ReactNode_ | - |
| successDuration | 刷新成功提示展示時長(ms) | _number \| string_ | `500` |
| animationDuration | 動畫時長 | _number \| string_ | `300` |
| headHeight | 頂部內容高度 | _number \| string_ | `50` |
| pullDistance | 觸發下拉刷新的距離 | _number \| string_ | 與 `headHeight` 一致 |
| disabled | 是否禁用下拉刷新 | _boolean_ | `false` |

### Events

| 事件名    | 說明           | 類型                    | 回調參數 |
| --------- | -------------- | ----------------------- | -------- |
| onRefresh | 下拉刷新時觸發 | _() => (Promise\|void)_ | -        |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                | 默認值                   | 描述 |
| ----------------------------------- | ------------------------ | ---- |
| --rc-pull-refresh-head-height       | _50px_                   | -    |
| --rc-pull-refresh-head-font-size    | _var(--rc-font-size-md)_ | -    |
| --rc-pull-refresh-head-text-color   | _var(--rc-gray-6)_       | -    |
| --rc-pull-refresh-loading-icon-size | _16px_                   | -    |

## 常見問題

### PullReresh 的內容未填滿屏幕時，只有一部分區域可以下拉？

默認情況下，下拉區域的高度是和內容高度保持一致的，如果需要讓下拉區域始終為全屏，可以給 PullRefresh 設置一個與屏幕大小相等的最小高度：

```jsx
<PullRefresh style="min-height: 100vh;" />
```

