/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { components } from 'site-mobile-demo';
import { Toast, Button } from '../..';
import Uploader, { UploaderFileListItem } from '..';
import { useUploaderDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useUploaderDemoI18n();

  const demoUploadValue = [
    {
      url: 'https://img.yzcdn.cn/vant/sand.jpg',
      status: 'done',
      name: t.imageName,
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: 'done',
      name: t.imageName,
    },
  ];

  const [demo, setDemo] = useState<UploaderFileListItem[]>([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: 'uploading',
      message: t.uploading,
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: 'failed',
      message: t.uploadFailed,
    },
  ]);
  const [beforeReadDemo, setBeforeReadDemo] = useState<UploaderFileListItem[]>([]);
  const [maxCountDemo, setMaxCountDemo] = useState<UploaderFileListItem[]>([demoUploadValue[0]]);
  const [maxSizeDemo, setMaxSizeDemo] = useState<UploaderFileListItem[]>([demoUploadValue[0]]);
  const [previewDemo, setPreviewDemo] = useState<UploaderFileListItem[]>(demoUploadValue);
  const [customPreview, setCustomPreview] = useState<UploaderFileListItem[]>([demoUploadValue[1]]);

  const afterRead = (file, { index }) => {
    file.status = 'uploading';
    file.message = t.uploading;
    const newValue = [...demo];
    newValue[index] = file;
    setDemo(newValue);

    setTimeout(() => {
      file.status = 'failed';
      file.message = t.uploadFailed;
      file.content = 'xxxx.jpg';

      setDemo((v) => {
        const nv = [...v];
        nv[index] = file;
        return nv;
      });
    }, 1000);
  };

  // return Promise
  const asyncBeforeRead = async (file: File | File[]) => {
    // if multiple is true, `file` will be array type
    const files = Array.isArray(file) ? file : [file];
    return new Promise<File[]>((resolve) => {
      // filter invalid file
      const passFiles = files.filter((f) => {
        if (f.type !== 'image/jpeg') {
          Toast.info(t.toastFormatError(f.name));
          return false;
        }
        return true;
      });
      resolve(passFiles);
    });
  };

  const beforeRead = (file) => {
    if (file.type !== 'image/jpeg') {
      Toast(t.toastFormat);
      return false;
    }
    return true;
  };

  const onOversize = (file) => {
    console.log(file);
    Toast(t.toastOversize);
  };

  return (
    <DemoSection className="demo-uploadeer">
      <DemoBlock title={t.demoTitleBasic}>
        <Uploader afterRead={(file) => console.log(file)} />
      </DemoBlock>
      <DemoBlock title={t.demoTitlePreview}>
        <Uploader
          onClickPreview={(items, detail) => {
            console.log(items, detail);
          }}
          onClickUpload={() => {
            console.log('click upload tigger');
          }}
          value={previewDemo}
          onChange={setPreviewDemo}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleStatus}>
        <Uploader multiple value={demo} afterRead={afterRead} onChange={(v) => setDemo(v)} />
      </DemoBlock>
      <DemoBlock title={t.demoTitleMaxCount}>
        <Uploader
          multiple
          maxCount={4}
          value={maxCountDemo}
          afterRead={afterRead}
          onChange={setMaxCountDemo}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleMaxSize}>
        <Uploader
          multiple
          value={maxSizeDemo}
          onChange={setMaxSizeDemo}
          maxSize={5 * 1024}
          onOversize={onOversize}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomStyle}>
        <Uploader style={{ width: '100%' }}>
          <Button block type="primary" round>
            {t.btnUpload}
          </Button>
        </Uploader>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomPreview}>
        <Uploader
          value={customPreview}
          onChange={setCustomPreview}
          previewCoverRender={(item) => {
            return <div className="preview-cover">{item.name}</div>;
          }}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleBeforeRead}>
        <Uploader
          multiple
          value={beforeReadDemo}
          onChange={setBeforeReadDemo}
          beforeRead={asyncBeforeRead}
        />
      </DemoBlock>
      <DemoBlock title={t.demoTitleDisabled}>
        <Uploader disabled />
      </DemoBlock>
    </DemoSection>
  );
};
