import { Request, Response } from "express";
import { GradeRepo } from "../../infra/database/gradeRepo";
import SendGradeService from "../services/grade/sendGradeService";
import StudentService from "../services/student/StudentService";


class GradeController {
    public async SaveGrade(req: Request, res: Response): Promise<{}> {
        try {
            const saveGrade = new SendGradeService(new GradeRepo())

            res.json(await saveGrade.execute(req.body))

            return res
        } catch (err) {
            res.statusCode = 404
            return res.json({ Error: err })
        }
    }
    public async GetAllStudentApprove(req: Request, res: Response): Promise<{}> {
        try {
            const studentService = new StudentService(new GradeRepo(), null)
            res.json(await studentService.getAllStudentApprove())

            return res
        } catch (err) {
            res.statusCode = 404
            return res.json({ Error: err })
        }
    }
}

export default GradeController