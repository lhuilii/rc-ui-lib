# NoticeBar 通知欄

### 介紹

用於循環播放展示一組消息通知。

### 引入

```js
import { NoticeBar } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

通過 `text` 屬性設置通知欄的內容，通過 `leftRcon` 屬性設置通知欄左側的圖標。

```jsx
<NoticeBar leftIcon="speaker-s" text="在程式碼閱讀過程中人們說髒話的頻率是衡量程式碼質量的唯一標準。" />
```

### 滾動播放

通知欄的內容長度溢出時會自動開啟滾動播放，通過 `scrollable` 屬性可以控制該行為。

```jsx
<NoticeBar scrollable text="在程式碼閱讀過程中人們說髒話的頻率是衡量程式碼質量的唯一標準。" />
```

### 多行展示

文字較長時，可以通過設置 `wrapable` 屬性來開啟多行展示。

```jsx
<NoticeBar wrapable text="在程式碼閱讀過程中人們說髒話的頻率是衡量程式碼質量的唯一標準。" />
```

### 通知欄模式

通知欄支持 `closeable` 和 `link` 兩種模式。

```jsx
<!-- closeable 模式，在右側顯示關閉按鈕 -->
<NoticeBar mode="closeable">技術是開發它的人的共同靈魂。</NoticeBar>

<!-- link 模式，在右側顯示鏈接箭頭 -->
<NoticeBar mode="link">技術是開發它的人的共同靈魂。</NoticeBar>
```

### 自定義樣式

通過 `color` 屬性設置文本顏色，通過 `background` 屬性設置背景色。

```jsx
<NoticeBar color="#1989fa" background="#ecf9ff" leftIcon="info">
  技術是開發它的人的共同靈魂。
</NoticeBar>
```

### 垂直滾動

搭配 NoticeBar 和 Swipe 元件可以實現垂直滾動的效果。

```jsx
<NoticeBar leftIcon="info">
  <Swipe autoplay={3000} vertical className="notice-swipe">
    <Swipe.Item>內容 1</Swipe.Item>
    <Swipe.Item>內容 2</Swipe.Item>
    <Swipe.Item>內容 3</Swipe.Item>
  </Swipe>
</NoticeBar>
```

```css
.notice-swipe {
  height: 40px;
  line-height: 40px;
}
```

## API

### Props

| 參數       | 說明                                     | 類型                | 默認值    |
| ---------- | ---------------------------------------- | ------------------- | --------- |
| mode       | 通知欄模式，可選值為 `closeable` `link`  | _string_            | `''`      |
| text       | 通知文本內容                             | _ReactNode_         | `''`      |
| color      | 通知文本顏色                             | _string_            | `#f60`    |
| background | 滾動條背景                               | _string_            | `#fff7cc` |
| leftIcon   | 左側圖標                                 | _string\|ReactNode_ | -         |
| rightIcon  | 自定義右側圖標                           | _string\|ReactNode_ | -         |
| delay      | 動畫延遲時間 (s)                         | _number \| string_  | `1`       |
| speed      | 滾動速率 (px/s)                          | _number \| string_  | `60`      |
| scrollable | 是否開啟滾動播放，內容長度溢出時默認開啟 | _boolean_           | -         |
| wrapable   | 是否開啟文本換行，只在禁用滾動時生效     | _boolean_           | `false`   |

### Events

| 事件名   | 說明                         | 回調參數       |
| -------- | ---------------------------- | -------------- |
| onClick  | 點擊通知欄時觸發             | _event: Event_ |
| onClose  | 關閉通知欄時觸發             | _event: Event_ |
| onReplay | 每當滾動欄重新開始滾動時觸發 | -              |

### 方法

通過 ref 可以獲取到 Field 實例並調用實例方法

```ts
const noticeBarRef = useRef<NoticeBarInstance>(null);
```

```jsx
<NoticeBar ref={noticeBarRef} scrollable text="在程式碼閱讀過程中人們說髒話的頻率是衡量程式碼質量的唯一標準。" />

<input
  type="button"
  value="click"
  onClick={() => {
    noticeBarRef.current?.reset()
  }}
/>
```

| 方法名 | 說明     | 參數 | 返回值 |
| ------ | -------- | ---- | ------ |
| reset  | 重置滾動 | -    | -      |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                             | 默認值                                      | 描述 |
| -------------------------------- | ------------------------------------------- | ---- |
| --rc-notice-bar-height           | _40px_                                      | -    |
| --rc-notice-bar-padding          | _0 var(--rc-padding-md)_                    | -    |
| --rc-notice-bar-wrapable-padding | _var(--rc-padding-xs) var(--rc-padding-md)_ | -    |
| --rc-notice-bar-text-color       | _var(--rc-orange-dark)_                     | -    |
| --rc-notice-bar-font-size        | _var(--rc-font-size-md)_                    | -    |
| --rc-notice-bar-line-height      | _24px_                                      | -    |
| --rc-notice-bar-background-color | _var(--rc-orange-light)_                    | -    |
| --rc-notice-bar-icon-size        | _16px_                                      | -    |
| --rc-notice-bar-icon-min-width   | _24px_                                      | -    |

