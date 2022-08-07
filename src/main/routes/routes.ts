import { Router } from 'express'
import GradeController from '../../application/controllers/gradeController'
import StudentController from '../../application/controllers/studentController'

//usuarios


const routes = Router()

const grade = new GradeController()
const student = new StudentController()

//Salva as notas
routes.post('/SaveGrade', grade.SaveGrade)

//obtem todos os estudantes com as notas e aprovações 
routes.get('/GetAllStudentApprove', grade.GetAllStudentApprove)

//Obtem todos os estudantes cadastrado
routes.get('/GetAllStudents', student.GetAllStudents)


export default routes