import { StudentEntities } from "../../domain/entities/studentEntities";

export interface IStudent {
    create(props: StudentEntities): Promise<boolean>
    findAll(): Promise<StudentEntities[]>
}