import React, { useState } from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';


export default function Swiper() {

    const [swiperData, setSwiperData] = useState([
        {
            title: 'Fast Delivery',
            description: 'We deliver as fastest as lightning speed!',
            image: require("../assets/undraw_delivery_truck_vt6p.png")
        },
        {
            title: "Quality Coffee",
            description: "Hand picked premium bean for you",
            image: require("../assets/undraw_barista_re_fm8w.png")
        },
        {
            title: "No Waiting",
            description: "Make order easy with our app. No more queue",
            image: require("../assets/undraw_wait_in_line_o2aq.png")
        },
        {
            title: "For friends & Family",
            description: "Enjoy your coffee with your frineds or family",
            image: require("../assets/undraw_special_event_-4-aj8.png")
        }

    ])
    return(
            <View>
                <FlatList
                    data={swiperData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40, borderColor: 'black', borderStyle:'solid', marginBottom: 10}}>
                            <Image
                                source={item.image}
                                style={{width: 100, height: 120, borderRadius: 5}}
                                resizeMode='contain'
                            />
                            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>{item.title}</Text>
                                <Text style={{fontSize: 15, fontWeight: '500', marginTop: 5}}>{item.description}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
    )
}