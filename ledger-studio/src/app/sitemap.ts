import { MetadataRoute } from 'next';
import { cmsData } from '@/lib/cms-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ledgerstudio.ai';

    // Static Routes
    const routes = [
        '',
        '/about',
        '/services',
        '/pricing',
        '/blog',
        '/case-studies',
        '/contact',
        '/resources',
        '/videos',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic Blog Posts
    const blogRoutes = cmsData.posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic Services
    const serviceRoutes = cmsData.services.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [...routes, ...blogRoutes, ...serviceRoutes];
}
