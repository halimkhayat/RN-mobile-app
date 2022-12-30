import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Promotions() {
    return(
        <View>
            <Image
                source={require('../assets/image/promo176.jpg')}
                resizeMode='cover'
                style={{height: 200, left:0, right: 0}}
            />
        </View>
    )
}