import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Peony yazisi kaldirildi; indeksli eski adres olu 404 yemesin diye
  // insights listesine yonlendiriliyor.
  async redirects() {
    return [
      {
        source: '/:locale(tr|en|de)/insights/peony-collective-digital-aesthetics',
        destination: '/:locale/insights',
        permanent: true,
      },
      {
        source: '/insights/peony-collective-digital-aesthetics',
        destination: '/insights',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
