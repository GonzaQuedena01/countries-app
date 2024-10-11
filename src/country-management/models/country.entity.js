class Country {

    constructor({ name='', capital='', cca3='', flags: { alt='', png='' } = {},
        population=0, region=''}) {

        this._name = name;
        this._capital = capital;
        this._cca3 = cca3;
        this._flags = { alt, png };
        this._population = population;
        this._region = region;
    }

    get name() {
        return this._name;
    }

    get capital() {
        return this._capital;
    }

    get cca3() {
        return this._cca3;
    }

    get flags() {
        return this._flags;
    }

    get population() {
        return this._population;
    }

    get region() {
        return this._region;
    }
}

export default Country;