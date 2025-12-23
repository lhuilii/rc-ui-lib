# CountDown 倒數計時

### 介紹

用於即時展示倒數計時數值，支援毫秒精度。

### 引入

```js
import { CountDown } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

`time` 屬性表示倒數計時總時長，單位為毫秒。

```jsx
import { setState } from 'react';
import { CountDown } from 'rc-ui-lib';
export default () => {
  const [time] = useState(30 * 60 * 60 * 1000);
  return <CountDown time={time} />;
};
```

### 自訂格式

透過 `format` 屬性設定倒數計時文字的內容。

```jsx
<CountDown time={30 * 60 * 60 * 1000} format="DD 天 HH 時 mm 分 ss 秒" />
```

### 毫秒級渲染

倒數計時預設每秒渲染一次，設定 `millisecond` 屬性可以開啟毫秒級渲染。

```jsx
<CountDown millisecond time={30 * 60 * 60 * 1000} format="HH:mm:ss:SS" />
```

### 自訂樣式

透過 `renderChildren` 傳入 _ReactNode_ 並使用 `CurrentTime` 物件來自訂渲染，`CurrentTime` 物件格式見下方表格。

```jsx
<CountDown
  time={time}
  renderChildren={(timeData: CurrentTime) => {
    return (
      <>
        <span className="block">{timeData.hours}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.minutes}</span>
        <span className="colon">:</span>
        <span className="block">{timeData.seconds}</span>
      </>
    );
  }}
/>
```

### 手動控制

透過 ref 取得元件實例後，可以呼叫 `start`、`pause`、`reset` 方法。

```jsx
import { CountDown, Toast } from 'rc-ui-lib';
export default () => {
  const countDownRef = useRef<CountDownInstance>();
  const start = () => {
    CountDownRef.current.start();
  };
  const pause = () => {
    CountDownRef.current.pause();
  };
  const reset = () => {
    CountDownRef.current.reset();
  };
  const onFinish = () => Toast('倒數計時結束');

  return (
    <>
      <CountDown format="ss:SSS" time={3000} onFinish={onFinish} ref={CountDownRef} />
      <Grid columnNum={3}>
        <Grid.Item icon="play-circle-o" text="開始" onClick={start} />
        <Grid.Item icon="pause-circle-o" text="暫停" onClick={pause} />
        <Grid.Item icon="replay" text="重置" onClick={reset} />
      </Grid>
    </>
  );
};
```

## API

### Props

| 參數           | 說明                   | 類型                                      | 預設值     |
| -------------- | ---------------------- | ----------------------------------------- | ---------- |
| time           | 倒數計時時長，單位毫秒 | _number \| string_                        | `0`        |
| format         | 時間格式               | _string_                                  | `HH:mm:ss` |
| autoStart      | 是否自動開始倒數計時   | _boolean_                                 | `true`     |
| millisecond    | 是否開啟毫秒級渲染     | _boolean_                                 | `false`    |
| renderChildren | 自訂子元素方法         | _(timeData:currentTime)=>React.ReactNode_ | -          |

### format 格式

| 格式 | 說明       |
| ---- | ---------- |
| DD   | 天數       |
| HH   | 小時       |
| mm   | 分鐘       |
| ss   | 秒數       |
| S    | 毫秒（1 位） |
| SS   | 毫秒（2 位） |
| SSS  | 毫秒（3 位） |

### 事件

| 事件名   | 說明               | 回調參數                   |
| -------- | ------------------ | -------------------------- |
| onFinish | 倒數計時結束時觸發 | -                          |
| onChange | 倒數計時變化時觸發 | _currentTime: CurrentTime_ |

### CurrentTime 格式

| 名稱         | 說明                     | 類型     |
| ------------ | ------------------------ | -------- |
| total        | 剩餘總時間（單位毫秒）   | _number_ |
| days         | 剩餘天數                 | _number_ |
| hours        | 剩餘小時                 | _number_ |
| minutes      | 剩餘分鐘                 | _number_ |
| seconds      | 剩餘秒數                 | _number_ |
| milliseconds | 剩餘毫秒                 | _number_ |

### 方法

透過 ref 可以取得 CountDown 實例並呼叫實例方法。

| 方法名 | 說明                                                            | 參數 | 返回值 |
| ------ | ---------------------------------------------------------------- | ---- | ------ |
| start  | 開始倒數計時                                                    | -    | -      |
| pause  | 暫停倒數計時                                                    | -    | -      |
| reset  | 重設倒數計時，若 `auto-start` 為 `true`，重設後會自動開始倒數計時 | -    | -      |

### 型別定義

透過 `CountDownInstance` 取得 CountDown 實例的型別定義。

```jsx
import { useRef } from 'react';
import type { CountDownInstance } from 'rc-ui-lib';

const countDownRef = useRef<CountDownInstance>();

countDownRef.current?.start();
```

### 樣式變數

元件提供了下列 CSS 變數，可用於自訂樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                        | 預設值                            | 描述 |
| --------------------------- | --------------------------------- | ---- |
| --rc-count-down-text-color  | _var(--rc-count-down-text-color)_ | -    |
| --rc-count-down-font-size   | _14px_                            | -    |
| --rc-count-down-line-height | _20px_                            | -    |

## 常見問題

### 在 iOS 系統上倒數計時不生效？

如果你遇到了在 iOS 上倒數計時不生效的問題，請確認在建立 Date 物件時沒有使用 `new Date('2020-01-01')` 這樣的寫法，iOS 不支援以連字號分隔的日期格式，正確寫法是 `new Date('2020/01/01')`。


