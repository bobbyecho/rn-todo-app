import React from "react"
import logger from "../../../../shared/libs/tracker"
import detailHeadlineRepository from "../../data/detailHeadlinesRepository"
import { DetailHeadline } from "../../domain/DetailHeadline"

function useDetailHeadlines(id: string) {
  const [detailHeadlines, setDetailHeadlines] = React.useState<DetailHeadline | null>(null)

  function fetchDetailHeadlines() {
    detailHeadlineRepository().getDetailHeadlines(id).then((value) => {
      logger.headlines.trackEventWithExtraData('fetch_detail_headlines')({
        headlineId: id
      })
      setDetailHeadlines(value)
    })
  }

  if (!detailHeadlines) {
    fetchDetailHeadlines()
  }

  return {
    detailHeadlines
  }
}

export default useDetailHeadlines