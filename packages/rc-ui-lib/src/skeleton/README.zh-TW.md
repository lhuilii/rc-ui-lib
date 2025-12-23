# Skeleton 骨架屏

### 介紹

用於在內容載入過程中展示一組佔位圖形。

### 引入

```js
import { Skeleton } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `title` 屬性顯示標題佔位圖，通過 `row` 屬性配置佔位段落行數。

```jsx
<Skeleton title />
```

### 顯示頭像

通過 `avatar` 屬性顯示頭像佔位圖。

```jsx
<Skeleton avatar />
```

### 自定義高度

通過 `rowHeight` 屬性顯示頭像佔位圖。

```jsx
<Skeleton rowHeight={10} />
```

### 展示子元件

將 `loading` 屬性設置成 `false` 表示內容載入完成，此時會隱藏佔位圖，並顯示 `Skeleton` 的子元件。

```jsx
import { useState } from 'react';
import { Flex, Typography, Switch, Skeleton } from 'rc-ui-lib';

export default () => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <Switch checked={loading} onChange={setLoading} size={24} />
      <Skeleton avatar loading={loading}>
        <Flex className="demo-preview">
          <img alt="" src="https://img.yzcdn.cn/vant/logo.png" />
          <div className="demo-content">
            <Typography.Title>關於 rc-ui-lib</Typography.Title>
            <Typography.Text type="secondary">
              rc-ui-lib 是一套輕量、可靠的移動端 React
              元件庫，提供了豐富的基礎元件和業務元件，幫助開發者快速搭建移動應用。
            </Typography.Text>
          </div>
        </Flex>
      </Skeleton>
    </>
  );
};
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| row | 段落佔位圖行數 | _number \| string_ | `3` |
| rowWidth | 段落佔位圖寬度，可傳數組來設置每一行的寬度 | _number \| string \|<br/>(number \| string)[]_ | `100%` |
| rowHeight | 段落佔位圖高度，可傳數組來設置每一行的高度 | _number \| string \|<br/>(number \| string)[]_ | - |
| title | 是否顯示標題佔位圖 | _boolean_ | `false` |
| avatar | 是否顯示頭像佔位圖 | _boolean_ | `false` |
| loading | 是否顯示骨架屏，傳 `false` 時會展示子元件內容 | _boolean_ | `true` |
| animate | 是否開啟動畫 | _boolean_ | `true` |
| round | 是否將標題和段落顯示為圓角風格 | _boolean_ | `false` |
| titleWidth | 標題佔位圖寬度 | _number \| string_ | `40%` |
| avatarSize | 頭像佔位圖大小 | _number \| string_ | `32px` |
| avatarShape | 頭像佔位圖形狀，可選值為 `square` | _string_ | `round` |
| className | 類名 | _string_ | - |
| style | style | _React.CSSProperties_ | - |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                  | 默認值                   | 描述 |
| ------------------------------------- | ------------------------ | ---- |
| --rc-skeleton-row-height              | _16px_                   | -    |
| --rc-skeleton-row-background-color    | _var(--rc-active-color)_ | -    |
| --rc-skeleton-row-margin-top          | _var(--rc-padding-sm)_   | -    |
| --rc-skeleton-title-width             | _40%_                    | -    |
| --rc-skeleton-avatar-size             | _32px_                   | -    |
| --rc-skeleton-avatar-background-color | _var(--rc-active-color)_ | -    |
| --rc-skeleton-animation-duration      | _1.2s_                   | -    |

