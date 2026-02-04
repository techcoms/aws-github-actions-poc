module.exports = {
  apps: [
    {
      name: "github-actions-poc",
      script: "app.js",
      instances: 1,
      autorestart: true,
      watch: false
    }
  ]
};
