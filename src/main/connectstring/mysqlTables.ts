import GradeDB from "../../infra/models/gradedb"

class MysqlTables {
    
    static async AsyncTables():Promise<void> {
        GradeDB.sync()
    }
}
export default MysqlTables