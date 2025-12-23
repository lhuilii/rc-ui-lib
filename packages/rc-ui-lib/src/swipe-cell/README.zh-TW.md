# SwipeCell 滑動單元格

### 介紹

可以左右滑動來展示操作按鈕的單元格元件。

### 引入

```js
import { SwipeCell } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

`SwipeCell` 元件提供了 `left` 和 `right` 兩個 prop，用於定義兩側滑動區域的內容。

```js
import { SwipeCell, Button, Cell } from 'rc-ui-lib';

export default () => {
  return (
    <SwipeCell
      left={<Button square type="primary" text="選擇" />}
      right={
        <>
          <Button square type="danger" text="刪除" />
          <Button square type="primary" text="收藏" />
        </>
      }
    >
      <Cell title="單元格" value="內容" />
    </SwipeCell>
  );
};
```

### 基礎用法

通過傳入 `disabled` 屬性， 可禁止滑動。

```js
import { SwipeCell, Button, Cell } from 'rc-ui-lib';

export default () => {
  return (
    <SwipeCell
      disabled
      left={<Button square type="primary" text="選擇" />}
      right={
        <>
          <Button square type="danger" text="刪除" />
          <Button square type="primary" text="收藏" />
        </>
      }
    >
      <Cell title="單元格" value="內容" />
    </SwipeCell>
  );
};
```

### 異步關閉

通過傳入 beforeClose 回調函數，可以自定義兩側滑動內容關閉時的行為。

```js
import { SwipeCell, Dialog, Button, Cell } from 'rc-ui-lib';

export default () => {
  const beforeClose = ({ position, instance }) => {
    switch (position) {
      case 'right':
        Dialog.confirm({
          title: 'confirm',
        }).then(() => {
          instance.close();
        });
        break;
      case 'left':
      case 'cell':
      case 'outside':
        instance.close();
        break;
      default:
        break;
    }
  };

  return (
    <SwipeCell
      beforeClose={beforeClose}
      left={<Button square type="primary" text="選擇" />}
      right={
        <>
          <Button square type="danger" text="刪除" />
          <Button square type="primary" text="收藏" />
        </>
      }
    >
      <Cell title="單元格" value="內容" />
    </SwipeCell>
  );
};
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| name | 標識符，可以在事件參數中獲取到 | _number \| string_ | `''` |
| leftWidth | 指定左側滑動區域寬度，單位為 `px` | _number \| string_ | `auto` |
| rightWidth | 指定右側滑動區域寬度，單位為 `px` | _number \| string_ | `auto` |
| beforeClose | 關閉前的回調函數，返回 `false` 可阻止關閉，支持返回 Promise | _(args) => boolean \| Promise\<boolean\>_ | - |
| disabled | 是否禁用滑動 | _boolean_ | `false` |
| left | 自定義左操作欄內容 | ReactNode | - |
| right | 自定義右操作欄內容 | ReactNode | - |

### Events

| 事件名 | 說明 | 回調參數 |
| --- | --- | --- |
| onClick | 點擊時觸發 | _position: 'left' \| 'right' \| 'cell' \| 'outside'_ |
| onOpen | 打開時觸發 | _{ name: string \| number, position: 'left' \| 'right' }_ |
| onClose | 關閉時觸發 | _{ name: string \| number, position: 'left' \| 'right' \| 'cell' \| 'outside' }_ |

### beforeClose 參數

beforeClose 的第一個參數為對象，對象中包含以下屬性：

| 參數名   | 說明             | 類型                                       |
| -------- | ---------------- | ------------------------------------------ |
| name     | 標識符           | _string \| number_                         |
| position | 關閉時的點擊位置 | _'left' \| 'right' \| 'cell' \| 'outside'_ |

### 方法

通過 ref 可以獲取到 SwipeCell 實例並調用實例方法，詳見[元件實例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 說明             | 參數                      | 返回值 |
| ------ | ---------------- | ------------------------- | ------ |
| open   | 打開單元格側邊欄 | position: `left \| right` | -      |
| close  | 收起單元格側邊欄 | -                         | -      |

### 類型定義

元件導出以下類型定義：

```ts
import type {
  SwipeCellSide,
  SwipeCellProps,
  SwipeCellPosition,
  SwipeCellInstance,
} from 'rc-ui-lib';
```

`SwipeCellInstance` 是元件實例的類型，用法如下：

```ts
import { Ref } from 'React';
import type { SwipeCellInstance } from 'rc-ui-lib';

const swipeCellRef = Ref<SwipeCellInstance>();

swipeCellRef.current?.close();
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                  | 默認值                                        | 描述 |
| ------------------------------------- | --------------------------------------------- | ---- |
| --rc-switch-cell-padding-top          | _var(--rc-cell-vertical-padding) - 1px_       | -    |
| --rc-switch-cell-padding-bottom       | _var(--rc-cell-vertical-padding) - 1px_       | -    |
| --rc-switch-cell-large-padding-top    | _var(--rc-cell-large-vertical-padding) - 1px_ | -    |
| --rc-switch-cell-large-padding-bottom | _var(--rc-cell-large-vertical-padding) - 1px_ | -    |

