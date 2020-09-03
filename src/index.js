/* 
    获取树形数据结构子节点上面的父节点，以及祖先节点
    @params array: {
        id,
    }
    @params value: 子id
*/

function getPath(array, value) {
  const arr = [];
  array &&
    array.forEach((items, i) => {
      if (items.id === value) {
        arr.push(items);
        // return false
      }
      if (typeof items.children !== 'undefined') {
        items.children.forEach((item, j) => {
          if (item.id === value) {
            arr.push(items, item);
            // return false
          }
          if (typeof item.children !== 'undefined') {
            item.children.forEach((val, k) => {
              if (val.id === value) {
                arr.push(items, item, val);
                // return false
              }
            });
          }
        });
      }
    });
  return arr;
}
