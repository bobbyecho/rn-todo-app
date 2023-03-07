import React from "react"
import logger from "../../../../shared/libs/tracker"
import headlinesRepository from "../../data/headlinesRepository"
import { Headline } from "../../domain/Headline"

function useHeadlines() {
  const [headlines, setHeadlines] = React.useState<Headline[]>([])

  function fetchHeadlines() {
    headlinesRepository().getHeadlines().then((value) => {
      logger.headlines.trackEvent('fetch_headlines')
      setHeadlines(value)
    })
  }

  if (!headlines.length) {
    fetchHeadlines()
  }

  function deleteHeadline(headlineId: string) {
    headlinesRepository().deleteHeadline(headlineId).then(() => {
      logger.headlines.trackEventWithExtraData('delete_headline')({
        headlineId
      })
      fetchHeadlines()
    })
  }

  return { headlines, deleteHeadline }
}

export default useHeadlines