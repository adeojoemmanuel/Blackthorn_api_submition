module.exports = (sequelize,Sequelize)=>{
    const streams = sequelize.define('streams',{
          name: {
            type: Sequelize.STRING
          },
          description: {
            type: Sequelize.STRING
          },
          stream_url: {
            type: Sequelize.STRING
          },
          assoc_tags: {
            type: Sequelize.STRING
          },
          logo_url: {
            type: Sequelize.STRING
          }, 
          is_online: {
            type: Sequelize.INTEGER
          }  
    })
    return streams
}