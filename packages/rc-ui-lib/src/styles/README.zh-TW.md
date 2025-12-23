# 內置樣式

### 介紹

默認包含了一些常用樣式，可以直接通過 className 的方式使用。

### 文字省略

當文本內容長度超過容器最大寬度時，自動省略多餘的文本。

```jsx
<!-- 最多顯示一行 -->
<div className="rc-ellipsis">這是一段最多顯示一行的文字，多餘的內容會被省略</div>

<!-- 最多顯示兩行 -->
<div className="rc-multi-ellipsis--l2">
  這是一段最多顯示兩行的文字，多餘的內容會被省略
</div>

<!-- 最多顯示三行 -->
<div className="rc-multi-ellipsis--l3">
  這是一段最多顯示三行的文字，多餘的內容會被省略
</div>
```

### 1px 邊框

為元素添加 Retina 屏幕下的 1px 邊框（即 hairline），基於偽類 transform 實現。

```jsx
<!-- 上邊框 -->
<div className="rc-hairline--top"></div>

<!-- 下邊框 -->
<div className="rc-hairline--bottom"></div>

<!-- 左邊框 -->
<div className="rc-hairline--left"></div>

<!-- 右邊框 -->
<div className="rc-hairline--right"></div>

<!-- 上下邊框 -->
<div className="rc-hairline--top-bottom"></div>

<!-- 全邊框 -->
<div className="rc-hairline--surround"></div>
```

### 動畫

這裡通過 `react-transition-group` 第三方庫使用內置的動畫

```bash
# 安裝
npm install react-transition-group
```

```js
import { CSSTransition } from 'react-transition-group';
```

```jsx
<!-- 淡入 -->
<CSSTransition in={visible} timeout={500} classNames="rc-fade" unmountOnExit>
  <div>Fade</div>
</CSSTransition>

<!-- 上滑進入 -->
<CSSTransition in={visible} timeout={500} classNames="rc-slide-up" unmountOnExit>
  <div>Slide Up</div>
</CSSTransition>

<!-- 下滑進入 -->
<CSSTransition in={visible} timeout={500} classNames="rc-slide-down" unmountOnExit>
  <div>Slide Down</div>
</CSSTransition>

<!-- 左滑進入 -->
<CSSTransition in={visible} timeout={500} classNames="rc-slide-left" unmountOnExit>
  <div>Slide Left</div>
</CSSTransition>

<!-- 右滑進入 -->
<CSSTransition in={visible} timeout={500} classNames="rc-slide-right" unmountOnExit>
  <div>Slide Right</div>
</CSSTransition>
```

