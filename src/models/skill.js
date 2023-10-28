import { DataTypes} from "sequelize"
const Skill = (Sequelize) => {
    Sequelize.define('Skill', {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true,
            allowNull: false 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nit: {
            type: DataTypes.STRING,
            allowNull: false
            unique: true
        },
        
        {
            tableName: 'skills'
            timetamps: false
        
    })
}

export default Skill;