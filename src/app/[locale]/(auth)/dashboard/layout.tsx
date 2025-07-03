import { getTranslations, setRequestLocale } from 'next-intl/server';
import { BaseTemplate } from '@/templates/BaseTemplate';
import { NavBar } from '@/components/NavBar';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'DashboardLayout',
  });

  return (
    <>
    <NavBar/>
      <BaseTemplate
      >
        {props.children}
      </BaseTemplate>
    </>
  );
}
