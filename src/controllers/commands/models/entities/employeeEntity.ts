import Sequelize from "sequelize";
import { DatabaseConnection } from "../databaseConnection";
import { DatabaseTableName } from "../constants/databaseTableNames";
import { EmployeeFieldName } from "../constants/fieldNames/employeeFieldNames";

const modelName: string = "Employee";

export interface EmployeeAttributes {
    recordId?: string;
    firstName: string;
    lastName: string;
    employeeId: string;
    active: boolean;
    classification: string;
    manager: string;
    password: string;
    createdOn?: Date;
}

export interface EmployeeInstance extends Sequelize.Instance<EmployeeAttributes> {
    recordId: string;
    firstName: string;
    lastName: string;
    employeeId: string;
    active: boolean;
    classification: string;
    manager: string;
    password: string;
    createdOn: Date;
}

export let EmployeeEntity: Sequelize.Model<EmployeeInstance, EmployeeAttributes> =
	DatabaseConnection.define<EmployeeInstance, EmployeeAttributes>(
		modelName,
		<Sequelize.DefineModelAttributes<EmployeeAttributes>>{
			recordId: <Sequelize.DefineAttributeColumnOptions>{
				field: EmployeeFieldName.recordId,
				type: Sequelize.UUID,
				autoIncrement: true,
				primaryKey: true
			},
			firstName: <Sequelize.DefineAttributeColumnOptions>{
				field: EmployeeFieldName.firstName,
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: ""
			},
			lastName: <Sequelize.DefineAttributeColumnOptions>{
				field: EmployeeFieldName.lastName,
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: ""
			},
			employeeId: <Sequelize.DefineAttributeColumnOptions>{
				field: EmployeeFieldName.employeeId,
				type: Sequelize.STRING,
                allowNull: true
            },
            active: <Sequelize.DefineAttributeColumnOptions>{
                field: EmployeeFieldName.active,
                type: Sequelize.BOOLEAN,
                allowNull: false
            },
            classification: <Sequelize.DefineAttributeColumnOptions>{
                field: EmployeeFieldName.classification,
                type: Sequelize.STRING,
                allowNull: false
            },
            manager: <Sequelize.DefineAttributeColumnOptions>{
                field: EmployeeFieldName.manager,
                type: Sequelize.STRING,
                allowNull: false
            },
            password: <Sequelize.DefineAttributeColumnOptions>{
                field: EmployeeFieldName.password,
                type: Sequelize.STRING,
                allowNull: false
            },
            createdOn: <Sequelize.DefineAttributeColumnOptions>{
                field: EmployeeFieldName.createdOn,
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW
            }

		},
		<Sequelize.DefineOptions<EmployeeInstance>>{
		    timestamps: false,
			freezeTableName: true,
			tableName: DatabaseTableName.EMPLOYEE
		});
