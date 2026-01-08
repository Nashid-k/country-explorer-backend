import { fetchAllCountries } from "../services/countryService.js";

export const getCountries = async (req, res) => {
    try {
        const countries = await fetchAllCountries();
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch countries" });
    }
};


