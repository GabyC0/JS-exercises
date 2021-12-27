// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

// let int = 1;
// while (int <= 5) {
//   console.log(int);
//   int++;
// }

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
// let i = 0;
// do {
//   i ++;
//   console.log(i);
// } while (i < 5);


// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

// for (let num = 1; num <=5; num++) {
//   console.log(num);
// }

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while loop
// let int = 10;
// while (int > 0) {
//   console.log(int);
//   int--;
// }


//do while loop
// let int = 10;
// do {
//   console.log(int);
//   int--;
// } while (int > 0);

//for loop
// for (let int = 10; int > 0; int--) {
//   console.log(int);
// }

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
//while

// let int = 7;
// while (int <= 27) {
//   console.log(int);
//   int++;
// }

//do while

// let int = 7;
// do {
//   console.log(int);
//   int++;
// } while (int <= 27);


//for
// for (let int = 7; int <= 27; int++) {
//   console.log(int);
// }

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//while

// let countByTen = 10;
// while (countByTen <= 100) {
//   console.log(countByTen);
//   countByTen += 10;
// }

//do while

// let countByTen = 10;
// do {
//   console.log(countByTen);
//   countByTen += 10;
// } while (countByTen <= 100);

//for

// for(let num = 10; num <= 100; num += 10) {
//   console.log(num);
// }





// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// let counterFour = 1;
// while (counterFour < 2) {
//   console.log("HELP ME!");
//   counterFour--;
// }

// let counterFour = 1;
// while (counterFour >= -100) {
//   console.log(counterFour);
//   counterFour--;
// }
//Response
//The original loop is an infinite loop because counterFour is decrementing as long as it meets the condition of counterFour being less than 2. It will always be less than 2 as long as it's decrementing from 1.

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

// let myFavNum = 7;
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= myFavNum);

// for (let i = 0; i <= myFavNum; i++) {
//   console.log(i);
// }

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

// let myFavNum = 50;

// for (let randoNum = 0; randoNum <= 100; randoNum++) {
//   if(randoNum === myFavNum) {
//     console.log(myFavNum + " my favorite number!")
//   } else {
//     console.log(randoNum + " not my favorite number")
//   }
// }

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//
//I would use a while loop when I need the code to run an unspecified number of times.
//I would use a do while loop when I need the code block to run at least once.
//I would use a for loop when I need the code block to execute a specific number of times while a condition it true.


// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0 ; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//I found it equally easy and hard. I initially had a challenging time with the do while loops but as the assignment progressed I got more practice and the loops became less challenging. I also realized I need more practice with nested loops.
//The resources I used were the MDN for do while loops and a flowchart visual for nested loops.

// Email your file to us or commit your file to GitHub and email us a link.