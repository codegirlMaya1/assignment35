// Sample array of objects
let students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 88 },
    { name: 'David', grade: 76 },
    { name: 'Eve', grade: 95 }
];


let studentNames = students.map(student => student.name);
console.log('Student Names:', studentNames);

let topStudents = students.filter(student => student.grade > 80);
console.log('Top Students:', topStudents);

let averageGrade = students.reduce((acc, student) => acc + student.grade, 0) / students.length;
console.log('Average Grade:', averageGrade);

// Using push to add a new student
students.push({ name: 'Frank', grade: 90 });
console.log('Students after push:', students);

let removedStudent = students.pop();
console.log('Removed Student:', removedStudent);
console.log('Students after pop:', students);

// STRING
function manipulateString(str, start, end) {

    const length = str.length;

    // Convert the string to uppercase
    const upperCaseStr = str.toUpperCase();

    // Extract the substring
    const substring = str.substring(start, end);

    return {
        length: length,
        upperCase: upperCaseStr,
        substring: substring
    };
}


const result = manipulateString("hello world", 0, 5);
console.log(result);
// Output: { length: 11, upperCase: "HELLO WORLD", substring: "hello" }