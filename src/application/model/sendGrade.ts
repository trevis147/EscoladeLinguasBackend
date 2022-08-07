type sendGrade = {
    id?: string
    student: string
    course: [{
        id?: string
        courseName: string
        grade: number
        approved: string
    }],
    createdAt?: Date
}

export default sendGrade