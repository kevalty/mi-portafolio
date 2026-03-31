import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      <title>Kevin Bedon — Software Developer</title>
      <meta name="description" content="Portfolio of Kevin Alexander Bedon Granizo — Software Engineer, AI Trainer, and Full Stack Developer from Ecuador." />
      <meta name="keywords" content="Kevin Bedon, Software Developer, React, Full Stack, AI Trainer, Ecuador" />
      <meta name="author" content="Kevin Alexander Bedon Granizo" />
      <meta property="og:title" content="Kevin Bedon — Software Developer" />
      <meta property="og:description" content="Software Engineer, AI Trainer & Full Stack Developer from Ecuador." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://kevinbedon.dev" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Kevin Bedon — Software Developer" />
      <meta name="twitter:description" content="Software Engineer, AI Trainer & Full Stack Developer from Ecuador." />
    </Helmet>
  );
}
