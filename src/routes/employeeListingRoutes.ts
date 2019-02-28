import express from "express";
import { RouteLookup }  from "../controllers/lookups/stringLookup";
import * EmployeeListingRouteController from "../controllers/employeeListingRouteController";

function employeeListingRoutes(server: express.Express)
{
    server.get(RouteLookup.EmployeeListing, EmployeeListingRouteController.start);

}
module.exports.routes = employeeListingRoutes;