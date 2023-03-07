import { useRoute } from '@react-navigation/native';
import React from 'react'
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import useDetailHeadlines from './hooks/useDetailHeadlines';

function DetailHeadlines() {
  const { params } = useRoute()
  // @ts-ignore
  const { id, headline } = params 
  const { detailHeadlines } = useDetailHeadlines(id)

   return (
    <ScrollView>
      <Button onPress={() => {
        throw new Error('Throw crash - demo todo app')
      }} title="Force Crash" />
      
      <View style={styles.detailHeadlinesContainer}>
        <Text style={styles.title}>{headline}</Text>
        <Text>{detailHeadlines?.information}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  detailHeadlinesContainer: {
    padding: 20
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 27,
    marginBottom: 20
  }
})

export default DetailHeadlines