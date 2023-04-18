import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const [selected, setSelected] = useState(NaN);
  const { t } = useTranslation(['pricing']);

  return (
    <section className="body-font">
      <div className="mx-auto py-24">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="title-font mb-12 text-center text-3xl font-medium">{t('pricing:header')}</h1>
          <p className="mx-auto text-base leading-relaxed">
            {t('pricing:subheader')}
          </p>
        </div>
        <div className="mx-auto w-full overflow-auto">
          <table className="whitespace-no-wrap w-full table-auto rounded text-left dark:bg-neutral-300-dark">
            <thead>
              <tr>
                <th className="title-font rounded-tl rounded-bl bg-neutral-100 px-4 py-3 text-sm font-medium tracking-wider dark:bg-neutral-200-dark">
                  {t('pricing:table_headers.membership')}
                </th>
                <th className="title-font bg-neutral-100 px-4 py-3 text-sm font-medium tracking-wider dark:bg-neutral-200-dark">
                  {t('pricing:table_headers.price')}
                </th>
                <th className="title-font bg-neutral-100 px-4 py-3 text-sm font-medium tracking-wider dark:bg-neutral-200-dark">
                  {t('pricing:table_headers.description')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={
                  'cursor-pointer hover:bg-primary-300 dark:hover:bg-primary-400' +
                  (selected == 0 ? ' bg-primary-500 text-neutral-100' : '')
                }
                onClick={() => setSelected(0)}
              >
                <td className="px-4 py-3">
                  {t('pricing:membership_types.starter.name')}
                </td>
                <td className="px-4 py-3">{t('pricing:membership_types.starter.price')}</td>
                <td className="px-4 py-3 text-lg">{t('pricing:membership_types.starter.description')}</td>
              </tr>
              <tr
                className={
                  'cursor-pointer hover:bg-primary-400 dark:hover:bg-primary-400' +
                  (selected == 1 ? ' bg-primary-500 text-neutral-100' : '')
                }
                onClick={() => setSelected(1)}
              >
                <td className="border-t-2 border-neutral-100 px-4 py-3 dark:border-neutral-400-dark">
                  {t('pricing:membership_types.pro.name')}
                </td>
                <td className="border-t-2 border-neutral-100 px-4 py-3 dark:border-neutral-400-dark">
                  {t('pricing:membership_types.pro.price')}
                </td>
                <td className="border-t-2 border-neutral-100 px-4 py-3 text-lg dark:border-neutral-400-dark ">
                  {t('pricing:membership_types.pro.description')}
                </td>
              </tr>
              <tr
                className={
                  'cursor-pointer hover:bg-primary-400 dark:hover:bg-primary-400' +
                  (selected == 2 ? ' bg-primary-500 text-neutral-100' : '')
                }
                onClick={() => setSelected(2)}
              >
                <td className="border-t-2 border-neutral-100 py-3 px-4 dark:border-neutral-400-dark ">
                  {t('pricing:membership_types.collab.name')}
                </td>
                <td className="border-t-2 border-neutral-100 px-4 py-3 dark:border-neutral-400-dark">
                  {t('pricing:membership_types.collab.price')}
                </td>
                <td className="border-t-2 border-neutral-100 px-4 py-3 text-lg dark:border-neutral-400-dark">
                  {t('pricing:membership_types.collab.description')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-auto mt-4 flex w-full pl-4">
          <a className="inline-flex items-center text-secondary-500 dark:text-secondary-300 md:mb-2 lg:mb-0" href='/pricing'>
            {t('pricing:learn_more')}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <button className="ml-auto flex rounded border-0 bg-primary-500 py-2 px-6 text-primary-50 hover:bg-primary-600 focus:outline-none dark:bg-primary-300 dark:text-primary-700 dark:hover:bg-primary-200">
            {t('pricing:apply')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
