/**
 * IndexNow utility for submitting URLs to search engines
 * https://www.indexnow.org/
 */

const INDEXNOW_API_ENDPOINT = 'https://api.indexnow.org/indexnow';
const API_KEY = '86027c0fc29e44699a1f74a581f5362d';
const HOST = 'atlanticground.com';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;

interface IndexNowResponse {
  success: boolean;
  status?: number;
  message?: string;
}

/**
 * Submit a single URL to IndexNow
 */
export async function submitUrl(url: string): Promise<IndexNowResponse> {
  try {
    const response = await fetch(
      `${INDEXNOW_API_ENDPOINT}?url=${encodeURIComponent(url)}&key=${API_KEY}&keyLocation=${encodeURIComponent(KEY_LOCATION)}`,
      {
        method: 'GET',
        headers: {
          'User-Agent': 'Atlantic Ground Station IndexNow Client'
        }
      }
    );

    if (response.status === 200 || response.status === 202) {
      return { success: true, status: response.status, message: 'URL submitted successfully' };
    } else if (response.status === 400) {
      return { success: false, status: 400, message: 'Bad request - Invalid format' };
    } else if (response.status === 403) {
      return { success: false, status: 403, message: 'Forbidden - Invalid key' };
    } else if (response.status === 422) {
      return { success: false, status: 422, message: 'Unprocessable Entity - URL/key mismatch' };
    } else if (response.status === 429) {
      return { success: false, status: 429, message: 'Too Many Requests - Rate limited' };
    } else {
      return { success: false, status: response.status, message: `Unexpected status: ${response.status}` };
    }
  } catch (error) {
    return { 
      success: false, 
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    };
  }
}

/**
 * Submit multiple URLs to IndexNow in bulk
 */
export async function submitUrls(urls: string[]): Promise<IndexNowResponse> {
  if (urls.length === 0) {
    return { success: false, message: 'No URLs provided' };
  }

  if (urls.length === 1) {
    return submitUrl(urls[0]);
  }

  try {
    const response = await fetch(INDEXNOW_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'Atlantic Ground Station IndexNow Client'
      },
      body: JSON.stringify({
        host: HOST,
        key: API_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls
      })
    });

    if (response.status === 200 || response.status === 202) {
      return { success: true, status: response.status, message: `${urls.length} URLs submitted successfully` };
    } else if (response.status === 400) {
      return { success: false, status: 400, message: 'Bad request - Invalid format' };
    } else if (response.status === 403) {
      return { success: false, status: 403, message: 'Forbidden - Invalid key' };
    } else if (response.status === 422) {
      return { success: false, status: 422, message: 'Unprocessable Entity - URL/key mismatch' };
    } else if (response.status === 429) {
      return { success: false, status: 429, message: 'Too Many Requests - Rate limited' };
    } else {
      return { success: false, status: response.status, message: `Unexpected status: ${response.status}` };
    }
  } catch (error) {
    return { 
      success: false, 
      message: `Network error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    };
  }
}

/**
 * Get all main website URLs for bulk submission
 */
export function getAllWebsiteUrls(): string[] {
  const baseUrl = `https://${HOST}`;
  
  return [
    baseUrl,                        // Homepage
    `${baseUrl}/services`,          // Services
    `${baseUrl}/about`,             // About
    `${baseUrl}/locations`,         // Ground Locations
    `${baseUrl}/sightings`,         // Rocket Launches
    `${baseUrl}/why-bermuda`,       // Why Bermuda
    `${baseUrl}/heritage`,          // Heritage/Legacy
    `${baseUrl}/contact`,           // Contact
    `${baseUrl}/legal/privacy`,     // Privacy Policy
    `${baseUrl}/legal/terms`,       // Terms of Service
  ];
}

/**
 * Submit all main website URLs to IndexNow
 */
export async function submitAllUrls(): Promise<IndexNowResponse> {
  const urls = getAllWebsiteUrls();
  return submitUrls(urls);
}