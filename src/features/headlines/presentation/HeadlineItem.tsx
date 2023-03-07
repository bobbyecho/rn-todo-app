import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

type HeadlineItemProps = {
  deleteAction: () => void;
  navigate: () => void;
  text: string;
}

function HeadlineItem(props: HeadlineItemProps) {
  const { text, deleteAction, navigate } = props;

  return (
    <Pressable style={styles.default} onPress={navigate}>
      <View style={styles.headlineView}>
        <Text style={styles.headlineText}>{text}</Text>
      </View>
      <View>
        <Text style={styles.deleteText} onPress={deleteAction}>delete</Text>
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    marginBottom: 15,
    paddingBottom: 5,
  },
  headlineView: {
    width: '80%'
  },
  headlineText: {
    color: 'black'
  },
  deleteText: {
    color: 'red'
  }
});

export default HeadlineItem;