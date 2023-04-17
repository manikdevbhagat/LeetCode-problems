function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let l3 = dummy;
  let sum = 0;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    sum = (l1 === null ? 0 : l1.val) + (l2 === null ? 0 : l2.val) + carry;
    if (sum >= 10) {
      l3.val = sum - 10;
      carry = 1;
    } else {
      l3.val = sum;
      carry = 0;
    }

    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
    if (l1 !== null || l2 !== null || carry === 1) {
      l3.next = new ListNode();
      l3 = l3.next;
      l3.val = carry;
    }
  }

  return dummy;
};

let l1 = new ListNode();
let dummy1 = l1;
dummy1.val = 9;
dummy1.next = new ListNode();
dummy1 = dummy1.next;
dummy1.val = 9;
dummy1.next = new ListNode();
dummy1 = dummy1.next;
dummy1.val = 9;

let l2 = new ListNode();
let dummy2 = l2;
dummy2.val = 9;
dummy2.next = new ListNode();
dummy2 = dummy2.next;
dummy2.val = 9;
// dummy2.next = new ListNode();
// dummy2 = dummy2.next;
// dummy2.val = 4;

// console.log(l1.nex);

console.log(addTwoNumbers(l1, l2));
