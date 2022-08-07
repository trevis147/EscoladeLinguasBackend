
import { Optional } from 'sequelize'

export default interface IGradeAttributes {
    id: string
    student: string
    courseName: string
    grade: number

    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}
export interface IGradeInput extends Optional<IGradeAttributes, 'id'> { }
export interface IGradeOuput extends Required<IGradeAttributes> { }