import fetch from '@/utils/fetch'

export function login(username, password) {
  return fetch({
    url: '/act-ucenter/user/login',
    method: 'post',
    // headers: {'application/x-www-form-urlencoded': 'X-Requested-With'},
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  })
}
