import { getTranslations } from 'next-intl/server';
import Link from "next/link";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

export default async function Dashboard(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Dashboard',
  });

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6">{t('dashboard_title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link href={`/${locale}/dashboard/user-profile`} className="bg-gray-50 rounded-lg p-4 flex flex-col items-center hover:bg-gray-100 transition">
          <span className="text-lg font-semibold">{t('profile')}</span>
          <span className="text-gray-500">{t('profile_desc')}</span>
        </Link>
        <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
          <span className="text-lg font-semibold">{t('decks')}</span>
          <span className="text-gray-500">{t('decks_desc')}</span>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
          <span className="text-lg font-semibold">{t('settings')}</span>
          <span className="text-gray-500">{t('settings_desc')}</span>
        </div>
      </div>
    </div>
  );
}