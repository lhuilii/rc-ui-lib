# Grid 宮格

### 介紹

宮格可以在水平方向上把頁面分隔成等寬度的區塊，用於展示內容或進行頁面導航。

### 引入

通過以下方式來全局註冊元件，更多註冊方式請參考[元件註冊](#/zh-CN/advanced-usage#zu-jian-zhu-ce)。

```js
import { Grid } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `icon` 屬性設置格子內的圖標，`text` 屬性設置文字內容。

```jsx
<Grid>
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
</Grid>
```

### 自定義列數

默認一行展示四個格子，可以通過 `columnNum` 自定義列數。

```jsx
<Grid columnNum={3}>
  {Array.from({ length: 6 }, (_, i) => (
    <Grid.Item key={i} icon="photo-o" text="文字" />
  ))}
</Grid>
```

### 自定義內容

通過插槽可以自定義格子展示的內容。

```jsx
<Grid border={false} columnNum={3}>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
  </Grid.Item>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </Grid.Item>
  <Grid.Item>
    <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
  </Grid.Item>
</Grid>
```

### 正方形格子

設置 `square` 屬性後，格子的高度會和寬度保持一致。

```jsx
<Grid square>
  {Array.from({ length: 8 }, (_, i) => (
    <Grid.Item key={i} icon="photo-o" text="文字" />
  ))}
</Grid>
```

### 格子間距

通過 `gutter` 屬性設置格子之間的距離。

```jsx
<Grid gutter={10}>
  {Array.from({ length: 8 }, (_, i) => (
    <Grid.Item key={i} icon="photo-o" text="文字" />
  ))}
</Grid>
```

### 內容橫排

將 `direction` 屬性設置為 `horizontal`，可以讓宮格的內容呈橫向排列。

```jsx
<Grid direction="horizontal" columnNum={3}>
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
  <Grid.Item icon="photo-o" text="文字" />
</Grid>
```

### 徽標提示

設置 `dot` 屬性後，會在圖標右上角展示一個小紅點。設置 `badge` 屬性後，會在圖標右上角展示相應的徽標。

```jsx
<Grid columnNum={2}>
  <Grid.Item icon="home-o" text="文字" badge={{ dot: true }} />
  <Grid.Item icon="search" text="文字" badge={{ content: '99+' }} />
</Grid>
```

## API

### Grid Props

| 參數      | 說明                                      | 類型                  | 默認值  |
| --------- | ----------------------------------------- | --------------------- | ------- |
| columnNum | 列數                                      | _number_              | `4`     |
| iconSize  | 圖標大小，默認單位為`px`                  | _number \| string_    | `28px`  |
| gutter    | 格子之間的間距，默認單位為`px`            | _number_              | `0`     |
| border    | 是否顯示邊框                              | _boolean_             | `true`  |
| center    | 是否將格子內容居中顯示                    | _boolean_             | `true`  |
| square    | 是否將格子固定為正方形                    | _boolean_             | `false` |
| direction | 格子內容排列的方向，可選值為 `horizontal` | `vertical`            |
| reverse   | 是否調換圖標和文本的位置                  | _boolean_             | `false` |
| className | 類名                                      | _string_              | -       |
| style     | style                                     | _React.CSSProperties_ | -       |

### GridItem Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| text | 文字 | _string_ | - |
| icon | 圖標 | _string \| React.ReactNode_ | - |
| iconPrefix | 圖標類名前綴，等同於 Icon 元件的 [classPrefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| iconColor | 圖標顏色，等同於 Icon 元件的 [color 屬性](#/zh-CN/icon#props) | _string_ | - |
| badge | 圖標右上角徽標的內容 | _BadgeProps_ | - |
| className | 類名 | _string_ | - |
| style | style | _React.CSSProperties_ | - |
| contentClassName | 內容類名 | _string_ | - |
| contentStyle | 內容 style | _React.CSSProperties_ | - |

### GridItem Events

| 事件名  | 說明           | 回調參數            |
| ------- | -------------- | ------------------- |
| onClick | 點擊格子時觸發 | _event: MouseEvent_ |

### 類型定義

元件導出以下類型定義：

```js
import type { GridDirection } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                    | 默認值                                      | 描述 |
| --------------------------------------- | ------------------------------------------- | ---- |
| --rc-grid-item-content-padding          | _var(--rc-padding-md) var(--rc-padding-xs)_ | -    |
| --rc-grid-item-content-background-color | _var(--rc-white)_                           | -    |
| --rc-grid-item-content-active-color     | _var(--rc-active-color)_                    | -    |
| --rc-grid-item-icon-size                | _28px_                                      | -    |
| --rc-grid-item-text-color               | _var(--rc-gray-7)_                          | -    |
| --rc-grid-item-text-font-size           | _var(--rc-font-size-sm)_                    | -    |

