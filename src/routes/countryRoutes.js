import express from "express";
import { getCountries, getCountryByName } from "../controllers/countryController.js";

const router = express.Router();

router.get("/", getCountries);
router.get("/:name", getCountryByName);

export default router;
