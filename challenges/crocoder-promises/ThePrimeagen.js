// // https://www.crocoder.dev/blog/promises-exercises/

// // ThePrimeagen's interview question
// // This exercise is a ThePrimeagen's interview question: Create an asynchronous request queue that manages the execution of tasks,
// //  ensuring that no more than three tasks run simultaneously.

// // Design a queue system that accepts promise factories (functions that return promises) and manages their execution.
// // The queue should execute these promise factories but must limit the number of concurrently running tasks to three.
// // When one task is completed, the next task in the queue should start.

// // Steps to implement
// // Implement a queue (can use an array for simplicity) to hold the promise factories.

// // Create a function to manage the execution of tasks. This function should handle the invocation
// // of promise factories and maintain the count of concurrently running tasks.

// // Ensure that no more than three tasks are running at any given time. When a task is completed,
// // the next task in the queue (if any) should start.

// // Create several promise factories that simulate async tasks with different durations.

// // Add these factories to the queue and test if the queue correctly limits the concurrency and processes tasks in the order they were added.

class AsyncQueue {
  constructor(taskConcurrency) {
    this.taskConcurrency = taskConcurrency;
    this.tasks = [];
    this.runningTasks = 0;
  }

  addTask(task) {
    this.tasks.push(task);
    this.runTask();
  }

  runTask() {
    if (this.runningTasks < this.taskConcurrency && this.tasks.length > 0) {
      const currentTask = this.tasks.shift();
      this.runningTasks++;
      currentTask().then((res) => {
        console.log(`task with Id ${res.id} completed`);
        this.runningTasks--;
        this.runTask();
      });
    }
  }
}

const createTask = (id, duration) => {
  return () => {
    return new Promise((resolve) => {
      console.log(`task with id ${id} started`);
      setTimeout(() => {
        resolve({ id });
      }, duration);
    });
  };
};

const queue = new AsyncQueue(4);

for (let i = 1; i <= 10; i++) {
  queue.addTask(createTask(i, i * 1000));
}

// *** ORIGINAL SOLUTION
// class AsyncQueue {
//     constructor(concurrencyLimit) {
//         this.tasks = [];
//         this.runningTasks = 0;
//         this.concurrencyLimit = concurrencyLimit;
//     }

//     // Function to add tasks to the queue
//     enqueue(task) {
//         this.tasks.push(task);
//         this.runNext();
//     }

//     // Function to execute the next task
//     runNext() {
//         if (this.runningTasks < this.concurrencyLimit && this.tasks.length) {
//             const task = this.tasks.shift();
//             this.runningTasks++;
//             task().then(() => {
//                 this.runningTasks--;
//                 this.runNext();
//             });
//         }
//     }
// }

// // Creating the queue with a concurrency limit of 3
// const queue = new AsyncQueue(3);

// // Promise factory function
// const createTask = (duration) => {
//     return () => new Promise(resolve => {
//         console.log(`Task started (Duration: ${duration}ms)`);
//         setTimeout(() => {
//             console.log(`Task completed (Duration: ${duration}ms)`);
//             resolve();
//         }, duration);
//     });
// };

// // Adding tasks to the queue
// for (let i = 1; i <= 10; i++) {
//     queue.enqueue(createTask(i * 1000));
// }
