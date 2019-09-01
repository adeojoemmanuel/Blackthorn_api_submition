module.exports = (sequelize,Sequelize)=>{
    const devices = sequelize.define('devices',{
          deviceId: {
            type: Sequelize.INTEGER
          },
          uuid: {
            type: Sequelize.STRING
          },
          room_class: {
            type: Sequelize.STRING
          },
          room_num: {
            type: Sequelize.STRING
          }
    })
    return devices
}