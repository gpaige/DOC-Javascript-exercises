var student1 = {
  class: "DoC",
  city: "Arlington",
  name: "Carlos",
  gender: "male",
  age: 40,
  statesWorked: ["DC", "VA", "CT"]
}

var student2 = { class: 'DoC',
  city: 'Washington',
  name: 'Jane',
  age: 27,
  statesWorked: [ 'DC', 'OR', 'CA' ],
  gender: 'female' }

function studentInfo(student) {
  console.log(student.name + " is " + student.age + " and lives in " + student.city);
}

// build an array with both students
// then iterate / loop over the array
// for each student, call the studentInfo method for that student

var students = []

students.push(student1);
students.push(student2);

for (i = 0; i < students.length; i++) {
  studentInfo(students[i])
}
