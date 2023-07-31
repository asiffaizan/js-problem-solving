let students = [
    { id: 23, name: 'Dibjol'},
    { id: 34, name: 'Omor Shani'},
    { id: 48, name: 'Moyuri'},
    { id: 77, name: 'Manna'}
];

let names = students.map(e=>e.name);
let ides = students.map(e=>e.id);

const goodStudents = students.filter(e=>e.id<40);
const goodStudent = students.find(e=>e.id<40);
console.log(names, "01", ides, "02", goodStudents, "03", goodStudent, "04");