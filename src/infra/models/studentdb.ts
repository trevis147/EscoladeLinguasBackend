import { DataTypes, Model } from 'sequelize';
import IStudentAttributes, { IStudentInput } from '../../repository/attributes/iStudentAttributes';
import sequelizeConnection from "../connectDB/mysql";

class StudentDB extends Model<IStudentAttributes, IStudentInput> implements IStudentAttributes {
    public id!: string
    public student!: string

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

StudentDB.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    student: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default StudentDB