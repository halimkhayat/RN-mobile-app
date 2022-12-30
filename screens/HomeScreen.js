import React, {useState} from 'react';
import {View,Text, StyleSheet, SafeAreaView} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

// components
import Picker from '../components/Picker';
import Swiper from '../components/Swiper';
import Greetings from '../components/Greetings';
import SearchTab from '../components/SearchTab';
import Promotions from '../components/Promotions';


export default function Home() {

    const [activeBtn, setActiveBtn] = useState("Delivery")

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.boxOne}>
                <Picker activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
                <Greetings/>
            </View>
            <View style={styles.boxTwo}>
                <Swiper/>
                <SearchTab/>
            </View>
            <Promotions/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxOne: {
        padding: 22,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    boxTwo: {
        backgroundColor: 'white',
        paddingBottom: 20,
        justifyContent: 'center',
        paddingLeft: 20
    
    },

})