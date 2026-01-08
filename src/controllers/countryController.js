import { fetchAllCountries, fetchCountryByName } from "../services/countryService.js";

export const getCountries = async (req, res) => {
    try {
        const { page = 1, limit = 12, search = "", region = "All" } = req.query;

        const result = await fetchAllCountries({ page, limit, search, region });

        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching countries:", error);
        res.status(500).json({ message: "Failed to fetch countries" });
    }
};

export const getCountryByName = async (req, res) => {
    try {
        const { name } = req.params;
        const country = await fetchCountryByName(name);
        res.status(200).json(country);
    } catch (error) {
        if (error.response?.status === 404) {
            res.status(404).json({ message: "Country not found" });
        } else {
            console.error("Error fetching country details:", error);
            res.status(500).json({ message: "Failed to fetch country" });
        }
    }
};
