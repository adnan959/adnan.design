export default function sitemap() {
  const baseUrl = 'https://adnan.design';

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/workplace-events', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/ambient-coworking', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/horizon-workrooms', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/meta-portal', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/design-library', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/redesigning-the-litmus-application', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/building-a-design-system', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/designing-a-slack-app', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/building-a-chrome-extension', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/designing-for-a-conference', priority: 0.8, changeFrequency: 'yearly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
