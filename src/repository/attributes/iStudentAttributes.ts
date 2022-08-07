
import { Optional } from 'sequelize'

export default interface IStudentAttributes {
    id: string
    student: string

    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}
export interface IStudentInput extends Optional<IStudentAttributes, 'id'> { }
export interface IStudentOuput extends Required<IStudentAttributes> { }