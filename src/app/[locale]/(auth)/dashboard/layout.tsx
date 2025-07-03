import { setRequestLocale } from 'next-intl/server';
import { NavBar } from '@/components/NavBar';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default async function DashboardLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <NavBar />
      <BaseTemplate>
        {props.children}
      </BaseTemplate>
    </>
  );
}
