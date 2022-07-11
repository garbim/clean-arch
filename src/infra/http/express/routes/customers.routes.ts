import ExpressAdapter from "@adapter/ExpressAdapter";
import CustomerDatabaseController from "@controller/CustomerDatabaseController";
import { Router } from "express";

const customersRoutes = Router();

customersRoutes.post(
  "/customers",
  ExpressAdapter.createCustomer(CustomerDatabaseController.createCustomer)
);

export { customersRoutes };
