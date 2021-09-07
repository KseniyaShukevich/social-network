'use strict';
import { Model } from 'sequelize';

interface TokenAttributes {
  idUser: string;
  refreshToken: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Token extends Model<TokenAttributes> implements TokenAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    idUser!: string;
    refreshToken!: string;

    static associate(models: any) {
      // define association here
    }
  }
  Token.init(
    {
      idUser: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      refreshToken: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Token',
    }
  );
  return Token;
};
