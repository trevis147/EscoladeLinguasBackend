import { Request, Response } from "express";
import { StudentRepo } from "../../infra/database/studentRepo";
import StudentService from "../services/student/StudentService";


class StudentController {
    public async GetAllStudents(req: Request, res: Response): Promise<{}> {
        try {
            const getStudent = new StudentService(null, new StudentRepo())

            res.json(await getStudent.getAllStudents())

            return res
        } catch (err) {
            res.statusCode = 404
            return res.json({ Error: err })
        }
    }

    public async newStudent(req: Request, res: Response): Promise<{}> {
        try {
            const getStudent = new StudentService(null, new StudentRepo())

            res.json(await getStudent.newStudent(req.body))

            return res
        } catch (err) {
            res.statusCode = 404
            return res.json({ Error: err })
        }
    }

}

export default StudentController