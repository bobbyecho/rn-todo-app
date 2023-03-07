import http from "../../../../shared/libs/http";
import { Headline } from "../../domain/Headline";

async function getHeadlines() {
  const result = await http.get<Headline[]>('/headlines')
  return result.data
}

async function deleteHeadline(id: string) {
  return new Promise<void>((resolve) => {
    http.delete<Headline[]>(`/headlines/${id}`)
    resolve()
  })
}

export default {
  getHeadlines,
  deleteHeadline
}