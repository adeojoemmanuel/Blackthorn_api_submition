module.exports = (sequelize, Sequelize) => {
    const channels = sequelize.define('channels', { 
      cid	: {
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      }
    });
    
    return channels;
  }