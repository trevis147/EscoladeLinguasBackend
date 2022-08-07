import { GradeEntities } from "../../../domain/entities/gradeEntities";
import { StudentEntities } from "../../../domain/entities/studentEntities";
import { IGradeStudent } from "../../../repository/interface/iGradeStudent";
import { IStudent } from "../../../repository/interface/iStudent";

export default class StudentService {
    private gradeStudentRepo: IGradeStudent
    private studentRepo: IStudent

    constructor(gradeStudentRepo: IGradeStudent, studentRepo: IStudent) {
        this.gradeStudentRepo = gradeStudentRepo
        this.studentRepo = studentRepo
    }

    public async newStudent(param:StudentEntities): Promise<boolean> {
        try {
            const students = await this.studentRepo.create(param)

            return students
        } catch (err) {
            throw err
        }
    }

    public async getAllStudents(): Promise<StudentEntities[] | undefined> {
        try {
            const students: StudentEntities[] = await this.studentRepo.findAll()

            return students
        } catch (err) {
            throw err
        }
    }

    public async getAllStudentApprove(): Promise<GradeEntities[] | undefined> {
        try {
            const students: GradeEntities[] = await this.gradeStudentRepo.findAllGrades()

            const ret = await this.calcApprove(students)

            return ret
        } catch (err) {
            throw err
        }
    }
    private async calcApprove(students: GradeEntities[]) {
        try {
            let ret = []

            students.forEach(async student => {
                const approved: string = await this.isApproved(student.props.grade)

                ret.push(GradeEntities.create({
                    courseName: student.props.courseName,
                    grade: student.props.grade,
                    student: student.props.student,
                    approved
                }))
            });


            return ret
        } catch (err) {
            throw err
        }
    }
    private async isApproved(grade: number): Promise<string> {
        try {
            if (grade >= 7.5) {
                return "Aprovado"
            }
            else if (grade < 6) {
                return "Reprovado"
            }
            else {
                return "Conselho"
            }

        } catch (err) {
            throw err
        }
    }
}


