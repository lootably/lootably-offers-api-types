// Types
import type SuccessfulAPIResponse from './SuccessfulAPIResponse';
import type FailedAPIResponse from './FailedAPIResponse';

type APIResponse = SuccessfulAPIResponse | FailedAPIResponse;

export default APIResponse;