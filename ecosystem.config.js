module.exports = {
    apps: [
      {
        name: 'vite-app',
        script: 'serve',
        args: '-s dist -l 3000',
        env: {
          NODE_ENV: 'production'
        }
      }
    ]
  };
  