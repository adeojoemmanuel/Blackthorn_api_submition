module.exports = (sequelize,Sequelize)=>{
    const occupant = sequelize.define('occupant',{
          deviceId: {
            type: Sequelize.INTEGER
          },
          guest_fname: {
            type: Sequelize.STRING
          },
          guest_lname: {
            type: Sequelize.STRING
          },
          guest_tag: {
            type: Sequelize.STRING
          },    
    },{
      freezeTableName: true,
    })
    return occupant
}