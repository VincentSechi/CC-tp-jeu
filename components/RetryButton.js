import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import style from '../style';

export default function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={style.retryButton} onPress={onPress}>
      <Text style={style.retryButtonText}>{title}</Text>
    </Pressable>
  );
}