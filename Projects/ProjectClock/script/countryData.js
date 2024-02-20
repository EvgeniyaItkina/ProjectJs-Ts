const getNameCountries = async (name) => {
    let response;
    try {
        response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        return await response.json();
    }
    catch {
        console.error(`Download error: ${error.message}`);
        return null
    }
}

const search = async (countryName) => {
    const countries = await getNameCountries(countryName);
    console.log(countries);
    return countries[0];
}

export { getNameCountries, search }

