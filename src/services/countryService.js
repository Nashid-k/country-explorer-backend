import apiClient from "../utils/apiClient.js";


export const fetchAllCountries = async ({ page = 1, limit = 12, search = "", region = "All" } = {}) => {
    
    const response = await apiClient.get("/all?fields=name,flags,region,capital,population,languages");

    let countries = response.data.map((country) => ({
        name: country.name.common,
        flag: country.flags.svg,
        region: country.region,
        capital: country.capital?.[0] || "N/A",
        population: country.population,
        languages: country.languages ? Object.values(country.languages).join(",") : "N/A"
    }));

    
    if (search) {
        countries = countries.filter(country =>
            country.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    
    if (region && region !== "All") {
        countries = countries.filter(country =>
            country.region === region
        );
    }

    
    const total = countries.length;
    const totalPages = Math.ceil(total / limit);
    const currentPage = parseInt(page);
    const startIndex = (currentPage - 1) * limit;

    
    const paginatedCountries = countries.slice(startIndex, startIndex + parseInt(limit));

    
    return {
        countries: paginatedCountries,
        total,
        page: currentPage,
        totalPages
    };
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