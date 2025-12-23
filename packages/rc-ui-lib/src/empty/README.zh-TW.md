# Empty 空狀態

### 介紹

用於在空狀態時顯示佔位提示。

### 引入

```js
import { Empty } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

```jsx
<Empty description="描述文字" />
```

### 圖片類型

```jsx
<Empty image="error" description="描述文字" />
<Empty image="network" description="描述文字" />
<Empty image="search" description="描述文字" />
```

### 自訂圖片

需要自訂圖片時，可以在 `image` 屬性中傳入任意圖片 URL。

```jsx
<Empty
  className="custom-image"
  image="https://img.yzcdn.cn/vant/custom-empty-image.png"
  description="描述文字"
/>

<style>
  .custom-image .rc-empty__image {
    width: 90px;
    height: 90px;
  }
</style>
```

### 底部內容

透過 `children` 可以在 `Empty` 元件的下方插入內容。

```jsx
<Empty description="描述文字">
  <Button round type="primary" className="bottom-button">按鈕</Button>
</Empty>

<style>
  .bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
```

## API

### Props

| 參數 | 說明 | 型別 | 預設值 |
| --- | --- | --- | --- |
| image | 圖片類型，可選值為 `error` `network` `search`，支援傳入圖片 URL | _string\|ReactNode_ | `default` |
| description | 圖片下方的描述文字 | _ReactNode_ | - |
| className | 定義圖片或文字樣式 | _string_ | - |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自訂樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                               | 預設值                     | 描述 |
| ---------------------------------- | -------------------------- | ---- |
| --rc-empty-padding                 | _var(--rc-padding-xl) 0_   | -    |
| --rc-empty-image-size              | _160px_                    | -    |
| --rc-empty-description-margin-top  | _var(--rc-padding-md)_     | -    |
| --rc-empty-description-padding     | _0 60px_                   | -    |
| --rc-empty-description-color       | _var(--rc-gray-6)_         | -    |
| --rc-empty-description-font-size   | _var(--rc-font-size-md)_   | -    |
| --rc-empty-description-line-height | _var(--rc-line-height-md)_ | -    |
| --rc-empty-bottom-margin-top       | _24px_                     | -    |


