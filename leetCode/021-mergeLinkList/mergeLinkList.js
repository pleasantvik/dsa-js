/**
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}s
 */
let mergeTwoLists = function (list1, list2) {
  let newList = new ListNode();
  let current = newList;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      newList.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      newList.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    newList = newList.next;
  }

  while (list1) {
    newList.next = new ListNode(list1.val);
    list1 = list1.next;
    newList = newList.next;
  }

  while (list2) {
    newList.next = new ListNode(list2.val);
    list2 = list2.next;
    newList = newList.next;
  }

  return current.next;
};
