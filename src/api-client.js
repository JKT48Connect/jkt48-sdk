import { fetch, buildUrl, buildHeaders } from './utils.js';
import { ENDPOINTS } from './config.js';

class ApiClient {
  constructor(auth = null) {
    this.auth = auth;
  }

  async request(endpoint, options = {}) {
    try {
      let url;
      let headers;

      if (this.auth?.apiKey) {
        url = buildUrl(endpoint, this.auth.apiKey);
        headers = buildHeaders();
      } else if (this.auth?.priorityToken) {
        url = buildUrl(endpoint);
        headers = buildHeaders(this.auth.priorityToken);
      } else {
        url = buildUrl(endpoint);
        headers = buildHeaders();
      }

      const config = {
        method: 'GET',
        headers,
        ...options
      };

      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      throw new Error(`API Request failed: ${error.message}`);
    }
  }
}

export default ApiClient;
