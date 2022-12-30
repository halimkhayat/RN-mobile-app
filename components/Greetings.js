import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';


export default function Greetings() {
  let day = new Date();
  let curTime = day.getHours()

  const timeOfTheDay = (curTime) => {
    if(curTime >= 4 && curTime <= 11){
      return 'Good Morning';
    }else if(curTime >= 12 && curTime <= 17){
      return 'Good Afternoon'
    }else if(curTime >= 18 && curTime <= 22){
      return 'Good Evening'
    } else {
      return 'Good Night'
    }
  }

  return(
      <View style={styles.greetBox}>
          <View>
            <Text style={styles.text1}>{timeOfTheDay(curTime)}</Text>
            <Text style={styles.text2}>Hi, Halim</Text>
          </View>
          <View>
            <Icon name="person" color="#4F8EF7" size={30}/>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  greetBox: {
    height: 120, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 20,
    backgroundColor: '#4B56D2',
    paddingTop: 30,
    paddingHorizontal: 10, 
    borderRadius: 10,
    width: 300
  },
  text1: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 30
  },
  text2: {
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 20
  }
})