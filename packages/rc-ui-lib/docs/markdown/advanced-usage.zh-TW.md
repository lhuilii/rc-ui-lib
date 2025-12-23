# 進階用法(@todo)

### 介紹

通過本章節你可以了解到一些進階用法，比如多種瀏覽器適配方式。

### 元件實例方法

rc-ui-lib中的許多組件提供了實例方法，調用實例方法時，我們需要透過 [useRef](https://beta.reactjs.org/apis/react/useRef) 來引用組件實例，我們可以透過`ref.current`訪問到對應的組件實例，並調用上面的實例方法。

```jsx
import { useRef } from 'react';
import { Checkbox } from 'rc-ui-lib';

export default () => {
  const checkbox = useRef(null);
  return (
    <Checkbox checked={checked} ref={checkbox}>
      複選框
    </Checkbox>
  );
};
```

## 瀏覽器適配

rc-ui-lib 預設使用 `px` 作為樣式單位，如果需要使用 `viewport` 單位 (vw, vh, vmin, vmax)，推薦使用 [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 進行轉換。

[postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 是一款 PostCSS 插件，用於將 px 單位轉化為 vw/vh 單位。

#### PostCSS PostCSS 示例配置

下面提供了一份基本的 PostCSS 示例配置，可以在此配置的基礎上根據項目需求進行修改。

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};
```

> Tips: 在配置 postcss-loader 時，應避免 ignore node_modules 目錄，否則將導致 rc-ui-lib 樣式無法被編譯。

### 觸摸事件模擬

這是一個面向行動端的元件庫，因此預設只適配了行動端設備，這意味著元件只監聽了行動端的 `touch` 事件，沒有監聽桌面端的 `mouse` 事件。

如果你需要在桌面端使用，可以引入我們提供的 [@vant/touch-emulator](https://github.com/youzan/vant/tree/dev/packages/vant-touch-emulator)，這個庫會在桌面端自動將 `mouse` 事件轉換成對應的 `touch` 事件，使得組件能够在桌面端使用。

```bash
# 安裝模組
npm i vant/touch-emulator -S
```

```js
// 引入模組後自動生效
import '@vant/touch-emulator';
```

### 底部安全區適配

iPhone X 等機型底部存在底部指示條，指示條的操作區域與頁面底部存在重合，容易導致用戶誤操作，因此我們需要針對這些機型進行安全區適配。部分組件提供了 `safeAreaInsetTop` 或 `safeAreaInsetBottom` 屬性，設置該屬性後，即可在對應的機型上開啟適配，如下示例：

```jsx
<!-- 在 head 標籤中添加 meta 標籤，並設置 viewport-fit=cover 值 -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
/>

<!-- 開啟頂部安全區適配 -->
<Navbar safeAreaInsetTop />

<!-- 開啟底部安全區適配 -->
<NumberKeyboard safeAreaInsetBottom />
```

<img src="https://img.yzcdn.cn/vant/safearea.png" />
