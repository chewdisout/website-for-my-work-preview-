const PROXY_CONFIG = [
  {
    context: [
      "/",
    ],
    target: "https://localhost:7166",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
