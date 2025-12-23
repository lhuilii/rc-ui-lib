# Notify 消息提示

### 介紹

在頁面頂部展示消息提示，支持函數調用和元件調用兩種方式。

### 函數調用

Notify 是一個函數，調用後會直接在頁面中彈出相應的消息提示。

```js
import { Notify } from 'rc-ui-lib';

Notify.show('通知內容');
```

### 元件調用

通過元件調用 Notify 時，可以通過下面的方式進行註冊：

```js
import { useState } from 'react';
import { Notify, Flex, Icon, Button } from 'rc-ui-lib';

export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>打開Notify</Button>
      <Notify visible={visible} type="success">
        <Flex style={{ width: '100%' }} align="center" justify="between">
          <div />
          <div>
            <Icon name="bell" style={{ marginRight: 4 }} />
            <span>通知內容</span>
          </div>
          <Icon name="close" onClick={() => setVisible(false)} />
        </Flex>
      </Notify>
    </>
  );
};
```

## 程式碼演示

### 基礎用法

```jsx
Notify.show('通知內容');
```

### 通知類型

支持 `primary`、`success`、`warning`、`danger` 四種通知類型，默認為 `danger`。

```js
// 主要通知
Notify.show({ type: 'primary', message: '通知內容' });

// 成功通知
Notify.show({ type: 'success', message: '通知內容' });

// 危險通知
Notify.show({ type: 'danger', message: '通知內容' });

// 警告通知
Notify.show({ type: 'warning', message: '通知內容' });
```

### 自定義通知

自定義消息通知的顏色和展示時長。

```jsx
Notify.show({
  message: '自定義顏色',
  color: '#ad0000',
  background: '#ffe1e1',
});

Notify.show({
  message: '自定義時長',
  duration: 1000,
});
```

## API

### 方法

| 方法名 | 說明 | 參數 | 返回值 |
| --- | --- | --- | --- |
| Notify.show | 展示提示 | `options \| message` | notify 實例 |
| Notify.clear | 關閉提示 | - | `void` |
| Notify.setDefaultOptions | 修改默認配置，對所有 Notify 生效 | `options` | `void` |
| Notify.resetDefaultOptions | 重置默認配置，對所有 Notify 生效 | - | `void` |

### Options

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| type | 類型，可選值為 `primary` `success` `warning` | _string_ | `danger` |
| message | 展示文案，支持通過`\n`換行 | _string\|React.ReactNode_ | - |
| duration | 展示時長(ms)，值為 0 時，notify 不會消失 | _number_ | `3000` |
| color | 字體顏色 | _string_ | `white` |
| background | 背景顏色 | _string_ | - |
| className | 自定義類名 | _string_ | - |
| lockScroll | 是否鎖定背景滾動 | _boolean_ | `false` |
| onClick | 點擊時的回調函數 | _(event: MouseEvent): void_ | - |
| onClose | 關閉時的回調函數 | _() => void_ | - |
| teleport | 指定掛載的節點 | _HTMLElement \| () => HTMLElement_ | `body` |

### 類型定義

元件導出以下類型定義：

```js
import type { NotifyType, NotifyProps } from 'rc-ui-lib';
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                 | 默認值                                      | 描述 |
| ------------------------------------ | ------------------------------------------- | ---- |
| --rc-notify-text-color               | _var(--rc-white)_                           | -    |
| --rc-notify-padding                  | _var(--rc-padding-xs) var(--rc-padding-md)_ | -    |
| --rc-notify-font-size                | _var(--rc-font-size-md)_                    | -    |
| --rc-notify-line-height              | _var(--rc-line-height-md)_                  | -    |
| --rc-notify-primary-background-color | _var(--rc-primary-color)_                   | -    |
| --rc-notify-success-background-color | _var(--rc-success-color)_                   | -    |
| --rc-notify-danger-background-color  | _var(--rc-danger-color)_                    | -    |
| --rc-notify-warning-background-color | _var(--rc-warning-color)_                   | -    |

