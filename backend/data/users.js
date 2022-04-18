import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Adim User',
        email: 'admin@exampl.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Rahul',
        email: 'rahul@exampl.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jhony',
        email: 'jhony@exampl.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Deepok',
        email: 'deepok@exampl.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users