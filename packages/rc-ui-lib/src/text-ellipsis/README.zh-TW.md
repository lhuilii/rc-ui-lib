# TextEllipsis 文本省略

### 介紹

對長文本進行省略，支持展開/收起。請升級到 >= 2.0.0 版本來使用該元件。

### 引入

通過以下方式來全局註冊元件，更多註冊方式請參考[元件註冊](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { TextEllipsis } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

默認展示 `1` 行，超過 `1` 行顯示省略號。

```tsx
import { useState } from 'react';
import { TextEllipsis } from 'rc-ui-lib';

export default () => {
  const text =
    'Rc-ui-lib 是一個輕量、可定制的移動端React元件庫，於 2021 年開源。50+ 個高質量元件，覆蓋移動端各類場景，單元測試覆蓋率超過 95%，提供穩定性保障, 支持按需引入、主題定制、Typescript。';
  return (
    <>
      <TextEllipsis content={text} />
    </>
  );
};
```

### 展開/收起

超過行數支持展開/收起。

```tsx
import { useState } from 'react';
import { TextEllipsis } from 'rc-ui-lib';

export default () => {
  const text =
    'Rc-ui-lib 是一個輕量、可定制的移動端React元件庫，於 2021 年開源。50+ 個高質量元件，覆蓋移動端各類場景，單元測試覆蓋率超過 95%，提供穩定性保障, 支持按需引入、主題定制、Typescript。';
  return (
    <>
      <TextEllipsis content={text} expandText="展開" collapseText="收起" />
    </>
  );
};
```

### 自定義展示行數

通過設置 `rows` 限制展示行數。

```tsx
import { useState } from 'react';
import { TextEllipsis } from 'rc-ui-lib';

export default () => {
  const text =
    'Rc-ui-lib 是一個輕量、可定制的移動端React元件庫，於 2021 年開源。50+ 個高質量元件，覆蓋移動端各類場景，單元測試覆蓋率超過 95%，提供穩定性保障, 支持按需引入、主題定制、Typescript。';
  return (
    <>
      <TextEllipsis content={text} rows="3" expandText="展開" collapseText="收起" />
    </>
  );
};
```

## API

### Props

| 參數          | 說明           | 類型               | 默認值 |
| ------------- | -------------- | ------------------ | ------ |
| rows          | 展示的行數     | _number \| string_ | `1`    |
| content       | 需要展示的文本 | _string_           | -      |
| expand-text   | 展開操作的文案 | _string_           | -      |
| collapse-text | 收起操作的文案 | _string_           | -      |

### Events

| 事件         | 說明                | 回調參數            |
| ------------ | ------------------- | ------------------- |
| click-action | 點擊展開/收起時觸發 | _event: MouseEvent_ |

### 類型定義

元件導出以下類型定義：

```ts
import type { TextEllipsisProps } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                            | 默認值           | 描述           |
| ------------------------------- | ---------------- | -------------- |
| --rc-text-ellipsis-action-color | _var(--rc-blue)_ | 操作按鈕的顏色 |
| --rc-text-ellipsis-line-height  | _1.6_            | 文本的行高     |

