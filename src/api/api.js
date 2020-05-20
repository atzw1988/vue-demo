import api from './index'
import { axios } from '@/utils/request'

export function login (data) {
  data.orgId = api.orgId
  return axios({
    url: api.login,
    data,
    heads: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'post'
  })
}
