// export const GA_TRACKING_ID = 'G-LB5MBXKJCG'

// /**
//  * Track a custom event in GA4
//  * @param {string} action  – Event name (e.g. 'reserve_table', 'click_menu')
//  * @param {object} params  – Additional parameters (category, label, value, etc.)
//  */

// export const trackEvent = (action: string, params?: Record<string, any>) => {
//   if (typeof window !== 'undefined' && 'gtag' in window) {
//     window.gtag('event', action, params)
//   }
// }

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = 'G-LB5MBXKJCG';

type EventParams = Record<string, string | number | boolean | null | undefined>;

/**
 * Track a custom event in GA4
 * @param {string} action  – Event name (e.g. 'reserve_table', 'click_menu')
 * @param {EventParams} params  – Additional parameters (category, label, value, etc.)
 */
export const trackEvent = (action: string, params?: EventParams) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }

  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    // fbq('trackCustom', actionName, parameters)
    window.fbq('trackCustom', action, params);
  }
};