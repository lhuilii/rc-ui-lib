# Uploader 文件上傳

### 介紹

用於將本地的圖片或文件上傳至服務器，並在上傳過程中展示預覽圖和上傳進度。目前 Uploader 元件不包含將文件上傳至服務器的接口邏輯，該步驟需要自行實現。

### 引入

```js
import { Uploader } from 'rc-ui-lib';
```

## 程式碼演示

### 基礎用法

文件上傳完畢後會觸發 `afterRead` 回調函數，獲取到對應的 `file` 對象。

```jsx
<Uploader afterRead={(file) => console.log(file)} />
```

### 文件預覽

通過 `value` 可以綁定已經上傳的文件列表，並展示文件列表的預覽圖。

```jsx
export default () => {
  const [demo, setDemo] = useState([
    { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
    // Uploader 根據文件後綴來判斷是否為圖片文件
    // 如果圖片 URL 中不包含類型信息，可以添加 isImage 標記來聲明
    { url: 'https://cloud-image', isImage: true },
  ]);

  return <Uploader value={demo} />;
};
```

### 上傳狀態

通過 `status` 屬性可以標識上傳狀態，`uploading` 表示上傳中，`failed` 表示上傳失敗，`done` 表示上傳完成。

```jsx
export default () => {
  const [demo, setDemo] = useState([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: 'uploading',
      message: '上傳中...',
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: 'failed',
      message: '上傳失敗',
    },
  ]);

  const afterRead = (file, { index }) => {
    file.status = 'uploading';
    file.message = '上傳中...';
    const newDemo = demo.slice(0);
    newDemo[index] = file;
    setDemo(newDemo);

    setTimeout(() => {
      file.status = 'failed';
      file.message = '上傳失敗';

      setDemo((v) => {
        const nv = v.slice(0);
        nv[index] = file;
        return nv;
      });
    }, 1000);
  };

  return <Uploader value={demo} afterRead={afterRead} onChange={(v) => setDemo(v)} />;
};
```

### 限制上傳數量

通過 `maxCount` 屬性可以限制上傳文件的數量，上傳數量達到限制後，會自動隱藏上傳區域。

```jsx
<Uploader multiple maxCount={2} value={demo2} afterRead={afterRead} onChange={(v) => setDemo2(v)} />
```

### 限制上傳大小

通過 `maxSize` 屬性可以限制上傳文件的大小，超過大小的文件會被自動過濾，這些文件信息可以通過 `onOversize` 事件獲取。

```jsx
<Uploader maxSize={5 * 1024} onOversize={onOversize} />
```

如果需要針對不同類型的文件來作出不同的大小限制，可以在 `maxSize` 屬性中傳入一個函數，在函數中通過 `file.type` 區分文件類型，返回 `true` 表示超出限制，`false` 表示未超出限制。

```jsx
export default () => {
  const isOverSize = (file) => {
    const maxSize = file.type === 'image/jpeg' ? 500 * 1024 : 1000 * 1024;
    return file.size >= maxSize;
  };
  return <Uploader maxSize={isOverSize} onOversize={onOversize} />;
};
```

### 自定義上傳樣式

通過默認插槽可以自定義上傳區域的樣式。

```jsx
<Uploader>
  <Button block type="primary" round>
    上傳文件
  </Button>
</Uploader>
```

### 上傳前置處理

通過傳入 `beforeRead` 函數可以在上傳前進行校驗和處理，返回 `true` 表示校驗通過，返回 `false` 表示校驗失敗。支持返回 `Promise` 對 file 對象進行自定義處理，例如壓縮圖片。

```jsx

export default () => {
  // 返回 boolean
  const beforeRead = (file) => {
    const files = Array.isArray(file) ? file : [file];
    return files.some(f => {
      if (f.type !== 'image/jpeg') {
        Toast('請上傳 jpg 格式圖片');
        return true;
      }
      return false
    })
  };

  // 返回 Promise
  const asyncBeforeRead = async (file: File | File[]) => {
    // multiple 為 true, `file`是array類型
    const files = Array.isArray(file) ? file : [file];
    return new Promise<File[]>((resolve) => {
      // 過濾掉不符合的文件，符合的還是會上傳
      const passFiles = files.filter((f) => {
        if (f.type !== 'image/jpeg') {
          Toast.info(`${f.name}格式錯誤，請上傳 jpg 格式圖片`);
          return false;
        }
        return true;
      });
      resolve(passFiles);
    });
  };

  return <Uploader beforeRead={asyncBeforeRead} />;
};
```

### 禁用文件上傳

通過 `disabled` 屬性禁用文件上傳。

```jsx
<Uploader disabled />
```

## API

### Props

| 參數 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| value | 已上傳的文件列表 | _FileListItem[]_ | - |
| accept | 允許上傳的文件類型，[詳細說明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | _string_ | `image/*` |
| name | 標識符，可以在回調函數的第二項參數中獲取 | _number \| string_ | - |
| previewSize | 預覽圖和上傳區域的尺寸，默認單位為 `px` | _number \| string_ | `80px` |
| previewImage | 是否在上傳完成後展示預覽圖 | _boolean_ | `true` |
| previewFullImage | 是否在點擊預覽圖後展示全屏圖片預覽 | _boolean_ | `true` |
| previewOptions | 全屏圖片預覽的配置項，可選值見 [ImagePreview](#/zh-CN/image-preview) | _object_ | - |
| multiple | 是否開啟圖片多選，部分安卓機型不支持 | _boolean_ | `false` |
| disabled | 是否禁用文件上傳 | _boolean_ | `false` |
| readonly | 是否將上傳區域設置為只讀狀態 | _boolean_ | `false` |
| deletable | 是否展示刪除按鈕 | _boolean_ | `true` |
| showUpload | 是否展示上傳區域 | _boolean_ | `true` |
| capture | 圖片選取模式，可選值為 `camera` (直接調起攝像頭) | _string_ | - |
| afterRead | 文件讀取完成後的回調函數 | _Function_ | - |
| beforeRead | 文件讀取前的回調函數，返回 `false` 可終止文件讀取，<br/>支持返回 `Promise` | _Function_ | - |
| beforeDelete | 文件刪除前的回調函數，返回 `false` 可終止文件讀取，<br/>支持返回 `Promise` | _Function_ | - |
| maxSize | 文件大小限制，單位為 `byte` | _number \| string \| (file: File) => boolean_ | - |
| maxCount | 文件上傳數量限制 | _number \| string_ | - |
| resultType | 文件讀取結果類型，可選值為 `file` `text` | _string_ | `dataUrl` |
| uploadText | 上傳區域文字提示 | _string_ | - |
| imageFit | 預覽圖裁剪模式，可選值見 [Image](#/zh-CN/image) 元件 | _string_ | `cover` |
| uploadIcon | 上傳區域圖標 | _string\|ReactNode_ | `photograph` |

> 注意：accept、capture 和 multiple 為瀏覽器 input 標籤的原生屬性，移動端各種機型對這些屬性的支持程度有所差異，因此在不同機型和 WebView 下可能出現一些兼容性問題。

### Events

| 事件名         | 說明                   | 回調參數                 |
| -------------- | ---------------------- | ------------------------ |
| onChange       | 元件值更新時調用       | _UploaderFileListItem[]_ |
| onOversize     | 文件大小超過限制時觸發 | 同 `afterRead`           |
| onClickUpload  | 點擊上傳區域時觸發     | _event: MouseEvent_      |
| onClickPreview | 點擊預覽圖時觸發       | 同 `afterRead`           |
| onClosePreview | 關閉全屏圖片預覽時觸發 | -                        |
| onDelete       | 刪除文件預覽時觸發     | 同 `afterRead`           |

### 回調參數

beforeRead、afterRead、beforeDelete 執行時會傳遞以下回調參數：

| 參數名 | 說明                              | 類型     |
| ------ | --------------------------------- | -------- |
| file   | file 對象                         | _object_ |
| detail | 額外信息，包含 name 和 index 字段 | _object_ |

### ResultType 可選值

`resultType` 字段表示文件讀取結果的類型，上傳大文件時，建議使用 file 類型，避免卡頓。

| 值      | 描述                                           |
| ------- | ---------------------------------------------- |
| file    | 結果僅包含 File 對象                           |
| text    | 結果包含 File 對象，以及文件的文本內容         |
| dataUrl | 結果包含 File 對象，以及文件對應的 base64 編碼 |

### 類型定義

元件導出以下類型定義：

```js
import type { UploaderInstance, UploaderResultType, UploaderFileListItem } from 'rc-ui-lib';
```

`UploaderInstance` 是元件實例的類型，用法如下：

```js
import { useRef } from 'react';
import type { UploaderInstance } from 'rc-ui-lib';

const uploaderRef = useRef<UploaderInstance>();

uploaderRef.current?.chooseFile();
```

## 主題定制

### 樣式變數

元件提供了下列 CSS 變數，可用於自定義樣式，使用方法請參考 [ConfigProvider 元件](#/zh-CN/config-provider)。

| 名稱                                   | 默認值                        | 描述 |
| -------------------------------------- | ----------------------------- | ---- |
| --rc-uploader-size                     | _80px_                        | -    |
| --rc-uploader-icon-size                | _24px_                        | -    |
| --rc-uploader-icon-color               | _var(--rc-gray-4)_            | -    |
| --rc-uploader-text-color               | _var(--rc-gray-6)_            | -    |
| --rc-uploader-text-font-size           | _var(--rc-font-size-sm)_      | -    |
| --rc-uploader-upload-background-color  | _var(--rc-gray-1)_            | -    |
| --rc-uploader-upload-active-color      | _var(--rc-active-color)_      | -    |
| --rc-uploader-delete-color             | _var(--rc-white)_             | -    |
| --rc-uploader-delete-icon-size         | _14px_                        | -    |
| --rc-uploader-delete-background-color  | _rgba(0, 0, 0, 0.7)_          | -    |
| --rc-uploader-file-background-color    | _var(--rc-background-color)_  | -    |
| --rc-uploader-file-icon-size           | _20px_                        | -    |
| --rc-uploader-file-icon-color          | _var(--rc-gray-7)_            | -    |
| --rc-uploader-file-name-padding        | _0 var(--rc-padding-base)_    | -    |
| --rc-uploader-file-name-margin-top     | _var(--rc-padding-xs)_        | -    |
| --rc-uploader-file-name-font-size      | _var(--rc-font-size-sm)_      | -    |
| --rc-uploader-file-name-text-color     | _var(--rc-gray-7)_            | -    |
| --rc-uploader-mask-text-color          | _var(--rc-white)_             | -    |
| --rc-uploader-mask-background-color    | _fade(var(--rc-gray-8), 88%)_ | -    |
| --rc-uploader-mask-icon-size           | _22px_                        | -    |
| --rc-uploader-mask-message-font-size   | _var(--rc-font-size-sm)_      | -    |
| --rc-uploader-mask-message-line-height | _var(--rc-line-height-xs)_    | -    |
| --rc-uploader-loading-icon-size        | _22px_                        | -    |
| --rc-uploader-loading-icon-color       | _var(--rc-white)_             | -    |
| --rc-uploader-disabled-opacity         | _var(--rc-disabled-opacity)_  | -    |

## 常見問題

### 拍照上傳的圖片被旋轉 90 度？

部分手機在拍照上傳時會出現圖片被旋轉 90 度的問題，這個問題可以通過 [compressorjs](https://github.com/fengyuanchen/compressorjs) 或其他開源庫進行處理。

compressorjs 是一個開源的圖片處理庫，提供了圖片壓縮、圖片旋轉等能力。

#### 示例

使用 compressorjs 進行處理的示例代碼如下:

```jsx
export default () => {
  const beforeRead = (file) => {
    return new Promise((resolve) => {
      // compressorjs 默認開啟 checkOrientation 選項
      // 會將圖片修正為正確方向
      new Compressor(file, {
        success: resolve,
        error(err) {
          console.log(err.message);
        },
      });
    });
  };
  return <Uploader beforeRead="beforeRead" />;
};
```

### 上傳 HEIC/HEIF 格式的圖片後無法展示？

目前 Chrome、Safari 等瀏覽器不支持展示 HEIC/HEIF 格式的圖片，因此上傳後無法在 Uploader 元件中進行預覽。

[HEIF] 格式的兼容性請參考 [caniuse](https://caniuse.com/?search=heic)。

