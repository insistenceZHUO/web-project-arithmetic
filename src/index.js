/* 
    获取树形数据结构子节点上面的父节点，以及祖先节点
    @params array: {
        id,
    }
    @params value: 子id
*/

export function getParentNode(tree, func, path = []) {
  // debugger;
  if (!tree) return [];
  for (const data of tree) {
    // 这里按照你的需求来存放最后返回的内容吧
    path.push(data);
    if (func(data)) return path;
    if (data.children) {
      const findChildren = getParentNode(data.children, func, path);
      if (findChildren.length) return findChildren;
    }
    path.pop();
  }
  return [];
}

// 获取treeNode指定节点的数据
export function assignNode(list = [], target) {
  let q = [...list];
  let res;
  while (q.length) {
    let item = q.shift();
    if (item.code === target) {
      return item;
    }
    item.children && item.children.length && q.push(...item.children);
  }
  return res;
}

// 全排算法
export let combine = function(...chunks) {
  let res = [];

  let helper = function(chunkIndex, prev) {
    let chunk = chunks[chunkIndex];
    let isLast = chunkIndex === chunks.length - 1;
    for (let val of chunk) {
      let cur = prev.concat(val);
      if (isLast) {
        // 如果已经处理到数组的最后一项了 则把拼接的结果放入返回值中
        res.push(cur);
      } else {
        helper(chunkIndex + 1, cur);
      }
    }
  };

  // 从属性数组下标为 0 开始处理
  // 并且此时的 prev 是个空数组
  helper(0, []);

  return res;
};
