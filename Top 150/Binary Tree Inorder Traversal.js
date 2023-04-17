var inorderTraversal = function (root) {
  let arr = [];
  let stack = [];
  let currNode = root;

  while (currNode !== null || stack.length > 0) {
    while (currNode !== null) {
      stack.push(currNode);
      currNode = currNode.left;
    }
    currNode = stack.pop();
    arr.push(currNode.val);
    currNode = currNode.right;
  }
  return arr;
};
