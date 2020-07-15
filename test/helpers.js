const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'David J Lowes',
    heading: 'ME',
  },
  {
    route: '/about',
    title: 'About | David J Lowes',
    heading: 'MORE ABOUT ME',
  },
  {
    route: '/worked-with',
    title: 'Clients | David J Lowes',
    heading: 'WHO I"VE WORKED WITH',
  },
  {
    route: '/writing',
    title: 'Essays | David J Lowes',
    heading: 'ESSAYS',
  },
  {
    route: '/top-10',
    title: 'Top 10s | David J Lowes',
    heading: 'TOP 10s',
  },
];

export { pages, randomString };
