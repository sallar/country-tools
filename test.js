import test from 'ava';
import { getCurrencyFromIso2, findCountryByIso2 } from './dist';

test('getCurrencyFromIso2', t => {
  t.is(getCurrencyFromIso2('US'), 'USD');
  t.is(getCurrencyFromIso2('FI'), 'EUR');
  t.is(getCurrencyFromIso2('IR'), 'IRR');
  t.is(getCurrencyFromIso2('XX'), null);
});

test('findCountryByIso2', t => {
  t.not(findCountryByIso2('FI'), null);
  t.is(findCountryByIso2('FI').cioc, 'FIN');
  t.is(findCountryByIso2('XX'), null);
});
