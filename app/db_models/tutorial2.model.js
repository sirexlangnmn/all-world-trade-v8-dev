module.exports = (sequelize, Sequelize) => {
    const Tutorial2 = sequelize.define("tutorial2", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial2;
  };
  