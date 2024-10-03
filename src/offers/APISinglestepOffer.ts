// Types
import type Category from '../dependencies/Category';
import type Device from '../dependencies/Device';
import type PaymentModel from '../dependencies/PaymentModel';
import type OfferRestrictions from '../dependencies/OfferRestrictions';
import type ExtraCreative from '../dependencies/ExtraCreative';

type APISinglestepOffer = {
  type: 'singlestep',
  name: string,
  description: string,
  revenue: number | 'variable',
  currencyReward: number | 'variable',
  image: string,
  countries: string[],
  offerID: string,
  categories: Category[],
  devices: Device[],
  link: string,
  conversionRate: number,
  extraCreatives: ExtraCreative[],
  multipleConversionsAllowed: boolean,
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

export default APISinglestepOffer;