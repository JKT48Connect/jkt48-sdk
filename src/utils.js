let fetch;

// Universal fetch polyfill
if (typeof globalThis !== 'undefined' && globalThis.fetch) {
  fetch = globalThis.fetch;
} else if (typeof window !== 'undefined' && window.fetch) {
  fetch = window.fetch;
} else if (typeof global !== 'undefined' && global.fetch) {
  fetch = global.fetch;
} else {
  try {
    fetch = require('cross-fetch');
  } catch (e) {
    throw new Error('Fetch is not available. Please install cross-fetch or use a modern browser.');
  }
}

export { fetch };

export const buildUrl = (endpoint, apiKey) => {
  const url = new URL(endpoint, BASE_URL);
  if (apiKey) {
    url.searchParams.append('apikey', apiKey);
  }
  return url.toString();
};

export const buildHeaders = (priorityToken) => {
  const headers = {
    'Content-Type': 'application/json',
    'User-Agent': '@jkt48connect-corp/sdk/1.0.0'
  };
  
  if (priorityToken) {
    headers['x-priority-token'] = priorityToken;
  }
  
  return headers;
};
