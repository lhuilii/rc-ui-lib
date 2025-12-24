# Built-in Styles

### Introduction

Includes some commonly used styles by default, which can be used directly through className.

### Text Ellipsis

When the text content length exceeds the maximum width of the container, automatically omit the excess text.

```jsx
<!-- Display at most one line -->
<div className="rc-ellipsis">This is a text that displays at most one line, excess content will be omitted</div>

<!-- Display at most two lines -->
<div className="rc-multi-ellipsis--l2">
  This is a text that displays at most two lines, excess content will be omitted
</div>

<!-- Display at most three lines -->
<div className="rc-multi-ellipsis--l3">
  This is a text that displays at most three lines, excess content will be omitted
</div>
```

### 1px Border

Add a 1px border (i.e., hairline) for elements on Retina screens, implemented based on pseudo-class transform.

```jsx
<!-- Top border -->
<div className="rc-hairline--top"></div>

<!-- Bottom border -->
<div className="rc-hairline--bottom"></div>

<!-- Left border -->
<div className="rc-hairline--left"></div>

<!-- Right border -->
<div className="rc-hairline--right"></div>

<!-- Top and bottom borders -->
<div className="rc-hairline--top-bottom"></div>

<!-- All borders -->
<div className="rc-hairline--surround"></div>
```

### Animation

Use built-in animations through the `react-transition-group` third-party library

```bash
# Install
npm install react-transition-group
```

```js
import { CSSTransition } from 'react-transition-group';
```

```jsx
<!-- Fade in -->
<CSSTransition in={visible} timeout={500} classNames="rc-fade" unmountOnExit>
  <div>Fade</div>
</CSSTransition>

<!-- Slide up -->
<CSSTransition in={visible} timeout={500} classNames="rc-slide-up" unmountOnExit>
  <div>Slide Up</div>
</CSSTransition>

<!-- Slide down -->
<CSSTransition in={visible} timeout={500} classNames="rc-slide-down" unmountOnExit>
  <div>Slide Down</div>
</CSSTransition>

<!-- Slide left -->
<CSSTransition in={visible} timeout={500} classNames="rc-slide-left" unmountOnExit>
  <div>Slide Left</div>
</CSSTransition>

<!-- Slide right -->
<CSSTransition in={visible} timeout={500} classNames="rc-slide-right" unmountOnExit>
  <div>Slide Right</div>
</CSSTransition>
```

