const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  New.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.TEXT,
      img_url: DataTypes.TEXT,
      quote: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'New',
    }
  );
  return New;
};
