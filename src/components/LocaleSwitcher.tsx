'use client';

import { ChevronDown, Globe } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { usePathname } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

const localeLabels: Record<string, string> = {
  'en': 'English',
  'zh-cn': '中文（中国）',
};

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSelect = (newLocale: string) => {
    if (newLocale !== locale) {
      router.push(`/${newLocale}${pathname}`);
      router.refresh();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 px-2 py-1 text-base font-medium">
          <Globe className="w-5 h-5" />
          {localeLabels[locale] || locale.toUpperCase()}
          <ChevronDown className="w-4 h-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map(elt => (
          <DropdownMenuItem
            key={elt}
            onClick={() => handleSelect(elt)}
            className={locale === elt ? 'font-semibold bg-muted' : ''}
            aria-current={locale === elt}
          >
            {localeLabels[elt] || elt.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
