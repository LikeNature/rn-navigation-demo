import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainParamList } from "../types";
import Animated from "react-native-reanimated"
import ItemScreen from "./ItemScreen";

export const Width = Dimensions.get('window').width;
export const Height = Dimensions.get('window').height;
export const Padding = 10;


export const List = [
  { id : 0 , title : '오늘 할일' , content : '주말에 놀기  주말에 놀기 주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기주말에 놀기  주말에 놀기', color : '#7780dc'},
  { id : 1 , title : '내일 할일' , content : '일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 일요일 계획 v v 일요일 계획  일요일 계획', color : '#70c773'},
  { id : 2 , title : '월요일', content : ' 출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근', color : '#360b0b'},
  { id : 3 , title : '화요일', content : '출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근출근', color : '#222'},
  { id : 4 ,title : '수요일', content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', color : '#dca0ee'},
  { id : 5 ,title : '목요일', content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', color : '#eee1a0'},
  { id : 6 ,title : '금요일', content : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', color : '#eea0ca'},
]

export const Card = ({item})=> {
  const {title, content, color } = item
  return (

      <View style={{margin : Padding, padding : Padding, borderRadius :8, borderWidth : 2, borderColor : color }}>
          <Text>
            제목 : {title}
          </Text>
          <Text style={{marginVertical : Padding}} numberOfLines={1}>
            내용 : {content}
          </Text>
      </View>
  )
}


const HomeScreen = ({ navigation, route }: MainParamList<"HomeScreen">) => {



  const [ nubmer, setNumber ] = useState(0)
  const [ amount, setAmount ] = useState(false)
  const [ array, setArray ] = useState([])
  const [ viewArray, setViewArray] = useState([])
  const [ text, setText] = useState('')

  useEffect( () => {
   setArray([...List])
   setViewArray([...List])

   const filter = List.filter( (item) => item.content.indexOf(text) !== -1 || item.title.indexOf(text) !== -1)

   setViewArray([...filter])
   navigation.addEventListener( "focus", () => setText('') )

  }, [text])





  return (
    <SafeAreaView>
     <ScrollView>
       <View style={{alignItems : 'center', marginBottom : Padding*2}}>
          <Text style={{fontSize : 20}}>
            투두리스트
          </Text>
        </View>
        <View style={{margin : Padding}}>
        <TextInput onChangeText={(text) => setText(text)} placeholder="검색"/>
        </View>
        {viewArray.length === 0 && (
        <View style={{margin : Padding}}>
          <Text>
            검색결과가 없습니다.
            </Text>
            </View>)}
        {viewArray.map((item, i) =>
          <TouchableOpacity onPress={ () => navigation.navigate('SubTab', {screen : 'ItemScreen', params : {idx : item.id}})}>
            <Card item={item} />
          </TouchableOpacity>
        )}
     </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
