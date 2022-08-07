import { Entity } from "../../application/domain/entity";

type GradeProps = {
    id?: string
    student: string
    courseName: string
    grade?: number
    approved: string
    createdAt?: Date
}


export class GradeEntities extends Entity<GradeProps> {
    private constructor(props: GradeProps, id?: string) {
        super(props, id)
    }

    static create(props: GradeProps, id?: string) {
        const grade = new GradeEntities(props, id)
        if (!grade.props.id)
        grade.props.id = grade._id
        return grade;
    }
}