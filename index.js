// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logstate: function() {
      console.log(`${this.title} has ${this.complete ? " " : "not"}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// // prints out the provided task's details
// function logTaskState(task) {
//   console.log(`${task.title} has ${task.complete ? " " : "not"}been completed`);
// }

// // marks the provided task as completed
// function competeTask(task) {
//   task.complete = true;
// }


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry","😨");
const tasks = [ task1, task2 ];


task1.logstate();
task1.markCompleted();
task1.logstate();

// logTaskState(task1);
// competeTask(task1);
// logTaskState(task1);

console.log(tasks);


// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskDescription(description);
//   taskComplete.push(false);
// }



// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

