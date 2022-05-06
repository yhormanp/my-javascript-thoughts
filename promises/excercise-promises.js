/*
This is program that is calling synchronous functions to get some data and  
print a set of messages in the following  order.

1. A message indicating that is starting and calling getData
2. A message showing the data that was received from the getData Method
3. A message that will indicate that is being printed after 1 second after the response of getData was received
4. A message inidicating That's all, Thanks

 The problem is those messages are being shown in a different order and the data is not being shown in the respective message, 
 it appears like undefined.

 This is the current ouptut:
I am starting the main function and calling getData
This is the data received from getData undefined
That all, thanks
Hi I am message printed after 1 sec after the data has been received

As you can see the current output is not in the right order and the data to be shown is undefined

This is the expected output:
I am starting the main function and calling getData
This is the data received from getData [
  { id: 1, title: 'Iron Man', year: 2008 },
  { id: 2, title: 'Spiderman Homecoming', year: 2017 },
  { id: 3, title: 'Avengers End game', year: 2019 }
]
Hi I am message printed after 1 sec after the data has been received
That all, thanks


Try to update the code using Promises, async, await or then to show the messages and the data 
in the right order.

*/
const data = [
  { id: 1, title: "Iron Man", year: 2008 },
  { id: 2, title: "Spiderman Homecoming", year: 2017 },
  { id: 3, title: "Avengers End game", year: 2019 },
];

const getData = () => {
  setTimeout(() => {
    return data;
  }, 1500);
};

const printMesasge = () => {
  setTimeout(() => {
    console.log(
      "Hi I am message printed after 1 sec after the data has been received"
    );
  }, 1000);
};

function main() {
  console.log("I am starting the main function and calling getData");
  const dataReceived = getData();
  console.log("This is the data received from getData", dataReceived);
  printMesasge();
  console.log("That all, thanks");
}

main();

// const data = [
//   { id: 1, title: "Iron Man", year: 2008 },
//   { id: 2, title: "Spiderman Homecoming", year: 2017 },
//   { id: 3, title: "Avengers End game", year: 2019 },
// ];

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 1500);
//   });
// };

// const printMesasge = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//       console.log(
//         "Hi I am message printed after 1 sec after the data has been received"
//       );
//     }, 1000);
//   });
// };

// async function main() {
//   console.log("I am starting the main function and calling getData");
//   const dataReceived = await getData();
//   console.log("This is the data received from getData", dataReceived);
//   await printMesasge();
//   console.log("That all, thanks");
// }

// main();
