var zigzagLevelOrder = function (root) {
  if (root === null) {
    return [];
  }
  let arr = [];
  let subArr = [];
  let queue = [];
  let currNode = root;
  let count = 0;
  queue.push(currNode);

  while (queue.length > 0) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      currNode = queue.pop();
      if (currNode === undefined) {
        break;
      }
      if (currNode.left !== null) {
        queue.unshift(currNode.left);
      }
      if (currNode.right !== null) {
        queue.unshift(currNode.right);
      }
      if (count % 2 !== 0) {
        subArr.unshift(currNode.val);
      }else{
        subArr.push(currNode.val);
      }
      
    }
    
    arr.push(subArr);
    subArr = [];
    count++;
  }
  return arr;
};
