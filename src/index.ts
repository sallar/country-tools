import * as path from 'path';
import { Country } from './types';

const data: Country[] = require(path.resolve(
  __dirname,
  '../data/countries.json'
));

export function getCurrencyFromIso2(countryCode: string): string | null {
  const country = findCountryByIso2(countryCode);
  if (country === null || Object.keys(country.currencies).length === 0) {
    return null;
  }
  return Object.keys(country.currencies)[0];
}

export function findCountryByIso2(countryCode: string): Country | null {
  const country = data.find(
    (entry) => entry.cca2.toLowerCase() === countryCode.toLowerCase()
  );
  if (!country) {
    return null;
  }
  return country;
}

export function getCountries(): Country[] {
  return data;
}
