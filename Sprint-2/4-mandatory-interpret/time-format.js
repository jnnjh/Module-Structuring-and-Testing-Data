function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  console.log(remainingSeconds);
  const totalMinutes = (seconds - remainingSeconds) / 60;
  console.log(totalMinutes);
  const remainingMinutes = totalMinutes % 60;
  console.log(remainingMinutes);
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  console.log(totalHours);

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// ANSWER: 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// ANSWER: 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// ANSWER: 00;

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// ANSWER: 1 --> The last time pad is called is for the remainingSeconds which is 1. The remainder when you evaluate seconds % 60 is 1;

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// ANSWER: 01 --> num.toString().padStart(2, "0"); This is the return expression which means you make num to string which will become "1". You then add a padding of 0 to make sure there are at least 2 digits making it to "01"
