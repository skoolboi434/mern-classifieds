import bcrypt from 'bcryptjs';

const customers = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Brian Griffin',
    email: 'briangriffin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  },
  {
    name: 'Stan Smith',
    email: 'stansmith@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false
  }
];

export default customers;
