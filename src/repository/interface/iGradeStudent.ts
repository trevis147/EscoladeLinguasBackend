import { GradeEntities } from "../../domain/entities/gradeEntities";

export interface IGradeStudent {
    createList(props: GradeEntities[]): Promise<boolean>
    removeGradesByStudent(props: GradeEntities): Promise<boolean>
    findAllGrades(): Promise<GradeEntities[]>
}