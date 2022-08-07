import { Entity } from "../../application/domain/entity";

type studentProps = {
    id?: string
    student: string
}


export class StudentEntities extends Entity<studentProps> {
    private constructor(props: studentProps, id?: string) {
        super(props, id)
    }

    static create(props: studentProps, id?: string) {
        const grade = new StudentEntities(props, id)
        if (!grade.props.id)
        grade.props.id = grade._id
        return grade;
    }
}