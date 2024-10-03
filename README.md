# Lootably Offers API Types

TypeScript type definitions for Lootably's Offers API.

## API Documentation

For detailed information about the Lootably Offers API, including request parameters and response structures, please refer to the [Lootably API Guide](https://lootably.readme.io/docs/api-guide).

## Description

This package provides TypeScript types for Lootably's Offers API, allowing you to easily type our API's responses to ensure type safety in your application.

## Installation

```bash
npm install lootably-offers-api-types
```

## Usage

For a complete list of available types, please refer to the [index.ts file](https://github.com/lootably/lootably-offers-api-types/blob/master/src/index.ts).

You can import these types as needed in your TypeScript project. For example:

```typescript
import type {
  APIResponse,
  Device,
  Category,
} from 'lootably-offers-api-types';
```

### Example: Fetching Offers from the Lootably Offers API

Here's how you can use the provided types to ensure type safety when working with responses from the Lootably Offers API:

```typescript
// Types
import type { SuccessfulAPIResponse, FailedAPIResponse } from 'lootably-offers-api-types';

const API_URL = 'https://api.lootably.com/api/v2/offers/get';

async function fetchOffers(): Promise<void> {
  const requestBody = {
    placementID: process.env.PLACEMENT_ID,
    apiKey: process.env.API_KEY,
    userData: {
      userID: 'exampleUserID',
      userAgentHeader: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      ipAddress: '192.0.2.1',
    },
    categories: ['app', 'game'],
    devices: ['windows', 'android'],
    countries: ['US', 'CA'],
  };

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  const data: SuccessfulAPIResponse | FailedAPIResponse = await response.json();

  if (data.success) {
    console.log('Request ID:', data.data.requestID);
    console.log('Offers:', data.data.offers);

    data.data.offers.forEach((offer) => {
      if (offer.type === 'singlestep') {
        // Handle single-tep offer
        console.log('Singlestep Offer:', offer.name);
      } else if (offer.type === 'multistep') {
        // Handle multistep offer
        console.log('Multistep Offer:', offer.name);
      }
    });
  } else {
    console.error(`Error: ${data.message}`);
    console.error('Request ID:', data.data.requestID);
  }
}

fetchOffers().catch((error) => {
  console.error('An error occurred while fetching offers:', error);
});
```

**Note:** Ensure that the environment variables `PLACEMENT_ID` and `API_KEY` are properly set before running the script.

## Contact

If you have any questions or need assistance, please email us at [business@lootably.com](mailto:business@lootably.com) or reach out to your Lootably contact.

