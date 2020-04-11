module.exports = {
  siteTitle: 'David Sullivan | Software Engineer',
  siteDescription: 'David Sullivan is a full-stack software engineer based in Hanover, NH.',
  siteKeywords:
    'David Sullivan, David, Sullivan, dsullivan, software engineer, full-stack engineer, developer, javascript, creare, fullstack, full-stack',
  siteUrl: 'https://www.dsully.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'David Sullivan',
  location: 'Hanover, NH',
  email: 'DWSully1992@gmail.com',
  github: 'https://github.com/dsullivan-creare',
  gitlab: 'https://gitlab.com/dsullivan-creare',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dsullivan-creare',
    },
    {
      name: 'GitLab',
      url: 'https://gitlab.com/dsullivan-creare',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/david-sullivan-a0b94a81/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
