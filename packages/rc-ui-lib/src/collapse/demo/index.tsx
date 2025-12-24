import React from 'react';
import { components } from 'site-mobile-demo';
import { Icon } from '../..';
import Collapse from '..';
import { useCollapseDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useCollapseDemoI18n();
  return (
    <DemoSection>
      <DemoBlock title={t.demoTitleBasic}>
        <Collapse initValue={['1']}>
          <Collapse.Item title={t.title1} name="1">
            {t.content}
          </Collapse.Item>
          <Collapse.Item title={t.title2} name="2">
            {t.content}
          </Collapse.Item>
          <Collapse.Item title={t.title3} name="3">
            {t.content}
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
      <DemoBlock title={t.demoTitleAccordion}>
        <Collapse initValue="1" accordion>
          <Collapse.Item
            title={
              <div>
                {t.title1} <Icon name="question-o" />
              </div>
            }
            name="1"
          >
            {t.content}
          </Collapse.Item>
          <Collapse.Item title={t.title2} name="2">
            {t.content}
          </Collapse.Item>
          <Collapse.Item title={t.title3} name="3">
            {t.content}
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
      <DemoBlock initValue={[]} title={t.demoTitleDisabled}>
        <Collapse>
          <Collapse.Item title={t.title1} name="1">
            {t.content}
          </Collapse.Item>
          <Collapse.Item title={t.title2} name="2" readonly>
            {t.content}
          </Collapse.Item>
          <Collapse.Item title={t.title3} name="3" disabled>
            {t.content}
          </Collapse.Item>
        </Collapse>
      </DemoBlock>
    </DemoSection>
  );
};
