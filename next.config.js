const withPWA = require('next-pwa')({
  dest: 'public',
  mode: 'production',
  register: true,
  disable: false,
  
})

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com'],
  }
})



