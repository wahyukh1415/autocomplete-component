import { get } from "@/utils/http"


export async function search(query) {
  return get({
    url: 'saruman/v1/buyer/query/region/search',
    params: {
      keyword: query
    }
  })
}