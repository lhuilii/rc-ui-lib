import React from 'react';
import { components } from 'site-mobile-demo';
import { Grid, Image } from '../..';
import { useGridDemoI18n } from './locale';
import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const t = useGridDemoI18n();
  return (
    <DemoSection className="demo-grid">
      <DemoBlock title={t.demoTitleBasic}>
        <Grid>
          <Grid.Item icon="photo-o" text={t.text} />
          <Grid.Item icon="photo-o" text={t.text} />
          <Grid.Item icon="photo-o" text={t.text} />
          <Grid.Item icon="photo-o" text={t.text} />
        </Grid>
      </DemoBlock>
      <DemoBlock title={t.demoTitleColumnNum}>
        <Grid columnNum={3}>
          {Array.from({ length: 6 }, (_, i) => (
            <Grid.Item key={i} icon="photo-o" text={t.text} />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title={t.demoTitleCustomContent}>
        <Grid border={false} columnNum={3}>
          <Grid.Item>
            <Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          </Grid.Item>
          <Grid.Item>
            <Image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
          </Grid.Item>
          <Grid.Item>
            <Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
          </Grid.Item>
        </Grid>
      </DemoBlock>
      <DemoBlock title={t.demoTitleSquare}>
        <Grid square>
          {Array.from({ length: 8 }, (_, i) => (
            <Grid.Item key={i} icon="photo-o" text={t.text} />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title={t.demoTitleGutter}>
        <Grid gutter={10}>
          {Array.from({ length: 8 }, (_, i) => (
            <Grid.Item key={i} icon="photo-o" text={t.text} />
          ))}
        </Grid>
      </DemoBlock>
      <DemoBlock title={t.demoTitleDirection}>
        <Grid direction="horizontal" columnNum={3}>
          <Grid.Item icon="photo-o" text={t.text} />
          <Grid.Item icon="photo-o" text={t.text} />
          <Grid.Item icon="photo-o" text={t.text} />
        </Grid>
      </DemoBlock>
      <DemoBlock title={t.demoTitleBadge}>
        <Grid columnNum={2}>
          <Grid.Item icon="home-o" text={t.text} badge={{ dot: true }} />
          <Grid.Item icon="search" text={t.text} badge={{ content: '99+' }} />
        </Grid>
      </DemoBlock>
    </DemoSection>
  );
};
