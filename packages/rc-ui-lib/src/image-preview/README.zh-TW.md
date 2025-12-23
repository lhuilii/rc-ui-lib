# ImagePreview 圖片預覽

### 介紹

圖片預覽，支持函數調用和元件調用兩種方式。

### 函數調用

`ImagePreview.open` 是一個函數，調用函數後會直接在頁面中展示圖片預覽界面。

```js
import { ImagePreview } from 'rc-ui-lib';

ImagePreview.open({ images: ['https://img.yzcdn.cn/vant/apple-1.jpg'] });
```

### 元件調用

通過元件調用 `ImagePreview` 時，可以通過下面的方式進行註冊。

```jsx
import { ImagePreview, Button } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>元件調用</Button>
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={['https://img.yzcdn.cn/vant/apple-1.jpg']}
      />
    </>
  );
};
```

## 程式碼演示

### 基礎用法

直接傳入圖片數組，即可展示圖片預覽。

```js
ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
});
```

### 指定初始位置

`ImagePreview` 支持傳入配置對象，並通過 `startPosition` 選項指定圖片的初始位置（索引值）。

```js
ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
  startPosition: 1,
});
```

### 展示關閉按鈕

設置 `closeable` 屬性後，會在彈出層的右上角顯示關閉圖標，並且可以通過 `closeIcon` 屬性自定義圖標，使用`closeIconPosition` 屬性可以自定義圖標位置。

```js
ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
  closeable: true,
});
```

### 監聽關閉事件

通過 `onClose` 選項監聽圖片預覽的關閉事件。

```js
import { Toast } from 'rc-ui-lib';

ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
  onClose() {
    Toast('關閉');
  },
});
```

### 異步關閉

`ImagePreview.open`會返回實例的銷毀方法。

```js
const destory = ImagePreview.open({
  images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg'],
});

setTimeout(() => {
  // 調用實例的銷毀方法手動關閉圖片預覽
  destory();
}, 2000);
```

### 元件調用

如果需要在圖片預覽內嵌入元件或其他自定義內容，可以使用元件調用的方式。

```jsx
import { ImagePreview, Button } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>元件調用</Button>
      <ImagePreview
        visible={visible}
        onClose={() => setVisible(false)}
        images={['https://img.yzcdn.cn/vant/apple-1.jpg']}
      />
    </>
  );
};
```

## API

### Options

通過函數調用 `ImagePreview.open` 時，支持傳入以下選項：

| 參數名 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| images | 需要預覽的圖片 URL 數組 | _string[]_ | `[]` |
| startPosition | 圖片預覽起始位置索引 | _number \| string_ | `0` |
| swipeDuration | 動畫時長，單位為 `ms` | _number \| string_ | `300` |
| showIndex | 是否顯示頁碼 | _boolean_ | `true` |
| showIndicators | 是否顯示輪播指示器 | _boolean_ | `false` |
| loop | 是否開啟循環播放 | _boolean_ | `true` |
| closeOnPopstate | 是否在頁面回退時自動關閉 | _boolean_ | `true` |
| className | 自定義類名 | _string \| Array \| object_ | - |
| closeable | 是否顯示關閉圖標 | _boolean_ | `false` |
| closeIcon | 關閉圖標名稱或圖片鏈接 | _string_ | `clear` |
| closeIconPosition | 關閉圖標位置，可選值為 `top-left`<br/>`bottom-left` `bottom-right` | _string_ | `top-right` |
| overlayStyle | 自定義遮罩層樣式 | _object_ | - |
| onClose | 關閉時的回調函數 | _Function_ | - |
| onClosed | 完全關閉時的回調 | _Function_ | - |
| onChange | 切換圖片時的回調函數，回調參數為當前索引 | _Function_ | - |
| beforeClose | 關閉前的回調函數，返回 `false` 可阻止關閉，支持返回 Promise | _(active) => boolean \| Promise_ | - |
| teleport | 指定掛載的節點 | _HTMLElement \| () => HTMLElement_ | `body` |

### onClose 回調參數

| 參數名 | 說明             | 類型     |
| ------ | ---------------- | -------- |
| url    | 當前圖片 URL     | _string_ |
| index  | 當前圖片的索引值 | _number_ |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                        | 默認值                       | 描述 |
| ------------------------------------------- | ---------------------------- | ---- |
| --rc-image-preview-index-text-color         | _var(--rc-white)_            | -    |
| --rc-image-preview-index-font-size          | _var(--rc-font-size-md)_     | -    |
| --rc-image-preview-index-line-height        | _var(--rc-line-height-md)_   | -    |
| --rc-image-preview-index-text-shadow        | _0 1px 1px var(--rc-gray-8)_ | -    |
| --rc-image-preview-overlay-background-color | _rgba(0, 0, 0, 0.9)_         | -    |
| --rc-image-preview-close-icon-size          | _22px_                       | -    |
| --rc-image-preview-close-icon-color         | _var(--rc-gray-5)_           | -    |
| --rc-image-preview-close-icon-active-color  | _var(--rc-gray-6)_           | -    |
| --rc-image-preview-close-icon-margin        | _var(--rc-padding-md)_       | -    |
| --rc-image-preview-close-icon-z-index       | _1_                          | -    |

