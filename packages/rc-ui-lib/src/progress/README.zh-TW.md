# Progress 進度條

### 介紹

用於展示操作的當前進度。

### 引入

```js
import { Progress } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

進度條默認為藍色，使用 `percentage` 屬性來設置當前進度。

```jsx
<Progress percentage={50} />
```

### 線條粗細

通過 `strokeWidth` 可以設置進度條的粗細。

```jsx
<Progress percentage={50} stroke-width="8" />
```

### 置灰

設置 `inactive` 屬性後進度條將置灰。

```jsx
<Progress inactive percentage={50} />
```

### 樣式定制

可以使用 `pivotText` 屬性自定義文字，`color` 屬性自定義進度條顏色。

```jsx
<Progress pivotText="橙色" color="#f2826a" percentage={25} />
<Progress pivotText="紅色" color="#ee0a24" percentage={50} />
<Progress
  percentage="75"
  pivotText="紫色"
  pivotColor="#7232dd"
  color="linear-gradient(to right, #be99ff, #7232dd)"
/>
```

## API

### Props

| 參數        | 說明                       | 類型               | 默認值       |
| ----------- | -------------------------- | ------------------ | ------------ |
| percentage  | 進度百分比                 | _number \| string_ | `0`          |
| strokeWidth | 進度條粗細，默認單位為`px` | _number \| string_ | `4px`        |
| color       | 進度條顏色                 | _string_           | `#1989fa`    |
| trackColor  | 軌道顏色                   | _string_           | `#e5e5e5`    |
| pivotText   | 進度文字內容               | _string_           | 百分比       |
| pivotColor  | 進度文字背景色             | _string_           | 同進度條顏色 |
| textColor   | 進度文字顏色               | _string_           | `white`      |
| inactive    | 是否置灰                   | _boolean_          | `false`      |
| showPivot   | 是否顯示進度文字           | _boolean_          | `true`       |

### 類型定義

元件導出以下類型定義：

```ts
import type { ProgressProps, ProgressInstance } from 'rc-ui-lib';
```

`ProgressInstance` 是元件實例的類型，用法如下：

```tsx
import { useRef } from 'react';
import type { ProgressInstance } from 'rc-ui-lib';

const progressRef = useRef<ProgressInstance>();

progressRef.value?.resize();
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                 | 默認值                    | 描述 |
| ------------------------------------ | ------------------------- | ---- |
| --rc-progress-height                 | _4px_                     | -    |
| --rc-progress-color                  | _var(--rc-primary-color)_ | -    |
| --rc-progress-inactive-color         | _var(--rc-gray-5)_        | -    |
| --rc-progress-background-color       | _var(--rc-gray-3)_        | -    |
| --rc-progress-pivot-padding          | _0 5px_                   | -    |
| --rc-progress-pivot-text-color       | _var(--rc-white)_         | -    |
| --rc-progress-pivot-font-size        | _var(--rc-font-size-xs)_  | -    |
| --rc-progress-pivot-line-height      | _1.6_                     | -    |
| --rc-progress-pivot-background-color | _var(--rc-primary-color)_ | -    |

