const title = 'Daniel Romero - Desarrollador Full Stack Javascript';
const description = 'Déjame mostrarte lo que hago, compartir mi conocimiento y que tu experiencia sea una estancia corta y agradable';

const SEO = {
  title,
  description,
  canonical: 'https://danieldeveloper.dev',
  openGraph: {
    type: 'website',
    locale: 'es_IE',
    url: 'https://danieldeveloper.dev',
    title,
    description,
    images: [
      {
        url: 'https://danieldeveloper.dev/og.png',
        alt: title,
        width: 1200,
        height: 700
      }
    ]
  }
};

export default SEO;