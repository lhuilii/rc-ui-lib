# NavBar 導航欄

### 介紹

為頁面提供導航功能，常用於頁面頂部。

### 引入

```js
import { NavBar } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `title` 屬性設置導航欄標題。

```jsx
<NavBar title="標題" />
```

### 返回上級

在導航欄實現返回上級功能。

```jsx
import { useNavigate } from 'react-router-dom';
export default (): React.ReactNode => {
  const navigate = useNavigate();
  const onClickLeft = () => navigate(-1);
  return <NavBar title="標題" leftArea="返回" leftArrow onClickLeft={onClickLeft} />;
};
```

### 右側按鈕

在導航欄右側添加可點擊的按鈕。

```jsx
import { Toast } from 'rc-ui-lib';
import { useNavigate } from 'react-router-dom';
export default (): React.ReactNode => {
  const navigate = useNavigate();
  const onClickLeft = () => navigate(-1);
  const onClickRight = () => Toast('按鈕');
  return (
    <NavBar
      title="標題"
      leftArea="返回"
      rightArea="按鈕"
      left-arrow
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
    />
  );
};
```

### 自定義內容

自定義導航欄兩側的內容。

```jsx
import { Icon } from 'rc-ui-lib';
export default (): React.ReactNode => {
  return (
    <NavBar title="標題" leftArea="返回" rightArea={<Icon name="search" size="18" />} left-arrow />
  );
};
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標題 | _string_\| _ReactNode_ | `''` |
| leftArea | 左側區域 | _string_\| _ReactNode_ | `''` |
| rightArea | 右側區域 | _string_\| _ReactNode_ | `''` |
| leftArrow | 是否顯示左側箭頭 | _boolean_ | `false` |
| border | 是否顯示下邊框 | _boolean_ | `true` |
| fixed | 是否固定在頂部 | _boolean_ | `false` |
| placeholder | 固定在頂部時，是否在標籤位置生成一個等高的佔位元素 | _boolean_ | `false` |
| zIndex | 導航欄 z-index | _number \| string_ | `1` |
| safeAreaInsetTop | 是否開啟[頂部安全區適配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `false` |

### Events

| 事件名       | 說明               | 回調參數            |
| ------------ | ------------------ | ------------------- |
| onClickLeft  | 點擊左側按鈕時觸發 | _event: MouseEvent_ |
| onClickRight | 點擊右側按鈕時觸發 | _event: MouseEvent_ |

### 類型定義

元件導出以下類型定義：

```ts
import type { NavBarProps } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                          | 默認值                             | 描述 |
| ----------------------------- | ---------------------------------- | ---- |
| --rc-nav-bar-height           | _46px_                             | -    |
| --rc-nav-bar-background-color | _var(--rc-background-color-light)_ | -    |
| --rc-nav-bar-arrow-size       | _16px_                             | -    |
| --rc-nav-bar-icon-color       | _var(--rc-primary-color)_          | -    |
| --rc-nav-bar-text-color       | _var(--rc-primary-color)_          | -    |
| --rc-nav-bar-title-font-size  | _var(--rc-font-size-lg)_           | -    |
| --rc-nav-bar-title-text-color | _var(--rc-text-color)_             | -    |
| --rc-nav-bar-z-index          | _1_                                | -    |

