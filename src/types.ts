export interface Country {
  name: {
    common: string;
    official: string;
    native: {
      [language: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  currency: string[];
  callingCode: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: {
    [language: string]: string;
  };
  translations: {
    [language: string]: {
      official: string;
      common: string;
    };
  };
  latlng: [number, number];
  demonym: string;
  landlocked: boolean;
  borders: string[];
  area: number;
}
