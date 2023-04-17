var removeNthFromEnd = function (head, n) {
  var curr = head;
  var length = 0;
  while (curr !== null) {
    length++;
    curr = curr.next;
  }
  curr = head;
  if (length === n) {
    return curr.next;
  } else {
    for (let i = 2; i <= length - n; i++) {
      curr = curr.next;
    }
    var prev = curr;
    curr = curr.next;
    var next = curr === null ? null : curr.next;
    prev.next = next;
    // curr.next = null;
  }
  return head;
};
