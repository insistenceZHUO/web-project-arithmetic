import { assignNode, combine, getParentNode } from './index';
import { colors, names, storages, treeData } from './data';

console.log(
  'getParentNode(data, data => data.key === id);: ',
  getParentNode(treeData, data => data.code === 112),
);

console.log(
  'getParentNode(data, data => data.key === id);: ',
  assignNode(treeData, 112),
);

console.log(
  'combine(names, colors, storages): ',
  combine(names, colors, storages),
);
