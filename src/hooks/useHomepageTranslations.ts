import { translate } from '@docusaurus/Translate';

/**
 * Hook to get translated homepage text using Docusaurus's official translation system
 * Uses the i18n locale homepage.json files for translations
 */
export function useHomepageTranslations(): (key: string, options?: { message: string; description: string }) => string {
  return (key: string, options?: { message: string; description: string }): string => {
    if (!options) {
      // Fallback for keys without message/description
      return key;
    }
    return translate({
      id: key,
      message: options.message,
      description: options.description,
    });
  };
}

/**
 * Direct translation function using Docusaurus's official translation system
 */
export function getHomepageTranslation(
  key: string,
  message: string,
  description: string,
): string {
  return translate({
    id: key,
    message: message,
    description: description,
  });
}
