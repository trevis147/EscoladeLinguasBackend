import { Transaction } from "sequelize/dist";
import { GradeEntities } from "../../domain/entities/gradeEntities"
import { IGradeStudent } from "../../repository/interface/iGradeStudent"
import sequelizeConnection from "../connectDB/mysql";
import GradeDB from "../models/gradedb"
import StudentDB from "../models/studentdb";


export class GradeRepo implements IGradeStudent {


    public async createList(props: GradeEntities[]): Promise<boolean> {
        try {

            this.removeGradesByStudent(props[0])

            for (var i = 0; props.length > i; i++) {
                const { id, courseName, grade, student } = props[i].props

                if (grade) {
                    await GradeDB.create({
                        id,
                        student,
                        courseName,
                        grade
                    });
                }
            }

            return true
        } catch (err) {
            console.log(err)
            return false
        }
    }

    public async removeGradesByStudent(props: GradeEntities): Promise<boolean> {
        try {
            const { student } = props.props

            await GradeDB.destroy({
                where: { student }
            });

            return true
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    public async findAllGrades(): Promise<GradeEntities[]> {
        try {
            const grades = await GradeDB.findAll()

            const ret: GradeEntities[] = []

            for (const item of grades) {
                ret.push(GradeEntities.create({
                    student: await this.findByPk(item.student),
                    courseName: item.courseName,
                    grade: item.grade,
                    approved: ""
                }))
            }

            return ret
        } catch (err) {
            console.log(err)
            throw err
        }
    }

    // public async findAll(): Promise<StudentEntities[]> {
    //     try {
    //         const ret = await StudentDB.findAll()

    //         const students: StudentEntities[] = []

    //         ret.forEach(async (s, k) => {
    //             students.push(StudentEntities.create({
    //                 id: s.id,
    //                 student: (await this.findByPk(s.student))
    //             })
    //             )
    //         })


    //         return students
    //     } catch (err) {
    //         console.log(err)
    //         throw err
    //     }
    // }
    public async findByPk(id: string): Promise<string> {
        try {
            const ret = await StudentDB.findByPk(id, {
                attributes: ['student']
            })
            return ret.student
        } catch (err) {
            console.log(err)
            throw err
        }
    }

}