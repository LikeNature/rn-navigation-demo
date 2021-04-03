import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet , TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubParamList } from "../types";
import {ListProps, List, Card, Padding} from './HomeScreen'
import Animated ,{ interpolate, Extrapolate} from "react-native-reanimated";
import {useValue, useTransition } from 'react-native-redash/src/v1'


const ItemScreen = ({ navigation, route }: SubParamList<"ItemScreen">) => {

  const idx = route.params?.idx?? 0
  const [card, setCard] = useState<ListProps | any>({})
  const [long, setLong] = useState(false)
  const progress = useTransition(long);

  const height = interpolate( progress , {
    inputRange : [0 , 0.5 , 1],
    outputRange : [80, 160, 240],
    extrapolate : Extrapolate.CLAMP
  })

  useEffect( () => {
    const Items = [...List ]
    const cards = Items.filter((item) => item.id === idx)[0] ?? {};
    setLong(false)
    setCard(cards)


  },[idx])

  const Card = ({item})=> {
    const {title, content, color } : ListProps = item
    return (
   
        <Animated.View style={{height : height, margin : Padding, padding : Padding, borderRadius :8, borderWidth : 2, borderColor : color }}>
            <Text>
              제목 : {title}
            </Text>
            <Text style={{marginVertical : Padding}} >
              내용 : {content}
            </Text>
        </Animated.View>
    )
  }


  return (
    <SafeAreaView>
       <View style={{alignItems : 'center', marginBottom : 20}}>
          <Text style={{fontSize : 20}}>
            상세보기
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity = {1}
          onPress={() => setLong( p => !p)}
          onLongPress ={ () => navigation.navigate('HomeScreen')}>
          <Card item = {card}/>  
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ItemScreen;
