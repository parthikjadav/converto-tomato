import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://converto-tomato.vercel.app';
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compress`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Converter pages
  const converters = [
    // SVG Converters
    'svg-to-png',
    'svg-to-jpg',
    'svg-to-webp',
    'svg-to-avif',
    'svg-to-ico',
    // JPG Converters
    'jpg-to-png',
    'jpg-to-webp',
    'jpg-to-avif',
    'jpg-to-svg',
    'jpg-to-ico',
    // PNG Converters
    'png-to-jpg',
    'png-to-webp',
    'png-to-avif',
    'png-to-svg',
    'png-to-ico',
    // WebP Converters
    'webp-to-png',
    'webp-to-jpg',
    'webp-to-avif',
    'webp-to-svg',
    'webp-to-ico',
  ];

  const converterPages = converters.map((converter) => ({
    url: `${baseUrl}/convert/${converter}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...converterPages];
}
