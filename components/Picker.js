import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function Picker(props) {
    return(
        <View style={stylo.container}>
            <HeaderBtn
                text='Pickup'
                activeBtn={props.activeBtn}
                setActiveBtn={props.setActiveBtn}
            />
            <HeaderBtn
                text='Delivery'
                activeBtn={props.activeBtn}
                setActiveBtn={props.setActiveBtn}
            />
        </View>
    )
};

const HeaderBtn = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor: props.activeBtn === props.text ? 'black':'white',
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 8
        }}

        onPress={() => props.setActiveBtn(props.text)}
    >
        <Text
            style={{
                color: props.activeBtn === props.text ? 'white':'black',
                fontSize: 15,
                fontWeight: 'bold'
            }}
        >{props.text}</Text>
    </TouchableOpacity>
)

const stylo = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
})