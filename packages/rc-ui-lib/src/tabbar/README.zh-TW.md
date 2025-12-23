# Tabbar 標籤欄

### 介紹

底部導航欄，用於在不同頁面之間進行切換。

### 引入

```js
import { Tabbar } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

`value` 默認綁定選中標籤的索引值，通過修改 `value` 即可切換選中的標籤。

```jsx
import { useState } from 'react';
import { Tabbar } from 'rc-ui-lib';

export default () => {
  const [active, setActive] = useState(0);
  return (
    <Tabbar value={active} onChange={setActive}>
      <Tabbar.Item icon="home-o">標籤</Tabbar.Item>
      <Tabbar.Item icon="search">標籤</Tabbar.Item>
      <Tabbar.Item icon="friends-o">標籤</Tabbar.Item>
      <Tabbar.Item icon="setting-o">標籤</Tabbar.Item>
    </Tabbar>
  );
};
```

### 通過名稱匹配

在標籤指定 `name` 屬性的情況下，`value` 的值為當前標籤的 `name`。

```jsx
<Tabbar
  value={name}
  onChange={(v) => {
    setName(v as string);
  }}
>
  <Tabbar.Item name="home" icon="home-o">
    標籤
  </Tabbar.Item>
  <Tabbar.Item name="search" icon="search">
    標籤
  </Tabbar.Item>
  <Tabbar.Item name="firends" icon="friends-o">
    標籤
  </Tabbar.Item>
  <Tabbar.Item name="setting" icon="setting-o">
    標籤
  </Tabbar.Item>
</Tabbar>
```

### 徽標提示

通過 `badge` 屬性，可以設置圖標相應的徽標內容。

```jsx
<Tabbar>
  <Tabbar.Item icon="home-o">標籤</Tabbar.Item>
  <Tabbar.Item badge={{ dot: true }} icon="search">
    標籤
  </Tabbar.Item>
  <Tabbar.Item badge={{ content: 5 }} icon="friends-o">
    標籤
  </Tabbar.Item>
  <Tabbar.Item badge={{ content: 20 }} icon="setting-o">
    標籤
  </Tabbar.Item>
</Tabbar>
```

### 自定義圖標

通過 `icon` 屬性自定義圖標。

```jsx
const icon = {
  active: 'https://img.yzcdn.cn/vant/user-active.png',
  inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
};

<Tabbar>
  <Tabbar.Item icon={(ac) => <img alt="" src={ac ? icon.active : icon.inactive} />}>
    標籤
  </Tabbar.Item>
  <Tabbar.Item icon="friends-o">標籤</Tabbar.Item>
  <Tabbar.Item icon="setting-o">標籤</Tabbar.Item>
</Tabbar>;
```

### 自定義顏色

通過 `activeColor` 屬性設置選中標籤的顏色，通過 `inactiveColor` 屬性設置未選中標籤的顏色。

```jsx
<Tabbar activeColor="#f44336" inactiveColor="#000">
  <Tabbar.Item icon="home-o">標籤</Tabbar.Item>
  <Tabbar.Item icon="search">標籤</Tabbar.Item>
  <Tabbar.Item icon="friends-o">標籤</Tabbar.Item>
  <Tabbar.Item icon="setting-o">標籤</Tabbar.Item>
</Tabbar>
```

### 監聽切換事件

通過 `onChange` 事件來監聽選中標籤的變化。

```jsx
<Tabbar onChange={(v) => Toast.info(`標籤${+v + 1}`)}>
  <Tabbar.Item icon="home-o">標籤</Tabbar.Item>
  <Tabbar.Item icon="search">標籤</Tabbar.Item>
  <Tabbar.Item icon="friends-o">標籤</Tabbar.Item>
  <Tabbar.Item icon="setting-o">標籤</Tabbar.Item>
</Tabbar>
```

## API

### Tabbar Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 當前選中標籤的名稱或索引值 | _number \| string_ | - |
| defaultValue | 默認選中標籤的名稱或索引值 | _number \| string_ | `0` |
| fixed | 是否固定在底部 | _boolean_ | `true` |
| border | 是否顯示外邊框 | _boolean_ | `true` |
| zIndex | 元素 z-index | _number \| string_ | `1` |
| activeColor | 選中標籤的顏色 | _string_ | `#3f45ff` |
| inactiveColor | 未選中標籤的顏色 | _string_ | `#7d7e80` |
| placeholder | 固定在底部時，是否在標籤位置生成一個等高的佔位元素 | _boolean_ | `false` |
| safeAreaInsetBottom | 是否開啟[底部安全區適配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei)，設置 fixed 時默認開啟 | _boolean_ | `false` |

### Tabbar Events

| 事件名   | 說明           | 回調參數                   |
| -------- | -------------- | -------------------------- |
| onChange | 切換標籤時觸發 | _active: number \| string_ |

### TabbarItem Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| name | 標籤名稱，作為匹配的標識符 | _number \| string_ | 當前標籤的索引值 |
| icon | 圖標 | _string \| (active: boolean) => React.ReactNode_ | - |
| iconPrefix | 圖標類名前綴，等同於 Icon 元件的 [classPrefix 屬性](#/zh-CN/icon#props) | _string_ | `van-icon` |
| badge | 圖標右上角徽標的內容 | _BadgeProps_ | - |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                     | 默認值                    | 描述 |
| ---------------------------------------- | ------------------------- | ---- |
| --rc-tabbar-height                       | _50px_                    | -    |
| --rc-tabbar-z-index                      | _1_                       | -    |
| --rc-tabbar-background-color             | _var(--rc-white)_         | -    |
| --rc-tabbar-item-font-size               | _var(--rc-font-size-sm)_  | -    |
| --rc-tabbar-item-text-color              | _var(--rc-gray-7)_        | -    |
| --rc-tabbar-item-active-color            | _var(--rc-primary-color)_ | -    |
| --rc-tabbar-item-active-background-color | _var(--rc-white)_         | -    |
| --rc-tabbar-item-line-height             | _1_                       | -    |
| --rc-tabbar-item-icon-size               | _22px_                    | -    |
| --rc-tabbar-item-icon-margin-bottom      | _var(--rc-padding-base)_  | -    |

