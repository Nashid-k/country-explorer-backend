import apiClient from "../utils/apiClient.js";


export const fetchAllCountries = async () => {
    const response = await apiClient.get("/all?fields=name,flags,region,capital,population,languages");


    return response.data.map((country) => ({
        name: country.name.common,
        flag: country.flags.svg,
        region: country.region,
        capital: country.capital?.[0] || "N/A",
        population: country.population,
        languages: country.languages ? Object.values(country.languages).join(",") : "N/A"
    }));
};