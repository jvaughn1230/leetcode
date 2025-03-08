/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
    if (!head || !head.next || k === 0) return head;


  let length = 1;
  let current = head;
  while (current.next) {
    current = current.next;
    length++;
  }


  k = k % length;
  if (k === 0) return head; 


  let newTail = head;
  for (let i = 1; i < length - k; i++) {
    newTail = newTail.next;
  }

 
  let newHead = newTail.next;
  newTail.next = null;
  current.next = head; 

  return newHead;

};