require("dotenv").config();
require("../Database/database");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const auth = require("./auth");
const Channel = require("./channel");
const Videos = require("./videos");
const Likes = require("./likes");
const Comments = require("./comments");
const Studio = require("./studio");

// Middlewares
router.use(
  cors({
    origin: ["https://shubho-youtube-mern.netlify.app"],
    // origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true,
  })
);
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(auth);
router.use(Channel);
router.use(Videos);
router.use(Likes);
router.use(Comments);
router.use(Studio);

module.exports = router;




// class Node {
//   int data;
//   Node next;

//   Node(int data) {
//       this.data = data;
//       this.next = null;
//   }
// }

// public class LinkedListCycle {
//   public static boolean detectAndRemoveCycle(Node head) {
//       if (head == null || head.next == null) {
//           return false; // No cycle if the list is empty or has only one node
//       }

//       Node slow = head;
//       Node fast = head;

//       // Detect cycle using Floyd's Cycle Detection Algorithm
//       while (fast != null && fast.next != null) {
//           slow = slow.next;          // Move slow pointer by 1 step
//           fast = fast.next.next;     // Move fast pointer by 2 steps

//           if (slow == fast) {        // Cycle detected
//               removeCycle(head, slow);
//               return true;
//           }
//       }

//       return false; // No cycle detected
//   }

//   private static void removeCycle(Node head, Node meetingPoint) {
//       Node ptr1 = head;
//       Node ptr2 = meetingPoint;

//       while (ptr1.next != ptr2.next) {
//           ptr1 = ptr1.next;
//           ptr2 = ptr2.next;
//       }
//       ptr2.next = null;
//   }

//   public static void printList(Node head) {
//       Node current = head;
//       while (current != null) {
//           System.out.print(current.data + " -> ");
//           current = current.next;
//       }
//       System.out.println("null");
//   }

//   public static void main(String[] args) {
//       // Create a linked list with a cycle for testing
//       Node head = new Node(1);
//       head.next = new Node(2);
//       head.next.next = new Node(3);
//       head.next.next.next = new Node(4);
//       head.next.next.next.next = new Node(5);

//       // Create a cycle (5 -> 3)
//       head.next.next.next.next.next = head.next.next;

//       if (detectAndRemoveCycle(head)) {
//           System.out.println("Cycle detected and removed.");
//       } else {
//           System.out.println("No cycle detected.");
//       }

//       // Print the list after removing the cycle
//       printList(head);
//   }
// }