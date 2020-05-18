# Country Tools

[![Build Status](https://travis-ci.org/sallar/country-tools.svg?branch=master)](https://travis-ci.org/sallar/country-tools)

A simple NodeJS helper for getting information about countries of the world.

## Usage

```sh
npm install country-tools
```

```js
import { getCurrencyFromIso2 } from 'country-tools';
```

## Data

Data has been downloaded from
[mledoze/countries](https://github.com/mledoze/countries).

## Included Tools

### Get Currency Code from Country ISO2 Code

Returns a country's currency given it's ISO2 code (`US`, `FI`, etc).

```ts
getCurrencyFromIso2(countryCode: string): string | null
```

Sample:

```js
getCurrencyFromIso2('US'); // USD
getCurrencyFromIso2('FI'); // EUR
getCurrencyFromIso2('XX'); // null
```

### Get Country Information from Country ISO2 Code

Returns complete information for a given country:

```ts
findCountryByIso2(countryCode: string): Country | null
```

Sample:

```js
findCountryByIso2('FI'); // { ...info }
findCountryByIso2('XX'); // null
```

This function returns type `Country` which looks like the following:

```js
const test = {
  name: {
    common: 'Finland',
    official: 'Republic of Finland',
    native: {
      fin: {
        official: 'Suomen tasavalta',
        common: 'Suomi',
      },
      swe: {
        official: 'Republiken Finland',
        common: 'Finland',
      },
    },
  },
  tld: ['.fi'],
  cca2: 'FI',
  ccn3: '246',
  cca3: 'FIN',
  cioc: 'FIN',
  independent: true,
  status: 'officially-assigned',
  currencies: {
    EUR: {
      name: 'Euro',
      symbol: '€',
    },
  },
  idd: {
    root: '+3',
    suffixes: ['58'],
  },
  capital: ['Helsinki'],
  altSpellings: ['FI', 'Suomi', 'Republic of Finland', 'Suomen tasavalta', 'Republiken Finland'],
  region: 'Europe',
  subregion: 'Northern Europe',
  languages: {
    fin: 'Finnish',
    swe: 'Swedish',
  },
  translations: {
    ces: {
      official: 'Finská republika',
      common: 'Finsko',
    },
    deu: {
      official: 'Republik Finnland',
      common: 'Finnland',
    },
    est: {
      official: 'Soome Vabariik',
      common: 'Soome',
    },
    fin: {
      official: 'Suomen tasavalta',
      common: 'Suomi',
    },
    fra: {
      official: 'République de Finlande',
      common: 'Finlande',
    },
    hrv: {
      official: 'Republika Finska',
      common: 'Finska',
    },
    hun: {
      official: 'Finn Köztársaság',
      common: 'Finnország',
    },
    ita: {
      official: 'Repubblica di Finlandia',
      common: 'Finlandia',
    },
    jpn: {
      official: 'フィンランド共和国',
      common: 'フィンランド',
    },
    kor: {
      official: '핀란드 공화국',
      common: '핀란드',
    },
    nld: {
      official: 'Republiek Finland',
      common: 'Finland',
    },
    per: {
      official: 'جمهوری فنلاند',
      common: 'فنلاند',
    },
    pol: {
      official: 'Republika Finlandii',
      common: 'Finlandia',
    },
    por: {
      official: 'República da Finlândia',
      common: 'Finlândia',
    },
    rus: {
      official: 'Финляндская Республика',
      common: 'Финляндия',
    },
    slk: {
      official: 'Fínska republika',
      common: 'Fínsko',
    },
    spa: {
      official: 'República de Finlandia',
      common: 'Finlandia',
    },
    urd: {
      official: 'جمہوریہ فن لینڈ',
      common: 'فن لینڈ',
    },
    zho: {
      official: '芬兰共和国',
      common: '芬兰',
    },
  },
  latlng: [64, 26],
  landlocked: false,
  borders: ['NOR', 'SWE', 'RUS'],
  area: 338424,
  flag: '🇫🇮',
  demonyms: {
    eng: {
      f: 'Finnish',
      m: 'Finnish',
    },
    fra: {
      f: 'Finlandaise',
      m: 'Finlandais',
    },
  },
};
```

## License

The code is licensed under the [MIT License](LICENSE). See the data's
[LICENSE](https://github.com/mledoze/countries/blob/master/LICENSE) file for
more information.
