// This file might be used to export pre-processed navigation items, but you can adjust if needed.

import navigationConfig from './navigationConfig';

const navigationItems = navigationConfig.map(item => ({
  ...item,
  label: item.label,  // You can add transformations or other logic if needed
}));

export default navigationItems;

