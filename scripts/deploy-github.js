const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/dsullivan-creare/dsullivan-creare.github.io.git',
  },
  () => {
    console.log('Deploy Complete!');
  },
);
