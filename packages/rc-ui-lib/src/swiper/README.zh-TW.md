# Swiper 輪播

### 介紹

用於循環播放一組圖片或內容。

### 引入

```js
import { Swiper } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

每個 Swiper.Item 代表一張輪播卡片，可以通過 `autoplayInterval` 屬性設置自動輪播的間隔。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper className="my-swipe" autoplayInterval={3000}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

```css
.my-swipe .rc-swiper-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background: #3f45ff;
}
```

### 監聽 onIndexChange 事件

在每一頁輪播結束後，會觸發 `onIndexChange` 事件。

```jsx
import React from 'react';
import { Swiper, Toast } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper onIndexChange={(index) => Toast(`當前 Swipe 索引： + ${index}`)}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 縱向滾動

設置 `direction="vertical"` 屬性後滑塊會縱向排列，此時需要指定滑塊容器的高度。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper direction="vertical">
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 自定義滑塊大小

滑塊默認寬度為 `100%`，可以通過 `slideSize` 屬性改變滑塊寬度。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper slideSize={80}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 滑塊居中

通過 `trackOffset` 改變滑塊偏移量實現居中展示。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper slideSize={80} trackOffset={10}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 垂直滑塊居中

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper style={{ height: 150 }} direction="vertical" slideSize={80} trackOffset={10}>
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

### 自定義指示器

通過 `indicator` 屬性可以自定義指示器的樣式。

```jsx
import React from 'react';
import { Swiper } from 'rc-ui-lib';

export default () => {
  return (
    <Swiper
      indicator={(total, current) => (
        <div className="custom-indicator">
          {current + 1}/{total}
        </div>
      )}
    >
      <Swiper.Item>1</Swiper.Item>
      <Swiper.Item>2</Swiper.Item>
      <Swiper.Item>3</Swiper.Item>
      <Swiper.Item>4</Swiper.Item>
    </Swiper>
  );
};
```

```css
.custom-indicator {
  position: absolute;
  right: 15px;
  bottom: 10px;
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
}
```

## API

### Swipe Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| autoplayInterval | 自動輪播間隔，單位為 ms | _number \| boolean_ | `false` |
| autoplayIntervalInterval | 動畫時長，單位為 ms | _number_ | `300` |
| defaultIndex | 初始位置索引值 | _number_ | `0` |
| loop | 是否開啟循環播放 | _boolean_ | `true` |
| direction | 滾動方向 | _DirectionTypes_ | `horizontal` |
| touchable | 是否可以通過手勢滑動 | _boolean_ | `true` |
| slideSize | 滑塊的寬度百分比 | _number_ | `100` |
| trackOffset | 滑塊軌道整體的偏移量百分比 | _number_ | `0` |
| stuckAtBoundary | 是否在邊界兩邊卡住，避免出現空白，僅在非 `loop` 模式且 `slideSize` < 100 時生效 | _boolean_ | `false` |
| indicator | 自定義指示器 | _boolean \| (total, current) => ReactNode_ | - |
| indicatorProps | 指示器屬性 | _IndicatorProps_ | - |
| stopPropagation | 阻止某些事件的冒泡[2.0.2] | _PropagationEvent[]_ | [] |

```ts
type PropagationEvent = 'mouseup' | 'mousemove' | 'mousedown';
```

### DirectionTypes 格式

| 名稱                 | 說明     | 類型     |
| -------------------- | -------- | -------- |
| horizontal           | 水平方向 | _string_ |
| direction="vertical" | 垂直方向 | _string_ |

### IndicatorProps 格式

| 名稱      | 說明       | 類型     |
| --------- | ---------- | -------- |
| className | 指示器類名 | _string_ |
| style     | 指示器樣式 | _string_ |

### Swiper Events

| 事件名        | 說明                 | 回調參數            |
| ------------- | -------------------- | ------------------- |
| onIndexChange | 每一頁輪播結束後觸發 | index, 當前頁的索引 |

### SwiperItem Events

| 事件名  | 說明       | 回調參數            |
| ------- | ---------- | ------------------- |
| onClick | 點擊時觸發 | _event: MouseEvent_ |

### Swiper 方法

通過 ref 可以獲取到 Swiper 實例並調用實例方法。

| 方法名    | 說明           | 參數            | 返回值 |
| --------- | -------------- | --------------- | ------ |
| swipePrev | 切換到上一輪播 | -               | -      |
| swipeNext | 切換到下一輪播 | -               | -      |
| swipeTo   | 切換到指定位置 | _index: number_ | -      |

### 類型定義

元件導出以下類型定義：

```js
import type { SwiperInstance } from 'rc-ui-lib';
```

`SwiperInstance` 是元件實例的類型，用法如下：

```js
import { useRef } from 'react';
import type { SwiperInstance } from 'rc-ui-lib';

const swipeRef = useRef < SwipeInstance > null;

swipeRef.current?.swipeNext();
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                           | 默認值                    | 描述 |
| ---------------------------------------------- | ------------------------- | ---- |
| --rc-swipe-slide-size                          | _100%_                    | -    |
| --rc-swipe-track-offset                        | _0%_                      | -    |
| --rc-swipe-border-radius                       | _0px_                     | -    |
| --rc-swipe-indicator-size                      | _6px_                     | -    |
| --rc-swipe-indicator-margin                    | _var(--rc-padding-sm)_    | -    |
| --rc-swipe-indicator-active-opacity            | _1_                       | -    |
| --rc-swipe-indicator-inactive-opacity          | _0.3_                     | -    |
| --rc-swipe-indicator-active-background-color   | _var(--rc-primary-color)_ | -    |
| --rc-swipe-indicator-inactive-background-color | _var(--rc-border-color)_  | -    |

