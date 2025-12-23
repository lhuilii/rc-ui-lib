# Flex 佈局

### 介紹

`Flex` 元件是 CSS `flex` 佈局的一個封裝。

### 引入

```js
import { Flex } from 'rc-ui-lib';
```

### 基礎用法

`Flex` 元件提供了`24列柵格`。使用單一的一組 `Flex` 和 `Flex.Item` 柵格元件，就可以創建一個基本的柵格系統，所有列（`Flex.Item`）必須放在 `Flex` 內。

```jsx
<Flex>
  <Flex.Item span={12}>span: 12</Flex.Item>
  <Flex.Item span={12}>span: 12</Flex.Item>
</Flex>
<Flex>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>
```

### 區域間隔

通過`gutter`屬性可以設置列元素之間的間距，默認間距為 `0`; 如果需要垂直間距，可以寫成數組形式 `[水平間距, 垂直間距]`

```jsx
<Flex gutter={16}>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
  <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>
```

### 方向

通過`direction`屬性設置彈性佈局方向。默認是 `row`

```jsx
<Flex direction="row">
  <Flex.Item span={8}>span: 8-1</Flex.Item>
  <Flex.Item span={8}>span: 8-2</Flex.Item>
  <Flex.Item span={8}>span: 8-3</Flex.Item>
</Flex>
<Flex direction="row-reverse">
  <Flex.Item span={8}>span: 8-1</Flex.Item>
  <Flex.Item span={8}>span: 8-2</Flex.Item>
  <Flex.Item span={8}>span: 8-3</Flex.Item>
</Flex>
```

## API

### Flex

| 成員 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| direction | 項目定位方向，可選值為 `row` `row-reverse` `column` `column-reverse` | _string_ | `row` |
| wrap | 子元素的換行方式，可選值為 `nowrap` `wrap` `wrap-reverse` | _string_ | `nowrap` |
| gutter | 列元素之間的間距。可以使用數組形式同時設置 `[水平間距, 垂直間距]` | _number \| array_ | `0` |
| align | 垂直對齊方式，可選值為 `start` `center` `end` `baseline` `stretch` | _string_ | `start` |
| justify | 水平排列方式，可選值為 `start` `end` `center` `around` `between` | _string_ | `start` |

### Flex.Item

| 成員 | 說明                                        | 類型               | 默認值 |
| ---- | ------------------------------------------- | ------------------ | ------ |
| flex | flex 佈局屬性                               | _string \| number_ | `-`    |
| span | 柵格佔位格數，為 0 時相當於 `display: none` | _number_           | `-`    |

