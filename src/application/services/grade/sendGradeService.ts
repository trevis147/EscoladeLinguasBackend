import { GradeEntities } from "../../../domain/entities/gradeEntities"
import { IGradeStudent } from "../../../repository/interface/iGradeStudent"


export default class SendGradeService {

    private gradeStudentRepo: IGradeStudent

    constructor(gradeStudentRepo: IGradeStudent) {
        this.gradeStudentRepo = gradeStudentRepo
    }

    public async execute(params: GradeProps[]): Promise<boolean | undefined> {
        try {
            const isValidCourse: boolean = await this.validateCourse(params)

            if (!isValidCourse) return false

            const gradeEntities: GradeEntities[] = params.map((x) =>
                GradeEntities.create(x)
            )

            return await this.insertGrades(gradeEntities)

        } catch (err) {
            throw err
        }
    }
    private async validateCourse(params: GradeProps[]): Promise<boolean> {
        try {
            let german = params.filter((x) => x.courseName === "German")[0]
            let english = params.filter((x) => x.courseName === "English")[0]
            let spanish = params.filter((x) => x.courseName === "Spanish")[0]

            if (german.grade && (english.grade || spanish.grade)) return false

            return true

        } catch (err) {
            throw err
        }
    }
    private async insertGrades(params: GradeEntities[]): Promise<boolean> {
        try {

            const ret = await this.gradeStudentRepo.createList(params)

            return true

        } catch (err) {
            throw err
        }

    }
}

type GradeProps = {
    id?: string
    student: string
    courseName: string
    grade?: number
    approved: string
    createdAt?: Date
}

