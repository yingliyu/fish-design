/*
 * @Author: ylyu
 * @Date: 2021-12-23 14:11:32
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-28 10:15:41
 * @Description: Configure Storybook’s UI
 */

import { addons } from '@storybook/addons';
// import customTheme from './CustomTheme';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  enableShortcuts: true,
  isToolshown: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
  // theme: customTheme,
});
