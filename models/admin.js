module.exports = (sequelize,Sequelize)=>{
    const admin = sequelize.define('admin',{
     
          userId: {
            type: Sequelize.INTEGER
          },
          staff_no: {
            type: Sequelize.STRING
          },
          username: {
            type: Sequelize.STRING
          },
          password: {
            type: Sequelize.STRING
          },
          status: {
            type: Sequelize.INTEGER
          },    
    })
    return admin
}