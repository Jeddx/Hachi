import React from 'react';
import {Image, StyleSheet} from 'react-native';
//const image = "@/assets/images/honey-bee.jpg";

export default function ImageBG() {
  return (
    <Image
        source={require('@/assets/images/honey-bee.jpg')}
    />
  );
}