import { useState, useEffect } from 'react';

export const ALLOWLISTED_TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
  'fbclid',
  'gclid',
  'sck',
  'src',
] as const;

const STORAGE_KEY = 'nanet_tracking_params';

/**
 * Captures allowlisted parameters from the current URL or session storage fallback.
 */
export function getStoredTrackingParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};

  const currentParams: Record<string, string> = {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    let hasNewUrlParams = false;

    ALLOWLISTED_TRACKING_PARAMS.forEach((param) => {
      const val = urlParams.get(param);
      if (val !== null && val.trim() !== '') {
        currentParams[param] = val;
        hasNewUrlParams = true;
      }
    });

    if (hasNewUrlParams) {
      const existingStoredJson = sessionStorage.getItem(STORAGE_KEY);
      const existingStored: Record<string, string> = existingStoredJson ? JSON.parse(existingStoredJson) : {};
      const merged = { ...existingStored, ...currentParams };
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    }

    const storedJson = sessionStorage.getItem(STORAGE_KEY);
    if (storedJson) {
      return JSON.parse(storedJson);
    }
  } catch (e) {
    console.error('Error processing tracking parameters:', e);
  }

  return {};
}

/**
 * Dynamically appends tracking parameters to the Hotmart base checkout URL safely.
 */
export function buildCheckoutUrl(baseUrl: string = 'https://pay.hotmart.com/V106938201T'): string {
  if (typeof window === 'undefined') return baseUrl;

  try {
    const trackingParams = getStoredTrackingParams();
    const url = new URL(baseUrl);

    Object.entries(trackingParams).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    return url.toString();
  } catch (e) {
    console.error('Error building checkout URL:', e);
    return baseUrl;
  }
}

/**
 * Custom React hook for components rendering Hotmart checkout CTAs.
 */
export function useCheckoutUrl(baseUrl: string = 'https://pay.hotmart.com/V106938201T'): string {
  const [checkoutUrl, setCheckoutUrl] = useState<string>(() => buildCheckoutUrl(baseUrl));

  useEffect(() => {
    setCheckoutUrl(buildCheckoutUrl(baseUrl));
  }, [baseUrl]);

  return checkoutUrl;
}
