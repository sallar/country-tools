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

```json
{
  name: {
    common: "Finland",
    official: "Republic of Finland",
    native: { fin: [Object], swe: [Object] }
  },
  tld: [".fi"],
  cca2: "FI",
  ccn3: "246",
  cca3: "FIN",
  cioc: "FIN",
  currency: ["EUR"],
  callingCode: ["358"],
  capital: "Helsinki",
  altSpellings: [
    "FI",
    "Suomi",
    "Republic of Finland",
    "Suomen tasavalta",
    "Republiken Finland"
  ],
  region: "Europe",
  subregion: "Northern Europe",
  languages: { fin: "Finnish", swe: "Swedish" },
  translations: {
    deu: { official: "Republik Finnland", common: "Finnland" },
    fra: { official: "République de Finlande", common: "Finlande" },
    hrv: { official: "Republika Finska", common: "Finska" },
    ita: { official: "Repubblica di Finlandia", common: "Finlandia" },
    jpn: { official: "フィンランド共和国", common: "フィンランド" },
    nld: { official: "Republiek Finland", common: "Finland" },
    por: { official: "República da Finlândia", common: "Finlândia" },
    rus: { official: "Финляндская Республика", common: "Финляндия" },
    slk: { official: "Fínska republika", common: "Fínsko" },
    spa: { official: "República de Finlandia", common: "Finlandia" },
    fin: { official: "Suomen tasavalta", common: "Suomi" },
    est: { official: "Soome Vabariik", common: "Soome" },
    zho: { official: "芬兰共和国", common: "芬兰" }
  },
  latlng: [64, 26],
  demonym: "Finnish",
  landlocked: false,
  borders: ["NOR", "SWE", "RUS"],
  area: 338424
}
```

## License

The code is licensed under the [MIT License](LICENSE). See the data's
[LICENSE](https://github.com/mledoze/countries/blob/master/LICENSE) file for
more information.
