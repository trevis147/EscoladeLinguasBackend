import { DataTypes, Model } from 'sequelize';
import IGradeAttributes, { IGradeInput } from '../../repository/attributes/iGradeAttributes';
import sequelizeConnection from "../connectDB/mysql";

class GradeDB extends Model<IGradeAttributes, IGradeInput> implements IGradeAttributes {
    public id!: string
    public student!: string
    public courseName!: string
    public grade!: number

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

GradeDB.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    student: {
        type: DataTypes.STRING
    },
    courseName: {
        type: DataTypes.STRING
    },
    grade: {
        type: DataTypes.DECIMAL
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
})

export default GradeDB