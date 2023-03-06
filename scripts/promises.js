const students = [
  { id: 1, name: "Blake" },
  { id: 2, name: "James" },
  { id: 3, name: "Susanne" },
  { id: 4, name: "John" },
];

const subjects = [
  { studentId: 1, subjects: ["Biology", "Physics", "Chemistry"] },
  { studentId: 2, subjects: ["Commerce", "Book-keeping"] },
  { studentId: 3, subjects: ["CCP", "CRK", "Literature"] },
  { studentId: 4, subjects: ["CCP", "CRK", "Literature"] },
];

const getData = async () => {
  try {
    const student = await findStudent("John");

    if (student) {
      const subjects = await getStudentDetails(student.id);

      if (subjects) {
        const studentDetails = await displayStudentDetails(subjects);
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

function findStudent(name) {
  return new Promise((resolve, reject) => {
    let student = students.find((student) => student.name === name);

    if (student) {
      resolve(student);
    } else {
      reject(`There is no student named "${name}"`);
    }
  });
}

function getStudentDetails(id) {
  return new Promise((resolve, reject) => {
    let studentDetails = subjects.find((course) => course.studentId === id);

    if (studentDetails) {
      resolve(studentDetails);
    } else {
      reject("The student has no course registered in the database");
    }
  });
}

function displayStudentDetails(data) {
  return new Promise((resolve, reject) => {
    const studentName = students.find(
      (object) => object.id === data.studentId
    ).name;
    const studentSubjects = data.subjects;

    let studentCourse;
    if (studentSubjects.includes("Biology")) {
      studentCourse = "Science";
    } else if (studentSubjects.includes("Commerce")) {
      studentCourse = "Commerce";
    } else if (studentSubjects.includes("CCP")) {
      studentCourse = "Art";
    }

    let studentDetails = {
      studentName,
      studentCourse,
    };

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
