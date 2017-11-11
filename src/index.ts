import * as path from 'path';
import { Country } from './types';

const data: Country[] = require(path.resolve(
  __dirname,
  '../data/countries.json'
));

export function getCurrencyFromIso2(countryCode: string): string | null {
  const country = data.find(
    entry => entry.cca2.toLowerCase() === countryCode.toLowerCase()
  );
  if (!country || country.currency.length === 0) {
    return null;
  }
  return country.currency[0];
}
