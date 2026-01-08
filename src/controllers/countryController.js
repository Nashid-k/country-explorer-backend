import { fetchAllCountries, fetchCountryByName } from "../services/countryService.js";

export const getCountries = async (req, res) => {
    try {
        const countries = await fetchAllCountries();
        res.status(200).json(countries);
    } catch (error) {
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
            res.status(500).json({ message: "Failed to fetch country" });
        }
    }
};
