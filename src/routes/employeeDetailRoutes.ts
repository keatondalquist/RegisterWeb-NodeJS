import express from "express";
import { RouteLookup } from "../controllers/lookups/stringLookup";
import * as EmployeeDetailRouteController from "../controllers/employeeDetailRouteController";

function employeeDetailRoutes(server: XPathExpression.Express)
{
    server.get(RouteLookup.EmployeeDetail, EmployeeDetailRouteController.start);
	server.get((RouteLookup.EmployeeDetail + RouteLookup.EmployeeIdParameter), EmployeeDetailRouteController.start);

	server.put((RouteLookup.API + RouteLookup.EmployeeDetail + RouteLookup.EmployeeIdParameter), EmployeeDetailRouteController.updateEmployee);

	server.post((RouteLookup.API + RouteLookup.EmployeeDetail), EmployeeDetailReouteController.createEmployee);

	server.delete((RouteLookup.API + RouteLookup.EmployeeDetail + RouteLookup.EmployeeIdParameter), EmployeeDetailRouteController.deleteEmployee);

}
module.exports.routes = productDetailRoutes;