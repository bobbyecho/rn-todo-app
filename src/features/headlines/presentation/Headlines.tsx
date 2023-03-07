import React from "react"
import { useNavigation } from "@react-navigation/native"
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native"
import { Headline } from "../domain/Headline"
import HeadlineItem from "./HeadlineItem"
import useHeadlines from "./hooks/useHeadlines"

function Headlines() {
  const { headlines, deleteHeadline } = useHeadlines()
  const { navigate } = useNavigation<any>()

  const renderItem: ListRenderItem<Headline> = React.useCallback(({ item }) => {
    function deleteAction() {
      deleteHeadline(item.id)
    }

    function navigateToDetail() {
      navigate('detail-headlines', { id: item.id, headline: item.headline })
    }

    return (
      <HeadlineItem
        key={item.id}
        text={item.headline}
        navigate={navigateToDetail}
        deleteAction={deleteAction}
      />
    )
  }, [])
 
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <Text style={styles.title}>Headlines</Text>
      }
      contentContainerStyle={styles.container}
      data={headlines}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
    marginBottom: 20
  },
  container: {
    padding: 20
  }
})

export default Headlines