/* eslint-disable no-console */
import React, { useReducer } from 'react';
import { components } from 'site-mobile-demo';
import { Cell } from '../..';
import Popup from '..';
import { usePopupDemoI18n } from './locale';
import './style.less';

const initialState = {
  showBasic: false,
  showTop: false,
  showBottom: false,
  showLeft: false,
  showRight: false,
  showCloseIcon: false,
  showCustomCloseIcon: false,
  showTitle: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'showBasic':
      return { ...state, showBasic: !state.showBasic };
    case 'showTop':
      return { ...state, showTop: !state.showTop };
    case 'showBottom':
      return { ...state, showBottom: !state.showBottom };
    case 'showLeft':
      return { ...state, showLeft: !state.showLeft };
    case 'showRight':
      return { ...state, showRight: !state.showRight };
    case 'showCloseIcon':
      return { ...state, showCloseIcon: !state.showCloseIcon };
    case 'showCustomCloseIcon':
      return { ...state, showCustomCloseIcon: !state.showCustomCloseIcon };
    case 'showCustomIconPosition':
      return { ...state, showCustomIconPosition: !state.showCustomIconPosition };
    case 'showRoundCorner':
      return { ...state, showRoundCorner: !state.showRoundCorner };
    case 'showTitle':
      return { ...state, showTitle: !state.showTitle };
    default:
      throw new Error();
  }
}

export default (): React.ReactNode => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { DemoBlock, DemoSection } = components;
  const t = usePopupDemoI18n();

  return (
    <DemoSection>
      <DemoBlock card title={t.demoTitleBasic}>
        <Cell
          title={t.cellShowBasic}
          isLink
          onClick={() =>
            dispatch({
              type: 'showBasic',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitlePosition}>
        <Cell
          title={t.cellTop}
          isLink
          onClick={() =>
            dispatch({
              type: 'showTop',
            })
          }
        />
        <Cell
          title={t.cellBottom}
          isLink
          onClick={() =>
            dispatch({
              type: 'showBottom',
            })
          }
        />
        <Cell
          title={t.cellLeft}
          isLink
          onClick={() =>
            dispatch({
              type: 'showLeft',
            })
          }
        />
        <Cell
          title={t.cellRight}
          isLink
          onClick={() =>
            dispatch({
              type: 'showRight',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleCloseIcon}>
        <Cell
          title={t.cellCloseIcon}
          isLink
          onClick={() =>
            dispatch({
              type: 'showCloseIcon',
            })
          }
        />
        <Cell
          title={t.cellCustomCloseIcon}
          isLink
          onClick={() =>
            dispatch({
              type: 'showCustomCloseIcon',
            })
          }
        />
        <Cell
          title={t.cellIconPosition}
          isLink
          onClick={() =>
            dispatch({
              type: 'showCustomIconPosition',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleRoundCorner}>
        <Cell
          title={t.cellRoundCorner}
          isLink
          onClick={() =>
            dispatch({
              type: 'showRoundCorner',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title={t.demoTitleWithTitle}>
        <Cell
          title={t.cellTitleDialog}
          isLink
          onClick={() =>
            dispatch({
              type: 'showTitle',
            })
          }
        />
      </DemoBlock>

      <Popup
        visible={state.showBasic}
        onClose={() => {
          dispatch({
            type: 'showBasic',
          });
          console.log('close');
        }}
        onClickOverlay={() => console.log('click overlay')}
        onClick={() => console.log('click')}
        onClosed={() => console.log('closed')}
        onOpen={() => console.log('open')}
        onOpened={() => console.log('opened')}
      >
        <div style={{ padding: '30px 50px' }}>{t.popupContent}</div>
      </Popup>
      <Popup
        visible={state.showTop}
        style={{ height: '30%' }}
        position="top"
        onClose={() =>
          dispatch({
            type: 'showTop',
          })
        }
      />

      <Popup
        visible={state.showBottom}
        style={{ height: '30%' }}
        position="bottom"
        duration={300}
        onClose={() =>
          dispatch({
            type: 'showBottom',
          })
        }
      />
      <Popup
        visible={state.showLeft}
        style={{ width: '30%', height: '100%' }}
        position="left"
        onClose={() =>
          dispatch({
            type: 'showLeft',
          })
        }
      />
      <Popup
        visible={state.showRight}
        style={{ width: '30%', height: '100%' }}
        position="right"
        onClose={() =>
          dispatch({
            type: 'showRight',
          })
        }
      />
      <Popup
        visible={state.showCloseIcon}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        onClose={() =>
          dispatch({
            type: 'showCloseIcon',
          })
        }
      />
      <Popup
        visible={state.showCustomCloseIcon}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIcon="close"
        onClose={() =>
          dispatch({
            type: 'showCustomCloseIcon',
          })
        }
      />
      <Popup
        visible={state.showCustomIconPosition}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIcon="close"
        closeIconPosition="top-left"
        onClose={() =>
          dispatch({
            type: 'showCustomIconPosition',
          })
        }
      />
      <Popup
        visible={state.showRoundCorner}
        closeable
        style={{ height: '30%' }}
        position="bottom"
        closeIcon="close"
        round
        onClose={() =>
          dispatch({
            type: 'showRoundCorner',
          })
        }
      />
      <Popup
        visible={state.showTitle}
        closeable
        title={t.popupTitle}
        description={t.popupDescription}
        style={{ height: '30%' }}
        position="bottom"
        round
        onClose={() =>
          dispatch({
            type: 'showTitle',
          })
        }
      />
    </DemoSection>
  );
};
