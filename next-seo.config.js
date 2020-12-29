const title = 'Daniel Romero - Desarrollador full stack';
const description = 'Déjame mostrarte lo que hago, compartir mi conocimiento y que tu experiencia sea una estancia corta y agradable';

const SEO = {
  title,
  description,
  canonical: 'https://dromero.com',
  openGraph: {
    type: 'website',
    locale: 'es_IE',
    url: 'https://dromero.com',
    title,
    description,
    images: [
      {
        url: 'https://dromero.com/og.png',
        alt: title,
        width: 1200,
        height: 700
      }
    ]
  }
};

export default SEO;