type FailedAPIResponse = {
  success: false,
  message: string,
  data: {
    requestID: string,
  },
};

export default FailedAPIResponse;