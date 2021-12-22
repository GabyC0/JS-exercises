//Write a program that takes in a number and assigns a grade



function calculateGrade(numGrade) {
    switch (true) {
        case numGrade >= 90 && numGrade <= 100:
            return 'A';
            break;
        case numGrade >= 80 && numGrade <= 89:
            return 'B';
            break;
        case numGrade >= 70 && numGrade <= 79:
            return 'C';
            break;
        case numGrade >= 60 && numGrade <= 69:
            return 'D';
            break;
        case numGrade < 60:
            return 'F';
            break;
    }
}
console.log(calculateGrade(95));
console.log(calculateGrade(45));
console.log(calculateGrade(85));
console.log(calculateGrade(75));
console.log(calculateGrade(65));

