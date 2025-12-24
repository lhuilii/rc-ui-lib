# Uploader

### Introduction

Used to upload local images or files to the server, and display preview images and upload progress during the upload process. Currently, the Uploader component does not include the interface logic for uploading files to the server. This step needs to be implemented by yourself.

### Import

```js
import { Uploader } from 'rc-ui-lib';
```

## Code Example

### Basic Usage

After the file is uploaded, the `afterRead` callback function will be triggered to get the corresponding `file` object.

```jsx
<Uploader afterRead={(file) => console.log(file)} />
```

### File Preview

You can bind the list of uploaded files through `value` and display the preview images of the file list.

```jsx
export default () => {
  const [demo, setDemo] = useState([
    { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
    // Uploader determines whether it is an image file based on the file extension
    // If the image URL does not contain type information, you can add an isImage flag to declare it
    { url: 'https://cloud-image', isImage: true },
  ]);

  return <Uploader value={demo} />;
};
```

### Upload Status

You can identify the upload status through the `status` property. `uploading` means uploading, `failed` means upload failed, and `done` means upload completed.

```jsx
export default () => {
  const [demo, setDemo] = useState([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: 'uploading',
      message: 'Uploading...',
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: 'failed',
      message: 'Upload failed',
    },
  ]);

  const afterRead = (file, { index }) => {
    file.status = 'uploading';
    file.message = 'Uploading...';
    const newDemo = demo.slice(0);
    newDemo[index] = file;
    setDemo(newDemo);

    setTimeout(() => {
      file.status = 'failed';
      file.message = 'Upload failed';

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

### Limit Upload Count

You can limit the number of uploaded files through the `maxCount` property. When the upload count reaches the limit, the upload area will be automatically hidden.

```jsx
<Uploader multiple maxCount={2} value={demo2} afterRead={afterRead} onChange={(v) => setDemo2(v)} />
```

### Limit Upload Size

You can limit the size of uploaded files through the `maxSize` property. Files that exceed the size will be automatically filtered. This file information can be obtained through the `onOversize` event.

```jsx
<Uploader maxSize={5 * 1024} onOversize={onOversize} />
```

If you need to make different size limits for different types of files, you can pass a function in the `maxSize` property. In the function, distinguish file types through `file.type`, return `true` to indicate exceeding the limit, and `false` to indicate not exceeding the limit.

```jsx
export default () => {
  const isOverSize = (file) => {
    const maxSize = file.type === 'image/jpeg' ? 500 * 1024 : 1000 * 1024;
    return file.size >= maxSize;
  };
  return <Uploader maxSize={isOverSize} onOversize={onOversize} />;
};
```

### Custom Upload Style

You can customize the style of the upload area through the default slot.

```jsx
<Uploader>
  <Button block type="primary" round>
    Upload File
  </Button>
</Uploader>
```

### Pre-upload Processing

By passing in the `beforeRead` function, you can validate and process before uploading. Returning `true` means the validation passed, and returning `false` means the validation failed. Supports returning `Promise` to customize the file object, such as compressing images.

```jsx

export default () => {
  // Return boolean
  const beforeRead = (file) => {
    const files = Array.isArray(file) ? file : [file];
    return files.some(f => {
      if (f.type !== 'image/jpeg') {
        Toast('Please upload JPG format images');
        return true;
      }
      return false
    })
  };

  // Return Promise
  const asyncBeforeRead = async (file: File | File[]) => {
    // When multiple is true, `file` is an array type
    const files = Array.isArray(file) ? file : [file];
    return new Promise<File[]>((resolve) => {
      // Filter out files that don't meet the requirements, files that meet the requirements will still be uploaded
      const passFiles = files.filter((f) => {
        if (f.type !== 'image/jpeg') {
          Toast.info(`${f.name} format error, please upload JPG format images`);
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

### Disable File Upload

Disable file upload through the `disabled` property.

```jsx
<Uploader disabled />
```

## API

### Props

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| value | List of uploaded files | _FileListItem[]_ | - |
| accept | Allowed file types for upload, [detailed description](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | _string_ | `image/*` |
| name | Identifier, can be obtained in the second parameter of the callback function | _number \| string_ | - |
| previewSize | Size of preview image and upload area, default unit is `px` | _number \| string_ | `80px` |
| previewImage | Whether to display preview image after upload is completed | _boolean_ | `true` |
| previewFullImage | Whether to display full-screen image preview after clicking the preview image | _boolean_ | `true` |
| previewOptions | Configuration options for full-screen image preview, optional values see [ImagePreview](#/en-US/image-preview) | _object_ | - |
| multiple | Whether to enable multiple image selection, some Android models do not support | _boolean_ | `false` |
| disabled | Whether to disable file upload | _boolean_ | `false` |
| readonly | Whether to set the upload area to read-only state | _boolean_ | `false` |
| deletable | Whether to show delete button | _boolean_ | `true` |
| showUpload | Whether to show upload area | _boolean_ | `true` |
| capture | Image selection mode, optional value is `camera` (directly open camera) | _string_ | - |
| afterRead | Callback function after file reading is completed | _Function_ | - |
| beforeRead | Callback function before file reading, return `false` to terminate file reading,<br/>supports returning `Promise` | _Function_ | - |
| beforeDelete | Callback function before file deletion, return `false` to terminate file reading,<br/>supports returning `Promise` | _Function_ | - |
| maxSize | File size limit, unit is `byte` | _number \| string \| (file: File) => boolean_ | - |
| maxCount | File upload count limit | _number \| string_ | - |
| resultType | File reading result type, optional values are `file` `text` | _string_ | `dataUrl` |
| uploadText | Text hint for upload area | _string_ | - |
| imageFit | Preview image crop mode, optional values see [Image](#/en-US/image) component | _string_ | `cover` |
| uploadIcon | Upload area icon | _string\|ReactNode_ | `photograph` |

> Note: accept, capture, and multiple are native properties of the browser input tag. The support for these properties varies across different mobile models, so there may be some compatibility issues on different models and WebViews.

### Events

| Event Name | Description | Callback Parameters |
| --- | --- | --- |
| onChange | Called when component value is updated | _UploaderFileListItem[]_ |
| onOversize | Triggered when file size exceeds limit | Same as `afterRead` |
| onClickUpload | Triggered when clicking upload area | _event: MouseEvent_ |
| onClickPreview | Triggered when clicking preview image | Same as `afterRead` |
| onClosePreview | Triggered when closing full-screen image preview | - |
| onDelete | Triggered when deleting file preview | Same as `afterRead` |

### Callback Parameters

The following callback parameters are passed when beforeRead, afterRead, and beforeDelete are executed:

| Parameter Name | Description | Type |
| --- | --- | --- |
| file | file object | _object_ |
| detail | Additional information, including name and index fields | _object_ |

### ResultType Optional Values

The `resultType` field represents the type of file reading result. When uploading large files, it is recommended to use the file type to avoid lag.

| Value | Description |
| --- | --- |
| file | Result only contains File object |
| text | Result contains File object and text content of the file |
| dataUrl | Result contains File object and base64 encoding corresponding to the file |

### Type Definitions

The component exports the following type definitions:

```js
import type { UploaderInstance, UploaderResultType, UploaderFileListItem } from 'rc-ui-lib';
```

`UploaderInstance` is the type of the component instance. Usage is as follows:

```js
import { useRef } from 'react';
import type { UploaderInstance } from 'rc-ui-lib';

const uploaderRef = useRef<UploaderInstance>();

uploaderRef.current?.chooseFile();
```

## Theme Customization

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to the [ConfigProvider component](#/en-US/config-provider) for usage.

| Name | Default Value | Description |
| --- | --- | --- |
| --rc-uploader-size | _80px_ | - |
| --rc-uploader-icon-size | _24px_ | - |
| --rc-uploader-icon-color | _var(--rc-gray-4)_ | - |
| --rc-uploader-text-color | _var(--rc-gray-6)_ | - |
| --rc-uploader-text-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-uploader-upload-background-color | _var(--rc-gray-1)_ | - |
| --rc-uploader-upload-active-color | _var(--rc-active-color)_ | - |
| --rc-uploader-delete-color | _var(--rc-white)_ | - |
| --rc-uploader-delete-icon-size | _14px_ | - |
| --rc-uploader-delete-background-color | _rgba(0, 0, 0, 0.7)_ | - |
| --rc-uploader-file-background-color | _var(--rc-background-color)_ | - |
| --rc-uploader-file-icon-size | _20px_ | - |
| --rc-uploader-file-icon-color | _var(--rc-gray-7)_ | - |
| --rc-uploader-file-name-padding | _0 var(--rc-padding-base)_ | - |
| --rc-uploader-file-name-margin-top | _var(--rc-padding-xs)_ | - |
| --rc-uploader-file-name-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-uploader-file-name-text-color | _var(--rc-gray-7)_ | - |
| --rc-uploader-mask-text-color | _var(--rc-white)_ | - |
| --rc-uploader-mask-background-color | _fade(var(--rc-gray-8), 88%)_ | - |
| --rc-uploader-mask-icon-size | _22px_ | - |
| --rc-uploader-mask-message-font-size | _var(--rc-font-size-sm)_ | - |
| --rc-uploader-mask-message-line-height | _var(--rc-line-height-xs)_ | - |
| --rc-uploader-loading-icon-size | _22px_ | - |
| --rc-uploader-loading-icon-color | _var(--rc-white)_ | - |
| --rc-uploader-disabled-opacity | _var(--rc-disabled-opacity)_ | - |

## Common Issues

### Why is the photo uploaded rotated 90 degrees?

Some phones will have the image rotated 90 degrees when taking photos and uploading. This problem can be handled through [compressorjs](https://github.com/fengyuanchen/compressorjs) or other open source libraries.

compressorjs is an open source image processing library that provides image compression, image rotation and other capabilities.

#### Example

Example code for processing with compressorjs:

```jsx
export default () => {
  const beforeRead = (file) => {
    return new Promise((resolve) => {
      // compressorjs enables checkOrientation option by default
      // Will correct the image to the correct orientation
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

### Why can't HEIC/HEIF format images be displayed after upload?

Currently, browsers such as Chrome and Safari do not support displaying HEIC/HEIF format images, so they cannot be previewed in the Uploader component after upload.

For [HEIF] format compatibility, please refer to [caniuse](https://caniuse.com/?search=heic).

