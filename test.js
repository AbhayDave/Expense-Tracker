import moment from "moment";

let now = moment();

// console.log(typeof now);

let nowStr = now.format()
// moment().format();
console.log(now);
// console.log(nowStr);
console.log(typeof nowStr);

;

let temp = [
  {
    id: 1,
    note: "Salary",
    amount: 2500,
    timestamp: "2024-03-25T08:00:00.000Z",
  },
  {
    id: 2,
    note: "Bonus",
    amount: 500,
    timestamp: "2024-03-25T12:30:00.000Z",
  },
  {
    id: 3,
    note: "Refund",
    amount: 100,
    timestamp: "2024-03-26T09:45:00.000Z",
  },
  {
    id: 4,
    note: "Gift",
    amount: 50,
    timestamp: "2024-03-26T15:20:00.000Z",
  },
  {
    id: 5,
    note: "Reimbursement",
    amount: 75,
    timestamp: "2024-03-27T11:10:00.000Z",
  },
  {
    id: 6,
    note: "Investment Return",
    amount: -300,
    timestamp: "2024-03-27T16:45:00.000Z",
  },
  {
    id: 7,
    note: "Cashback",
    amount: -20,
    timestamp: "2024-03-28T14:30:00.000Z",
  },
  {
    id: 8,
    note: "Dividends",
    amount: -150,
    timestamp: "2024-03-28T18:00:00.000Z",
  },
  {
    id: 9,
    note: "Sale Proceeds",
    amount: 200,
    timestamp: "2024-03-29T10:15:00.000Z",
  },
  {
    id: 10,
    note: "Cash Prize",
    amount: 50,
    timestamp: "2024-03-29T14:45:00.000Z",
  },
  {
    id: 11,
    note: "Gift Card Redemption",
    amount: 30,
    timestamp: "2024-03-30T09:30:00.000Z",
  },
  {
    id: 12,
    note: "Lottery Win",
    amount: 1000,
    timestamp: "2024-03-30T13:20:00.000Z",
  },
  {
    id: 13,
    note: "Selling Crafts",
    amount: 80,
    timestamp: "2024-03-31T11:00:00.000Z",
  },
  {
    id: 14,
    note: "Freelance Work",
    amount: 300,
    timestamp: "2024-03-31T15:30:00.000Z",
  },
  {
    id: 15,
    note: "Consulting Fee",
    amount: 400,
    timestamp: "2024-04-01T10:45:00.000Z",
  },
  {
    id: 16,
    note: "Selling Artwork",
    amount: 150,
    timestamp: "2024-04-01T16:15:00.000Z",
  },
  {
    id: 17,
    note: "Online Course Payment",
    amount: 75,
    timestamp: "2024-04-02T12:30:00.000Z",
  },
  {
    id: 18,
    note: "Tutoring Income",
    amount: 200,
    timestamp: "2024-04-02T17:00:00.000Z",
  },
  {
    id: 19,
    note: "Photography Gig",
    amount: 120,
    timestamp: "2024-04-03T09:15:00.000Z",
  },
  {
    id: 20,
    note: "Writing Commission",
    amount: -80,
    timestamp: "2024-04-03T14:45:00.000Z",
  },
  {
    id: 21,
    note: "Music Performance",
    amount: -250,
    timestamp: "2024-04-04T11:30:00.000Z",
  },
  {
    id: 22,
    note: "Craft Sale",
    amount: 100,
    timestamp: "2024-04-04T15:50:00.000Z",
  },
  {
    id: 23,
    note: "Event Planning Fee",
    amount: -300,
    timestamp: "2024-04-05T10:00:00.000Z",
  },
  {
    id: 24,
    note: "Graphic Design Project",
    amount: 150,
    timestamp: "2024-04-05T16:30:00.000Z",
  },
  {
    id: 25,
    note: "Social Media Campaign",
    amount: 50,
    timestamp: "2024-04-06T13:20:00.000Z",
  },
  {
    id: 26,
    note: "Product Review Payment",
    amount: -30,
    timestamp: "2024-04-06T18:45:00.000Z",
  },
  {
    id: 27,
    note: "Fitness Coaching Fee",
    amount: -100,
    timestamp: "2024-04-07T11:15:00.000Z",
  },
  {
    id: 28,
    note: "Web Development Project",
    amount: 400,
    timestamp: "2024-04-07T15:40:00.000Z",
  },
  {
    id: 29,
    note: "Translation Services",
    amount: -200,
    timestamp: "2024-04-08T09:30:00.000Z",
  },
  {
    id: 30,
    note: "Virtual Assistant Work",
    amount: -150,
    timestamp: "2024-04-08T14:20:00.000Z",
  },
];