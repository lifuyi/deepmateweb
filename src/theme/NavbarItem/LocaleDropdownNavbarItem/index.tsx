import React, {type ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import type {LinkLikeNavbarItemProps} from '@theme/NavbarItem';
import type {Props} from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import styles from './styles.module.css';

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}: Props): ReactNode {
  const {pathname, search, hash} = useLocation();
  
  const {
    siteConfig: {baseUrl},
    i18n: {defaultLocale, locales, localeConfigs},
  } = useDocusaurusContext();

  const extractPathWithoutLocale = (path: string): string => {
    let cleanPath = path;
    if (baseUrl !== '/' && cleanPath.startsWith(baseUrl)) {
      cleanPath = cleanPath.slice(baseUrl.length - 1);
    }
    let found = true;
    while (found) {
      found = false;
      for (const locale of locales) {
        if (cleanPath === `/${locale}` || cleanPath.startsWith(`/${locale}/`)) {
          cleanPath = cleanPath.slice(`/${locale}`.length) || '/';
          found = true;
          break;
        }
      }
    }
    return cleanPath || '/';
  };

  const currentLocale = pathname.includes('/zh-Hans/') ? 'zh-Hans' : 'en';
  const currentPath = extractPathWithoutLocale(pathname);
  const currentLocaleConfig = localeConfigs[currentLocale];

  const localeItems: LinkLikeNavbarItemProps[] = locales.map((locale) => {
    const localeConfig = localeConfigs[locale];
    
    let newPathname: string;
    if (locale === defaultLocale) {
      newPathname = baseUrl === '/' ? currentPath : baseUrl + currentPath.slice(1);
    } else {
      newPathname = baseUrl === '/' 
        ? `/${locale}${currentPath}` 
        : `${baseUrl}${locale}${currentPath.slice(1)}`;
    }

    return {
      label: localeConfig.label,
      lang: localeConfig.htmlLang,
      to: `pathname://${newPathname}${search}${hash}`,
      target: '_self',
      autoAddBaseUrl: false,
      className:
        locale === currentLocale
          ? mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : currentLocaleConfig.label;

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}
