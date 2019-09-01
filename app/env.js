const env = {
    database:'heroku_c8e92b5dfe6fac8',
    username:"b0753f87963ffa",
    password:"13c2daff",
    host:'us-cdbr-iron-east-02.cleardb.net',
    dialect:'mysql',

    pool:{
      max:5,
      min:0,
      acquire:3000,
      idle:10000
    }
}

// const env = {
//     database:'hotelautomate',
//     username:"root",
//     password:"",
//     host:'localhost',
//     dialect:'mysql',

//     pool:{
//       max:5,
//       min:0,
//       acquire:3000,
//       idle:10000
//     }
// }

module.exports = env
