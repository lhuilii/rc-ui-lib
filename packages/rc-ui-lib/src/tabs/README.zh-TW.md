# Tabs 標籤頁

### 引入

```js
import { Tabs } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `active` 綁定當前激活標籤對應的索引值，默認情況下啟用第一個標籤。

```jsx
<Tabs active="active">
  <Tabs.TabPane title="標籤 1">內容 1</Tabs.TabPane>
  <Tabs.TabPane title="標籤 2">內容 2</Tabs.TabPane>
  <Tabs.TabPane title="標籤 3">內容 3</Tabs.TabPane>
  <Tabs.TabPane title="標籤 4">內容 4</Tabs.TabPane>
</Tabs>
```

### 通過名稱匹配

在標籤指定 `name` 屬性的情況下，`active` 的值為當前標籤的 `name`（此時無法通過索引值來匹配標籤）。

```jsx
<Tabs active="b">
  <Tabs.TabPane title="標籤 1" name="a">
    內容 1
  </Tabs.TabPane>
  <Tabs.TabPane title="標籤 2" name="b">
    內容 2
  </Tabs.TabPane>
  <Tabs.TabPane title="標籤 3" name="c">
    內容 3
  </Tabs.TabPane>
</Tabs>
```

### 標籤欄滾動

標籤數量超過 5 個時，標籤欄可以在水平方向上滾動，切換時會自動將當前標籤居中。

```jsx
<Tabs>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Tabs.TabPane key={item} title={`標籤${item}`}>
      內容 {item}
    </Tabs.TabPane>
  ))}
</Tabs>
```

### 禁用標籤

設置 `disabled` 屬性即可禁用標籤，如果需要監聽禁用標籤的點擊事件，可以在 `Tabs` 上監聽`disabled` 事件。

```jsx
<Tabs>
  <Tabs.TabPane title="標籤1">內容1</Tabs.TabPane>
  <Tabs.TabPane title="標籤2" disabled>
    內容2
  </Tabs.TabPane>
  <Tabs.TabPane title="標籤3">內容3</Tabs.TabPane>
</Tabs>
```

### 樣式風格

`Tab` 支持兩種樣式風格：`line` 和`card`，默認為 `line` 樣式，可以通過 `type` 屬性切換樣式風格。

```jsx
<Tabs type="card">
  <Tabs.TabPane title="標籤 1">內容 1</Tabs.TabPane>
  <Tabs.TabPane title="標籤 2">內容 2</Tabs.TabPane>
  <Tabs.TabPane title="標籤 3">內容 3</Tabs.TabPane>
</Tabs>
```

### 點擊事件

可以在 `Tabs` 上綁定 `onClick` 事件，事件傳參為標籤對應的標識符和標題。

```jsx
<Tabs onClick={(name, title) => Toast(title)}>
  <Tabs.TabPane title="標籤1">內容1</Tabs.TabPane>
  <Tabs.TabPane title="標籤2">內容2</Tabs.TabPane>
</Tabs>
```

### 粘性佈局

通過 `sticky` 屬性可以開啟粘性佈局，粘性佈局下，標籤頁滾動到頂部時會自動吸頂。

```jsx
<Tabs active={2} sticky>
  {[1, 2, 3, 4].map((item) => (
    <Tabs.TabPane key={item} title={`標籤${item}`}>
      <div style={{ height: '50vh' }}>內容 {item}</div>
    </Tabs.TabPane>
  ))}
</Tabs>
```

### 滾動導航

通過 `scrollspy` 和 `sticky` 屬性可以開啟滾動導航模式，該模式下，內容將會平鋪展示。

```jsx
<Tabs sticky scrollspy>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
    <Tabs.TabPane key={item} title={`標籤${item}`}>
      內容 {item}
    </Tabs.TabPane>
  ))}
</Tabs>
```

## API

### Tabs Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| active | 綁定當前選中標籤的標識符 | _number \| string_ | `0` |
| type | 樣式風格類型，可選值為 `card` | _string_ | `line` |
| color | 標籤主題色 | _string_ | `#ee0a24` |
| background | 標籤欄背景色 | _string_ | `white` |
| duration | 動畫時間，單位秒 | _number \| string_ | `0.3` |
| lineWidth | 底部條寬度，默認單位 `px` | _number \| string_ | `40px` |
| lineHeight | 底部條高度，默認單位 `px` | _number \| string_ | `3px` |
| animated | 是否開啟切換標籤內容時的轉場動畫 | _boolean_ | `false` |
| border | 是否顯示標籤欄外邊框，僅在 `type="line"` 時有效 | _boolean_ | `false` |
| ellipsis | 是否省略過長的標題文字 | _boolean_ | `true` |
| sticky | 是否使用粘性定位佈局 | _boolean_ | `false` |
| swipeable | 是否開啟手勢滑動切換 | _boolean_ | `false` |
| lazyRender | 是否開啟延遲渲染（首次切換到標籤時才觸發內容渲染） | _boolean_ | `true` |
| scrollspy | 是否開啟滾動導航 | _boolean\|ScrollspyConfig_ | `false` |
| offsetTop | 粘性定位佈局下與頂部的最小距離，支持 `px` `vw` `vh` `rem` 單位，默認 `px` | _number \| string_ | `0` |
| swipeThreshold | 滾動閾值，標籤數量超過閾值且總寬度超過標籤欄寬度時開始橫向滾動 | _number \| string_ | `5` |
| titleActiveColor | 標題選中態顏色 | _string_ | - |
| titleInactiveColor | 標題默認態顏色 | _string_ | - |
| beforeChange | 切換標籤前的回調函數，返回 `false` 可阻止切換，支持返回 Promise | _(name) => boolean \| Promise_ | - |

### ScrollspyConfig

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| autoFocusLast | 滾動導航模式下，容器滾動觸底時是否將最後一個 tab 轉為 Active 狀態 | _boolean_ | - |
| reachBottomThreshold | 觸底偏移量 | _number_ | - |

### TabPane Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| title | 標題 | _string_ | - |
| renderTitle | 自定義標題 | _ReactNode \|(active: boolean) => ReactNode_ | - |
| disabled | 是否禁用標籤 | _boolean_ | `false` |
| dot | 是否在標題右上角顯示小紅點 | _boolean_ | `false` |
| badge | 圖標右上角徽標的內容 | _number \| string_ | - |
| name | 標籤名稱，作為匹配的標識符 | _number \| string_ | 標籤的索引值 |
| titleStyle | 自定義標題樣式 | _CSSProperties_ | - |
| titleSlass | 自定義標題類名 | _string_ | - |
| showZeroBadge | 當 badge 為數字 0 時，是否展示徽標 | _boolean_ | `true` |

### Tabs Events

| 事件名 | 說明 | 回調參數 |
| --- | --- | --- |
| onClickTab | 點擊標籤時觸發 | _{ name: string \| number, title: string, event: MouseEvent, disabled: boolean }_ |
| onChange | 當前激活的標籤改變時觸發 | _name: string \| number, title: string_ |
| onScroll | 滾動時觸發，僅在 sticky 模式下生效 | _{ scrollTop: number, isFixed: boolean }_ |

> 提示：click 和 disabled 事件已廢棄，請使用 click-tab 事件代替。

### Tabs 方法

通過 ref 可以獲取到 Tabs 實例並調用實例方法，詳見[元件實例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 說明 | 參數 | 返回值 |
| --- | --- | --- | --- |
| resize | 外層元素大小或元件顯示狀態變化時，可以調用此方法來觸發重繪 | - | - |
| scrollTo | 滾動到指定的標籤頁，在滾動導航模式下可用 | _name: string \| number_ | - |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                           | 默認值                     | 描述 |
| ------------------------------ | -------------------------- | ---- |
| --rc-tab-text-color            | _var(--rc-gray-7)_         | -    |
| --rc-tab-active-text-color     | _var(--rc-text-color)_     | -    |
| --rc-tab-disabled-text-color   | _var(--rc-gray-5)_         | -    |
| --rc-tab-font-size             | _var(--rc-font-size-md)_   | -    |
| --rc-tab-line-height           | _var(--rc-line-height-md)_ | -    |
| --rc-tabs-default-color        | _var(--rc-danger-color)_   | -    |
| --rc-tabs-line-height          | _44px_                     | -    |
| --rc-tabs-card-height          | _30px_                     | -    |
| --rc-tabs-nav-background-color | _var(--rc-white)_          | -    |
| --rc-tabs-bottom-bar-width     | _40px_                     | -    |
| --rc-tabs-bottom-bar-height    | _3px_                      | -    |
| --rc-tabs-bottom-bar-color     | _var(--rc-danger-color)_   | -    |

