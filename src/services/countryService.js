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

export const fetchCountryByName = async (name) => {
    const response = await apiClient.get(`/name/${name}?fields=name,flags,region,capital,population,languages,currencies,borders,area`);

    const country = response.data[0];
    return {
        name: country.name.common,
        officialName: country.name.official,
        flag: country.flags.svg,
        region: country.region,
        capital: country.capital?.[0] || "N/A",
        population: country.population,
        languages: country.languages ? Object.values(country.languages).join(", ") : "N/A",
        currencies: country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "N/A",
        borders: country.borders || [],
        area: country.area
    };
};