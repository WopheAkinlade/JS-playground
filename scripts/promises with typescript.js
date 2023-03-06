var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var students = [
    { id: 1, name: "Blake" },
    { id: 2, name: "James" },
    { id: 3, name: "Susanne" },
    { id: 4, name: "John" },
];
var subjects = [
    { studentId: 1, subjects: ["Biology", "Physics", "Chemistry"] },
    { studentId: 2, subjects: ["Commerce", "Book-keeping"] },
    { studentId: 3, subjects: ["CCP", "CRK", "Literature"] },
    { studentId: 4, subjects: ["CCP", "CRK", "Literature"] },
];
var getData = function () { return __awaiter(_this, void 0, void 0, function () {
    var student, subjects_1, studentDetails, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, findStudent("John")];
            case 1:
                student = _a.sent();
                if (!student) return [3 /*break*/, 4];
                return [4 /*yield*/, getStudentDetails(student.id)];
            case 2:
                subjects_1 = _a.sent();
                if (!subjects_1) return [3 /*break*/, 4];
                return [4 /*yield*/, displayStudentDetails(subjects_1)];
            case 3:
                studentDetails = _a.sent();
                console.log("The student's name is: ".concat(studentDetails.studentName, " \n Their course is : ").concat(studentDetails.studentCourse));
                _a.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
getData();
function findStudent(name) {
    return new Promise(function (resolve, reject) {
        var student = students.find(function (student) { return student.name === name; });
        if (student) {
            resolve(student);
        }
        else {
            reject("There is no student named \"".concat(name, "\""));
        }
    });
}
function getStudentDetails(id) {
    return new Promise(function (resolve, reject) {
        var studentDetails = subjects.find(function (course) { return course.studentId === id; });
        if (studentDetails) {
            resolve(studentDetails);
        }
        else {
            reject("The student has no course registered in the database");
        }
    });
}
function displayStudentDetails(data) {
    return new Promise(function (resolve, reject) {
        var studentName = students.find(function (object) { return object.id === data.studentId; }).name;
        var studentSubjects = data.subjects;
        var studentCourse;
        if (studentSubjects.includes("Biology")) {
            studentCourse = "Science";
        }
        else if (studentSubjects.includes("Commerce")) {
            studentCourse = "Commerce";
        }
        else if (studentSubjects.includes("CCP")) {
            studentCourse = "Art";
        }
        var studentDetails = {
            studentName: studentName,
            studentCourse: studentCourse
        };
        if (studentDetails) {
            resolve(studentDetails);
        }
        else {
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
