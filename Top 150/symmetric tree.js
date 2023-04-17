var isSymmetric = function (root) {
  if (root.left === null && root.right === null) {
    return true;
  }
  let leftRoot = root.left;
  let rightRoot = root.right;
  if (leftRoot.val !== rightRoot.val) return false;
  let leftQueue = [];
  let rightQueue = [];

  while (leftQueue.length > 0 && rightQueue.length > 0) {
    leftQueue.unshift(leftRoot.left, leftRoot.right);
    rightQueue.unshift(rightRoot.right, rightRoot.left);
    leftRoot=leftQueue.pop();
    rightRoot=rightQueue.pop();

    if (!helper(leftRoot, rightRoot)) {
      return false;
    }
  }

  return true;

  function helper(leftNode, rightNode) {
    if (
      leftNode.left.val === rightNode.right.val &&
      leftNode.right.val === rightNode.left.val
    ) {
      return true;
    } else {
      return false;
    }
  }
};
