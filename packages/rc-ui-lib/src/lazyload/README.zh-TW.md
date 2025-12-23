# Lazyload 懶加載

### 介紹

當頁面需要載入大量內容時，使用懶加載可以實現延遲載入頁面可視區域外的內容，從而使頁面載入更流暢。

### 引入

```js
import { Lazyload } from 'rc-ui-lib';
```

## 程式碼演示

### 圖片懶加載

圖片懶加載需要使用 `Lazyload.Image` 元件，將需要懶加載的圖片放在 `image` 熟悉中，即可實現圖片懶加載。

```js
import React from 'react';
import { Lazyload } from 'rc-ui-lib';
const images = [
  'https://img01.yzcdn.cn/vant/apple-1.jpg',
  'https://img01.yzcdn.cn/vant/apple-2.jpg',
];
export default () => {
  return (
    <>
      {images.map((image) => (
        <Lazyload.Image key={image} image={image} />
      ))}
    </>
  );
};
```

### 背景圖懶加載

和圖片懶加載不同，背景圖懶加載需要設置 `type`為 `background`，需要注意的是必須聲明容器高度。

```js
import React from 'react';
import { Lazyload } from 'rc-ui-lib';
const images = [
  'https://img01.yzcdn.cn/vant/apple-1.jpg',
  'https://img01.yzcdn.cn/vant/apple-2.jpg',
];
export default () => {
  return (
    <>
      {images.map((image) => (
        <Lazyload.Image type="background" key={image} height="300px" image={image} />
      ))}
    </>
  );
};
```

### 元件懶加載

將需要懶加載的元件放在 `Lazyload` 標籤中，即可實現元件懶加載。

```js
import React from 'react';
import { Lazyload, Loading } from 'rc-ui-lib';
const images = [
  'https://img01.yzcdn.cn/vant/apple-1.jpg',
  'https://img01.yzcdn.cn/vant/apple-2.jpg',
];
export default () => {
  return (
    <>
      {images.map((image) => (
        <Lazyload key={image} loading={<Loading />}>
          <img alt="" src={image} width="100%" height="300" />
        </Lazyload>
      ))}
    </>
  );
};
```

## API

### LazyloadProps

| 參數            | 說明                          | 類型               | 默認值  |
| --------------- | ----------------------------- | ------------------ | ------- |
| children        | 懶加載模塊                    | _React.ReactNode_  | -       |
| loading         | 載入時的元件                  | _React.ReactNode_  | -       |
| height          | 佔位高度                      | _string_\|_number_ | `0`     |
| observer        | 是否使用 IntersectionObserver | _boolean_          | `true`  |
| forceVisible    | 是否強制展示                  | _boolean_          | `false` |
| eventOptions    | 事件監聽選項                  | _EventOptions_     |         |
| observerOptions | ObserverOptions               | _ObserverOptions_  | -       |

### LazyloadImageProps

| 參數            | 說明                          | 類型                           | 默認值  |
| --------------- | ----------------------------- | ------------------------------ | ------- |
| image           | 圖片地址                      | _string_                       | -       |
| loading         | 載入時的圖片                  | _string_                       | -       |
| errorImage      | 錯誤時的圖片                  | _string_                       | -       |
| height          | 圖片高度                      | _string_\|_number_             | -       |
| width           | 圖片寬度                      | _string_\|_number_             | -       |
| type            | 載入類型                      | **'image'**\| **'background'** | `image` |
| observer        | 是否使用 IntersectionObserver | _boolean_                      | `true`  |
| eventOptions    | 事件監聽選項                  | _EventOptions_                 | -       |
| observerOptions | ObserverOptions               | _ObserverOptions_              | -       |

### Events

| 事件名   | 說明             | 回調參數 |
| -------- | ---------------- | -------- |
| onLoaded | 圖片載入完時回調 | -        |

### ObserverOptions

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| root | 指定根元素，用於檢查目標的可見性 | _Element_ | - |
| rootMargin | 根元素的外邊距 | _string_ | - |
| threshold | target 和 root 相交程度達到該值的時候 IntersectionObserver 註冊的回調函數將會被執行 | _number_\|_number[]_ | `0` |

### EventOptions

| 參數            | 說明                   | 類型       | 默認值          |
| --------------- | ---------------------- | ---------- | --------------- |
| scrollContainer | 滾動的容器             | _Element_  | `document.body` |
| offset          | 偏移量                 | _number_   | `0`             |
| listenEvents    | 監聽的事件             | _string[]_ | `scroll`等      |
| debounce        | 使用防抖並設置等待時間 | _number_   | `300`           |
| throttle        | 使用節流並設置等待時間 | _number_   | -               |

### 類型定義

元件導出以下類型定義：

```js
import type { LazyloadProps, LazyloadImageProps } from 'rc-ui-lib';
```

