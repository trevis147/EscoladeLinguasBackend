import { GradeEntities } from "../../domain/entities/gradeEntities"
import { StudentEntities } from "../../domain/entities/studentEntities"
import { IStudent } from "../../repository/interface/iStudent"
import GradeDB from "../models/gradedb"
import StudentDB from "../models/studentdb"


export class StudentRepo implements IStudent {
    public async create(props: GradeEntities): Promise<boolean> {
        try {
            const { id, courseName, grade, student } = props.props

            await GradeDB.create({
                id,
                student,
                courseName,
                grade
            })

            return true
        } catch (err) {
            console.log(err)
            throw err
        }
    }
    public async findAll(): Promise<StudentEntities[]> {
        try {
            const ret = await StudentDB.findAll()
            return ret.map((s) => StudentEntities.create({
                student:s.student,
                id:s.id
            }))
        } catch (err) {
            console.log(err)
            throw err
        }
    }

}