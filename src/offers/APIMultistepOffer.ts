// Types
import type Category from '../dependencies/Category';
import type Device from '../dependencies/Device';
import type PaymentModel from '../dependencies/PaymentModel';
import type OfferRestrictions from '../dependencies/OfferRestrictions';
import type ExtraCreative from '../dependencies/ExtraCreative';

type APIOfferGoal = {
  goalID: string,
  description: string,
  revenue: number,
  currencyReward: number,
};

type APIMultistepOffer = {
  type: 'multistep',
  name: string,
  description: string,
  image: string,
  countries: string[],
  offerID: string,
  categories: Category[],
  devices: Device[],
  link: string,
  goals: APIOfferGoal[],
  conversionRate: number,
  extraCreatives: ExtraCreative[],
  previewURL?: string,
  bundlePackageID?: string,
  appStoreCategories?: string[],
  appStoreDescription?: string,
  paymentModel?: PaymentModel,
  restrictions?: OfferRestrictions,
  stateTargetingByCountryCode?: {
    [countryCode: string]: {
      includeStateCodes: string[],
    },
  },
};

export default APIMultistepOffer;