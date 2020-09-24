import { assignNode, getParentNode } from './index';

import { treeData } from './data';

// getParentNode(data, data => data.key === id);

console.log(
  'getParentNode(data, data => data.key === id);: ',
  getParentNode(treeData, data => data.code === 112),
);

console.log(
  'getParentNode(data, data => data.key === id);: ',
  assignNode(treeData, 112),
);
