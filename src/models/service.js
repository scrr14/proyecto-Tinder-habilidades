import { DataTypes} from "sequelize"
const Company = (Sequelize) => {
    Sequelize.define('Company', {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
            allowNull: false 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: fals
        },
        description: {
            type: DataTypes.TEXT,
            allowNull.false
        },
        duration: {
            type: DataTypes.INTEGER
            allowNull:false
        },
        price_total: {
            type: DataTypes.DECIMAL(10, 2)
            defaultValue: 0
         },
         status:{
            type: DataTypes.ENUM('solicitado', 'asignado', 'proceso', 'finalizado')
         }
        {
            tableName: 'service'
        
    })
}

export default Service;