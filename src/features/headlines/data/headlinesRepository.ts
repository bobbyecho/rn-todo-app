import headlinesApi from './datasources/headlinesApi'

function headlinesRepository() {
  return {
    getHeadlines() {
      return headlinesApi.getHeadlines()
    },
    deleteHeadline(id: string) {
      return headlinesApi.deleteHeadline(id)
    }
  }
}

export default headlinesRepository