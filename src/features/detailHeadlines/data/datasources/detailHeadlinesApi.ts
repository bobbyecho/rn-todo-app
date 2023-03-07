import http from "../../../../shared/libs/http";
import { DetailHeadline } from "../../domain/DetailHeadline";

async function getDetailHeadlines(id: string) {
  const result = await http.get<DetailHeadline>(`/detail-headlines/${id}`)
  return result.data
}

export default {
  getDetailHeadlines
}