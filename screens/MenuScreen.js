
import React from 'react';
import {View,Text,StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

// menu data
import coffeData from '../Data/Data';

// import actions
import { addToCart } from '../redux/CartReducer'

export default function Menu() {
    const cart = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();

    const addItemToCart = (item) => {
        dispatch(addToCart(item))
    }
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {coffeData.map((item)=>(
            <View key={item.id} style={styles.menuCard}>
                    <Image
                            source={{uri: item.img_uri}}
                            style={styles.imgCoffee}/>
                        <Text 
                            style={styles.coffeeType}
                            >{item.title}</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text>RM</Text>
                            <Text>{item.price}</Text>
                        </View>
                        
                        <TouchableOpacity style={styles.addCart}
                            onPress={() => addItemToCart(item)}
                            >
                            <Text style={{color: 'white'}}>Add to Cart</Text>
                            </TouchableOpacity>
                    </View>
        ))}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center'
    },
    menuCard: {
        height: 220,
        width: 300,
        backgroundColor: '#F8EDE3',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingVertical: 10,
        paddingBottom: 15,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 15
    },
    imgCoffee: {
        width: 100,
        height: 80,
        resizeMode: 'contain'
    },
    coffeeType: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Poppins'
    },
    addCart: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'grey',
        marginTop: 10,
        borderRadius: 10
    }
})