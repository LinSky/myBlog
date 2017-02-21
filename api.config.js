let API_HOST
process.env.NODE_ENV === 'production' ? API_HOST = 'http://www.baidu.com' : API_HOST = 'http://127.0.0.1:3000/'

export default {
  HOST: API_HOST
}
