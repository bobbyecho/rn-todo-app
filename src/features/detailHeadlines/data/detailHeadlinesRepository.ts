import React from "react"
import detailHeadlinesApi from "./datasources/detailHeadlinesApi"

function detailHeadlineRepository() {
  React.useEffect(() => {
    console.log("detailHeadlineRepository")
  }, [])
  
  return {
    getDetailHeadlines(id: string) {
      return detailHeadlinesApi.getDetailHeadlines(id)
    }
  }
}

export default detailHeadlineRepository