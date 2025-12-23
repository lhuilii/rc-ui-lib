# WaterMark 水印

### 介紹

給頁面的某個區域加上水印，支持文字和圖案。請升級 `rc-ui-lib` 到 >= 2.1.0 版本來使用該元件。

### 引入

適用於防止信息盜用、標識版權時使用。

```js
import { Watermark } from 'rc-ui-lib';
```

## 程式碼演示

### 文字水印

通過 `content` 屬性來設置水印的文字。

```jsx
<Watermark content="rc-ui-lib" />
```

### 圖片水印

通過 `image` 屬性來設置水印圖片，並使用 `opacity` 來調整水印的整體透明度。

```jsx
<Watermark
  image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png"
  width={180}
  height={90}
  opacity={0.2}
/>
```

### 自定義間隔

通過 `gapX` 和 `gapY` 屬性來控制多個重複水印之間的間隔。

```jsx
<Watermark
  image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png"
  gapX={30}
  gapY={10}
  opacity={0.2}
/>
```

### 自定義傾斜角度

通過 `rotate` 屬性來控制水印的傾斜角度，默認值為`-22`。

```jsx
<Watermark image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png" rotate="22" opacity={0.2} />
```

### 顯示範圍

通過 `full-page` 屬性來控制水印的顯示範圍。

```jsx
<Watermark image="https://rancui.github.io/rc-ui-lib/rc-ui-lib.png" fullPage />
```

### HTML 水印

通過 `children` 可以直接傳入 HTML 作為水印。HTML 中的樣式僅支持行內樣式，同時不支持傳入自閉合標籤。

```jsx
<Watermark width={150}>
  <div style={{ background: 'linear-gradient(45deg, #000 0, #000 50%, #fff 50%)' }}>
    <p style={{ mixBlendMode: 'difference', color: '#fff' }}>rc watermark</p>
  </div>
</Watermark>
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| width | 水印寬度 | _number_ | `100` |
| height | 水印高度 | _number_ | `100` |
| zIndex | 水印的 z-index | _number \| string_ | `100` |
| content | 文字水印的內容 | _string_ | - |
| image | 圖片水印的內容，如果與 `content` 同時傳入，優先使用圖片水印 | _string_ | - |
| rotate | 水印的旋轉角度 | _number \| string_ | `-22` |
| fullPage | 水印是否全屏顯示 | _boolean_ | `false` |
| gapX | 水印之間的水平間隔 | _number_ | `0` |
| gapY | 水印之間的垂直間隔 | _number_ | `0` |
| textColor | 文字水印的顏色 | _string_ | `#dcdee0` |
| opacity | 水印的透明度 | _number_ | - |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](/components/config-provider)。

| 名稱                    | 默認值 | 描述 |
| ----------------------- | ------ | ---- |
| --rc-water-mark-z-index | _100_  | -    |

