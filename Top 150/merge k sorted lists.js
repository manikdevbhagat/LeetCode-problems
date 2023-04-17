function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeKLists = function (lists) {
  var mergedList = null;

  for (let i = 0; i < lists.length; i++) {
    mergedList = mergeTwoLists(mergedList, lists[i]);
  }
  return mergedList;

  function mergeTwoLists(list1, list2) {
    if (!list1 && !list2) {
      return null;
    } else if (!list1) {
      return list2;
    } else if (!list2) {
      return list1;
    }
    if (list1.val > list2.val) {
      return mergeTwoLists(list2, list1);
    }
    var merged = list1;
    var prev;
    while (list2 !== null) {
      let val2 = list2.val;
      while (merged.val <= val2) {
        prev = merged;
        merged = merged.next;
        if (merged === null) {
          break;
        }
      }
      merged = prev;
      var temp = merged.next;
      merged.next = new ListNode(val2, temp);
      merged = merged.next;
      list2 = list2.next;
    }
    return list1;
  }
};

var list1 = new ListNode(2);
// list1.next = new ListNode(2);
// list1.next.next = new ListNode(4);
var list2 = new ListNode(1);
// list2.next = new ListNode(3);
// list2.next.next = new ListNode(4);

console.log(mergeTwoLists(list1, list2));
