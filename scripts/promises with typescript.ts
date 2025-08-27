// Initialising interfaces because why not
interface User{
  id: number;
  name: string;
}

interface Subject{
  studentId: number;
  subjects: string[];
}

// Declaring variables with the interface types I created
const students: User[] = [
  { id: 1, name: "Blake" },
  { id: 2, name: "James" },
  { id: 3, name: "Susanne" },
  { id: 4, name: "John" },
];

const subjects: Subject[] = [
  { studentId: 1, subjects: ["Biology", "Physics", "Chemistry"] },
  { studentId: 2, subjects: ["Commerce", "Book-keeping"] },
  { studentId: 3, subjects: ["CCP", "CRK", "Literature"] },
  { studentId: 4, subjects: ["CCP", "CRK", "Literature"] },
];

// 
const getData = async () => {
  try {
    const student = await findStudent("John");

    if (student) {
      const subjects = await getStudentDetails(student.id) as Course;

      if (subjects) {
        const studentDetails = await displayStudentDetails(subjects) as StudentDetails;
        console.log(
          `The student's name is: ${studentDetails.studentName} \n Their course is : ${studentDetails.studentCourse}`
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
};

getData();

function findStudent(name: string): Promise<User>{
  return new Promise((resolve, reject)=> {
    let student = students.find((student) => student.name === name);

    if (student) {
      resolve(student);
    } else {
      reject(`There is no student named "${name}"`);
    }
  });
}

function getStudentDetails(id: number) {
  return new Promise((resolve, reject) => {
    let studentDetails = subjects.find((course) => course.studentId === id);

    if (studentDetails) {
      resolve(studentDetails);
    } else {
      reject("The student has no course registered in the database");
    }
  });
}

interface Course{
  studentId: number;
  subjects: string[];
}

interface StudentDetails{
  studentName: string;
  studentCourse: string;
}

function displayStudentDetails(data: Course) {
  return new Promise((resolve, reject) => {
    const studentName = students.find(
      (object) => object.id === data.studentId
    )!.name;
    const studentSubjects = data.subjects;

    let studentCourse: string = ""

    const studentDetails: StudentDetails = {
      studentName,
      studentCourse,
    }

    if (studentSubjects.includes("Biology")) {
      studentDetails.studentCourse = "Science";
    } else if (studentSubjects.includes("Commerce")) {
      studentDetails.studentCourse = "Commerce";
    } else if (studentSubjects.includes("CCP")) {
      studentDetails.studentCourse = "Art";
    }

    

    if (studentDetails) {
      resolve(studentDetails);
    } else {
      reject("The student has no course registered in the database");
    }
  });
}

// findStudent("James")
//   .then((object) =>
//     getStudentDetails(object.id)
//       .then((object) =>
//         displayStudentDetails(object)
//           .then((object) =>
//             console.log(
//               `The student's name is: ${object.studentName} \n Their course is : ${object.studentCourse}`
//             )
//           )
//           .catch((err) => console.log(err))
//       )
//       .catch((err) => console.log(err))
//   )
//   .catch((error) => console.log(error));
