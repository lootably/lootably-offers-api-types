type OfferRestrictions = {
  // >15.0.0, >16.5.0, >17.7.0, >18.1.0, etc.
  os: {
    android?: string[],
    ios?: string[],
  },
};

export default OfferRestrictions;