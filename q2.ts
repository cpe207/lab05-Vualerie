// define interface for Student object
/* Your code here */
interface Student {
  name: string;
  score: number;
}

// assign interface/type to the function definition properly
function findTopNames(students) {
  /* Your code here */
  return students.filter(x=>x.score > 8).map(x=>x.name);
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//660610802 นายสิรวิชญ์ สีทอง