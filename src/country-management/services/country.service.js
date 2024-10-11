import http from '../../utils/services/http.js'

class CountryService {

    async fetchCountries() {
        return await http.get('/all')
    }
}

export default CountryService;