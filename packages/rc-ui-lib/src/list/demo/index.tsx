/* eslint-disable react/no-array-index-key */
import React, { useRef, useState, useEffect } from 'react';
import { components } from 'site-mobile-demo';
import { Tabs, Cell } from '../..';
import List from '../index';
import PullRefresh from '../../pull-refresh';

import './style.less';
import { ListInstance } from '../PropsType';
import { useListDemoI18n } from './locale';

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

export default (): React.ReactNode => {
  const { DemoSection } = components;
  const t = useListDemoI18n();

  const listRef = useRef<ListInstance>(null);
  const [list, setList] = useState<Array<number>>([]);
  const [count, setCount] = useState(0);
  const [errorList, setErrorList] = useState<Array<number>>([]);
  const [refreshList, setRefreshList] = useState<Array<number>>([]);

  const [finished, setFinished] = useState<boolean>(false);
  const onLoad = async () => {
    const data = await getData();
    setList((v) => [...v, ...data]);
    if (list.length >= 30) {
      setFinished(true);
    }
  };

  const onLoadError = async () => {
    // 异步更新数据
    setCount((v) => v + 1);
    const data = await getData(count === 1);
    setErrorList((v) => [...v, ...data]);
  };

  useEffect(() => {
    if (errorList.length >= 30) {
      setFinished(true);
    }
  }, [errorList]);

  const onLoadRefresh = async (isRefresh?: any) => {
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
    listRef.current?.check();
  };

  return (
    <DemoSection>
      <Tabs sticky onChange={() => setFinished(false)}>
        <Tabs.TabPane title={t.tabTitleBasic}>
          <List finished={finished} onLoad={onLoad}>
            {list.length
              ? list.map((_, i) => {
                  return <Cell key={i} title={i + 1} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        <Tabs.TabPane title={t.tabTitleError}>
          <List finished={finished} errorText={t.errorText} onLoad={onLoadError}>
            {errorList.length
              ? errorList.map((_, i) => {
                  return <Cell key={i} title={i + 1} />;
                })
              : null}
          </List>
        </Tabs.TabPane>
        <Tabs.TabPane title={t.tabTitleRefresh}>
          <PullRefresh onRefresh={onRefresh}>
            <List ref={listRef} finished={finished} onLoad={onLoadRefresh}>
              {refreshList.length
                ? refreshList.map((_, i) => {
                    return <Cell key={i} title={i + 1} />;
                  })
                : null}
            </List>
          </PullRefresh>
        </Tabs.TabPane>
      </Tabs>
    </DemoSection>
  );
};
