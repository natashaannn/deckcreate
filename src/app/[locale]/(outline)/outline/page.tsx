import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type IOutlineProps = {
  params: Promise<{ locale: string }>;
  searchParams?: { prompt?: string };
};

export async function generateMetadata(props: IOutlineProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Outline',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function OutlinePage(props: IOutlineProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'Outline',
  });

  // Get the prompt from the query string (sent from landing page)
  const prompt = props.searchParams?.prompt || "";

  // Mock outline data (not in locale)
  const mockOutline = [
    {
      title: "Introduction",
      bullets: [
        "Welcome and overview",
        "Purpose of the deck",
      ],
    },
    {
      title: "Key Point 1",
      bullets: [
        "Explanation of key point 1",
        "Supporting details",
      ],
    },
    {
      title: "Key Point 2",
      bullets: [
        "Explanation of key point 2",
        "Examples and evidence",
      ],
    },
    {
      title: "Conclusion",
      bullets: [
        "Summary of main points",
        "Call to action or next steps",
      ],
    },
  ];

  return (
    <>
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance p-7">
        {t('preview_title', { defaultValue: "Preview Your Slide Deck Outline" })}
      </h1>
      <div className="max-w-xl mx-auto grid gap-6">
        <div>
          <label className="block mb-2 font-semibold">
            {t('edit_outline', { defaultValue: "Edit Outline" })}
          </label>
          <Textarea
            className="min-h-[240px] text-base"
            defaultValue={mockOutline.map((slide, idx) =>
              `${idx + 1}. ${slide.title}\n${slide.bullets.map(b => `   - ${b}`).join('\n')}`
            ).join('\n\n')}
            placeholder={t('outline_placeholder', { defaultValue: "Your outline will appear here..." })}
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">{t('outline_preview', { defaultValue: "Outline Preview" })}</h2>
          <ol className="space-y-4">
            {mockOutline.map((slide, idx) => (
              <li key={idx} className="border rounded p-3 bg-gray-50">
                <div className="font-bold">{idx + 1}. {slide.title}</div>
                <ul className="list-disc ml-6 mt-1 text-gray-700">
                  {slide.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex gap-4 justify-end">
          <Button variant="outline">
            {t('back', { defaultValue: "Back" })}
          </Button>
          <Button>
            {t('accept_outline', { defaultValue: "Accept & Continue" })}
          </Button>
        </div>
      </div>
    </>
  );
}