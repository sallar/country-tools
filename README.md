# Country Tools

[![Build Status](https://travis-ci.org/sallar/country-tools.svg?branch=master)](https://travis-ci.org/sallar/country-tools)

A simple NodeJS helper for getting information about countries of the world.

## Usage

``` sh
npm install country-tools
```

``` js
import { getCurrencyFromIso2 } from 'country-tools';
```

## Data

Data has been downloaded from [mledoze/countries](https://github.com/mledoze/countries).

## Included Tools

### Get Currency Code from Country ISO2 Code

Returns a country's currency given it's ISO2 code (`US`, `FI`, etc).

``` ts
getCurrencyFromIso2(countryCode: string): string | null
```

Sample:

``` js
getCurrencyFromIso2('US'); // USD
getCurrencyFromIso2('FI'); // EUR
getCurrencyFromIso2('XX'); // null
```

*TBA*

## License

The code is licensed under the [MIT License](LICENSE). See the data's [LICENSE](https://github.com/mledoze/countries/blob/master/LICENSE) file for more information.
