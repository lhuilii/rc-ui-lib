# List 列表

### 介紹

瀑布流滾動載入，用於展示長列表，當列表即將滾動到底部時，會觸發事件並載入更多列表項。

### 引入

```js
import { List } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

List 元件滾動到底部時，會觸發 `onLoad` 事件，此時可以發起異步操作並更新數據，若數據已全部載入完畢，則直接將 `finished` 設置成 `true` 即可。

> 和 vant 不同的是，rc-ui-lib 根據 onLoad 在元件內部維護了 loading 和 error 狀態。

```jsx
<List finished={finished} onLoad={onLoad}>
  {list.length
    ? list.map((item) => {
        return <Cell key={item} title={item} />;
      })
    : null}
</List>
```

```js
async function getData(throwError?) {
  return new Promise<number[]>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        reject(new Error('error'));
      }
      resolve(Array.from({ length: 10 }, (_, i) => i));
    }, 1000);
  });
}

const [list, setList] = useState([]);
const [finished, setFinished] = useState(false);

const onLoad = async () => {
  // 異步更新數據
  const data = await getData();
  setList((v) => [...v, ...data]);
  if (list.length >= 30) {
    setFinished(true);
  }
};
```

### 錯誤提示

若 onLoad 拋出錯誤，即可顯示錯誤提示，用戶點擊錯誤提示後會重新觸發 onLoad 事件。

```jsx
<List errorText="請求失敗，點擊重新載入" onLoad={onLoadError}>
  {errorList.length
    ? errorList.map((item) => {
        return <Cell key={item} title={item} />;
      })
    : null}
</List>
```

```js
// 模擬異步錯誤，實際業務中不需要
const [count, setCount] = useState(0);
const [errorList, setErrorList] = useState([]);

const onLoadError = async () => {
  // 異步更新數據
  setCount((v) => v + 1);
  // 請求次數等於1時 getData會拋出錯誤
  const data = await getData(count === 1);
  setErrorList((v) => [...v, ...data]);
  if (list.length >= 30) {
    setFinished(true);
  }
};
```

### 下拉刷新

List 元件可以與 [PullRefresh](#/zh-CN/pull-refresh) 元件結合使用，實現下拉刷新的效果。

```jsx
<PullRefresh onRefresh={onRefresh}>
  <List ref={listRef} finished={finished} onLoad={onLoadRefresh}>
    {list.length
      ? list.map((item) => {
          return <Cell key={item} title={item} />;
        })
      : null}
  </List>
</PullRefresh>
```

```js
const listRef = useRef(null);
const [finished, setFinished] = useState(false);
const [refreshList, setRefreshList] = useState([]);

const onLoadRefresh = async (isRefresh) => {
  const data = await getData();
  setRefreshList((v) => {
    const newList = isRefresh ? data : [...v, ...data];
    if (newList.length >= 30) {
      setFinished(true);
    }
    return newList;
  });
};

const onRefresh = async () => {
  setFinished(false);
  await onLoadRefresh(1);
  // 調用list的check方法，檢查是否需要繼續執行onLoad方法
  listRef.current?.check();
};
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| loading | 是否處於載入狀態，載入過程中不觸發`load`事件 | _boolean_ | `false` |
| finished | 是否已載入完成，載入完成後不再觸發`load`事件 | _boolean_ | `false` |
| error | 是否載入失敗，載入失敗後點擊錯誤提示可以重新<br/>觸發`load`事件，必須使用`sync`修飾符 | _boolean_ | `false` |
| offset | 滾動條與底部距離小於 offset 時觸發`load`事件 | _number \| string_ | `300` |
| loadingText | 載入過程中的提示文案 | _ReactNode_ | `載入中...` |
| finishedText | 載入完成後的提示文案 | _ReactNode_ | - |
| errorText | 載入失敗後的提示文案 | _ReactNode_ | - |
| immediateCheck | 是否在初始化時立即執行滾動位置檢查 | _boolean_ | `true` |
| autoCheck `v1.0.1` | 是否在 onLoad 執行後再次檢查滾動位置 | _boolean_ | `true` |

### Events

| 事件名 | 說明                               | 類型                      | 回調參數 |
| ------ | ---------------------------------- | ------------------------- | -------- |
| onLoad | 滾動條與底部距離小於 offset 時觸發 | _() => (Promise \| void)_ | -        |

### 方法

通過 ref 可以獲取到 List 實例並調用實例方法

| 方法名 | 說明                                                     | 參數 | 返回值 |
| ------ | -------------------------------------------------------- | ---- | ------ |
| check  | 檢查當前的滾動位置，若已滾動至底部，則會觸發 onLoad 事件 | -    | -      |

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                        | 默認值                   | 描述 |
| --------------------------- | ------------------------ | ---- |
| --rc-list-text-color        | _var(--rc-gray-6)_       | -    |
| --rc-list-text-font-size    | _var(--rc-font-size-md)_ | -    |
| --rc-list-text-line-height  | _50px_                   | -    |
| --rc-list-loading-icon-size | _16px_                   | -    |

## 常見問題

### List 的運行機制是什麼？

List 會監聽瀏覽器的滾動事件並計算列表的位置，當列表底部與可視區域的距離小於`offset`時，List 會觸發一次 load 事件。

### 為什麼 List 初始化後會立即觸發 load 事件？

List 初始化後會觸發一次 load 事件，用於載入第一屏的數據，這個特性可以通過`immediateCheck`屬性關閉。

### 為什麼會連續觸發 load 事件？

如果一次請求載入的數據條數較少，導致列表內容無法鋪滿當前屏幕，List 會繼續觸發 load 事件，直到內容鋪滿屏幕或數據全部載入完成。因此你需要調整每次獲取的數據條數，理想情況下每次請求獲取的數據條數應能夠填滿一屏高度。

### loading 和 finished 分別是什麼含義？

`List`有以下三種狀態，理解這些狀態有助於你正確地使用`List`元件：

- 非載入中，`loading`為`false`，此時會根據列表滾動位置判斷是否觸發`load`事件（列表內容不足一屏幕時，會直接觸發）
- 載入中，`loading`為`true`，表示正在發送異步請求，此時不會觸發`load`事件
- 載入完成，`finished`為`true`，此時不會觸發`load`事件

在每次請求完畢後，需要手動將`loading`設置為`false`，表示載入結束

### 在 html、body 上設置 overflow 後一直觸發載入？

如果在 html 和 body 標籤上設置了`overflow-x: hidden`樣式，會導致 List 一直觸發載入。

```css
html,
body {
  overflow-x: hidden;
}
```

這個問題的原因是當元素設置了`overflow-x: hidden`樣式時，該元素的`overflow-y`會被瀏覽器設置為`auto`，而不是默認值`visible`，導致 List 無法正確地判斷滾動容器。解決方法是去除該樣式，或者在 html 和 body 標籤上添加`height: 100%`樣式。

