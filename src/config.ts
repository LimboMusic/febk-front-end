const currentOrigin = window.location.origin

// Node.js 后端
const API_HOST = (() => {
  switch (currentOrigin) {
    case 'https://datalynn.com':
      return 'https://api.datalynn.com'
    case 'https://datalynn.ai':
    case 'http://datalynn.ai':
      return 'https://cn.datalynn.com:8080'
    default:
      return 'https://api.datalynn.com'
  }
})()

// FastAPI 后端
const SERVER_ENDPOINT = (() => {
  switch (currentOrigin) {
    case 'https://datalynn.com':
      return 'https://copilot-api.datalynn.com'
    case 'https://datalynn.ai':
    case 'http://datalynn.ai':
      return 'https://copilot-api.datalynn.ai'
    default:
      return 'https://copilot-api.datalynn.com'
  }
})()

export const ENV = 'product'
export { API_HOST, SERVER_ENDPOINT }
