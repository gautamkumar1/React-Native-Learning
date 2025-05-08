import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TextProps } from 'react-native/Libraries/Text/Text'


export default function Header(props: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<Text> & Readonly<TextProps>) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})