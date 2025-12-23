# RollingText 翻滾文本動效

### 介紹

文本翻滾動效，可以翻滾數字和其他類型文本。請升級 `rc-ui-lib` 到 >= 2.1.0 版本來使用該元件。
### 引入

```js
import { RollingText } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `startNum` 設置起始數值，`targetNum` 設置目標數值。RollingText 元件會自動開始動畫，從起始數值翻滾到目標數值。

```jsx
<RollingText startNum={0} targetNum={123} />
```

### 設置翻滾方向

通過 `direction` 屬性設置數字的翻滾方向，默認為向下翻滾，設置為 `up` 即可向上翻滾。

```jsx
<RollingText startNum={0} targetNum={432} direction="up" />
```

### 設置各數位停止順序

通過 `stopOrder` 屬性設置動畫各個數位的停止先後順序。默認先停止高位，設置為 `rtl` 可以先從個位停止。

```jsx
<RollingText startNum={0} targetNum={54321} stopOrder="rtl" />
```

### 翻轉非數字內容

使用 `textList` 屬性設置非數字內容的翻轉。元件會從數組的第一項翻轉到最後一項，請確保數組長度大於等於 2，以及每一項的長度一致。

```jsx

export default () => {
  const textList = [
      'aaaaa',
      'bbbbb',
      'ccccc',
      'ddddd',
      'eeeee',
      'fffff',
      'ggggg',
    ];
  return <RollingText textList={textList} duration={1} />;
};
```

### 自定義樣式

RollingText 元件提供了一些 CSS 變數，覆蓋這些變數來自定義樣式，也可以直接修改元件的樣式。此外，你還可以通過 `height` 屬性設置數字高度。

```jsx
<RollingText
  className="my-rolling-text"
  height={54}
  startNum={12345}
  targetNum={54321}
/>
```

```css
.my-rolling-text {
  --rc-rolling-text-background: #1989fa;
  --rc-rolling-text-color: white;
  --rc-rolling-text-font-size: 24px;
  --rc-rolling-text-gap: 6px;
  --rc-rolling-text-item-border-radius: 5px;
  --rc-rolling-text-item-width: 40px;
}
```

### 手動控制

通過 ref 獲取到元件實例後，調用 `start`、`reset` 方法，`start` 方法用於開始動畫，`reset` 方法用於重置動畫。

```jsx
export default () => {
  const rollingTextRef = useRef<RollingTextInstance>();
  
    const start = () => {
      rollingTextRef.current.start();
    };
  
    const reset = () => {
      rollingTextRef.current.reset();
    };

    return (
      <>
        <rc-rolling-text
          ref="rollingTextRef"
          startNum={0}
          targetNum={54321}
          autoStart={false}
        />
        <rc-grid columnNum={2}>
          <rc-grid-item icon="play-circle-o" text="start" onClick={start} />
          <rc-grid-item icon="replay" text="reset" onClick={reset} />
        </rc-grid>
      </>
    )

}
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| startNum | 起始數值 | _number_ | `0` |
| targetNum | 目標數值 | _number_ | - |
| textList | 內容數組，用於翻轉非數字內容 | _string[]_ | `[]` |
| duration | 動畫時長，單位為秒 | _number_ | `2` |
| direction | 文本翻滾方向，值為 `down` 和 `up` | _string_ | `down` |
| autoStart | 是否自動開始動畫 | _boolean_ | `true` |
| stopOrder | 各個數位動畫停止先後順序，值為 `ltr` 和 `rtl` | _string_ | `ltr` |
| height | 數字高度，單位為 `px` | _number_ | `40` |

### 方法

通過 ref 可以獲取到 RollingText 實例並調用實例方法，詳見[元件實例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 說明     | 參數 | 返回值 |
| ------ | -------- | ---- | ------ |
| start  | 開始動畫 | -    | -      |
| reset  | 重置動畫 | -    | -      |

### 類型定義

元件導出以下類型定義：

```ts
import type {
  RollingTextProps,
  RollingTextInstance,
  RollingTextDirection,
  RollingTextStopOrder,
} from 'rc-ui-lib';
```

`RollingTextInstance` 是元件實例的類型，用法如下：

```ts
import { useRef } from 'react';
import type { RollingTextInstance } from 'rc-ui-lib';

const rollingTextRef = useRef<RollingTextInstance>();

rollingTextRef.current?.start();
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱 | 默認值 | 描述 |
| --- | --- | --- |
| --rc-rolling-text-background | _inherit_ | 單個數位背景色 |
| --rc-rolling-text-color | _var(--rc-text-color)_ | 數字顏色 |
| --rc-rolling-text-font-size | _var(--rc-font-size-md)_ | 字體大小 |
| --rc-rolling-text-gap | _0px_ | 數位之間的間隔 |
| --rc-rolling-text-item-width | _15px_ | 單個數位寬度 |
| --rc-rolling-text-item-border-radius | _0px_ | 單個數位邊框圓角 |

