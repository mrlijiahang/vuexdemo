import fetch from '../fetch'
export function getapi(msg) {
  return fetch({
    url: 'category/category_list',
    data: msg
  })
}
