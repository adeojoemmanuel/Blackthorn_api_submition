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

// mysql -Nse 'show tables' heroku_c8e92b5dfe6fac8 | while read table; do mysql -e "truncate table $table" heroku_c8e92b5dfe6fac8; done

// mysql --host=us-cdbr-iron-east-02.cleardb.net --user=b0753f87963ffa --password=13c2daff --reconnect heroku_c8e92b5dfe6fac8 < update.sql


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
