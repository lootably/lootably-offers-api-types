// Types
import type APIMultistepOffer from './offers/APIMultistepOffer';
import type APISinglestepOffer from './offers/APISinglestepOffer';

type SuccessfulAPIResponse = {
  success: true,
  data: {
    requestID: string,
    offers: (APISinglestepOffer | APIMultistepOffer)[],
  },
};

export default SuccessfulAPIResponse;