import React, {useEffect} from 'react';
import {View,Text, ScrollView, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector, useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeCart } from '../redux/CartReducer';



export default function Cart() {
    // access state in redux
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    console.log(cart)

     // fetch realtime database to firebase
    const dbCart = useSelector(state => state.cart)
    useEffect(() => {
        fetch('https://app2-6e19a-default-rtdb.firebaseio.com/Cart.json',{
        method: "PUT",
        body: JSON.stringify(dbCart)
        })
    },[dbCart])

    // total price for the coffee
    let total = 0
    const thePrice = useSelector(state => state.cart.cart)
    thePrice.forEach(item => {
        total += item.totalPrice
    })
    // decrement item
    const decrease = (item) => {
        if(item.quantity == 1){
            dispatch(removeCart(item))
        } else {
            dispatch(decrementItem(item))
        }
    };
    // increment item
    const increase = (item) => {
        dispatch(incrementItem(item))
    };
    // remove item
    const removeFromCart = (item) => {
        dispatch(removeCart(item))
    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {cart.map((item, index) => (
                <View style={styles.cartBox} key={index}>
                    <Image 
                        source={{uri: item.img_uri}}
                        style={styles.img}/>
                    <View style={styles.cartDetails}>
                        <View style={{ alignItems: 'flex-end'}}>
                            <Text>{item.title}</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text>RM</Text>
                                <Text>{item.price}</Text>
                            </View>
                        </View>
                        <View style={styles.incDecBtn}>
                                <TouchableOpacity
                                    onPress={() => decrease(item)}
                                >
                                    <Icon name='remove-circle' size={24} color='#4B56D2'/>
                                </TouchableOpacity>
                                <Text style={{paddingHorizontal: 5}}>{item.quantity}</Text>
                                <TouchableOpacity
                                    onPress={() => increase(item)}
                                >
                                    <Icon name='add-circle' size={24} color='#4B56D2'/>
                                </TouchableOpacity>  
                            </View>
                            <View style={{alignItems: 'flex-end'}}>
                                <TouchableOpacity
                                onPress={() => removeFromCart(item)}
                                style={styles.removeCart}
                            >
                                <Text>Remove cart</Text>
                            </TouchableOpacity>
                            </View>
                    </View>
            </View>
            ))}
         </ScrollView>
         <View style={styles.cartPrize}>
                <Text style={styles.totalPrice}>Total:</Text>
                <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center', width: 240}}>
                    <Text>RM</Text>
                    <Text style={styles.totalPrice}>{total}</Text>
                </View>
                <Button
                title="Checkout"
                color='grey'
                onPress={() => console.log('checkout')}
                />
            </View>
        </SafeAreaView>
      
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignSelf: 'center',
        marginTop: 10
    },
    cartBox: {
        height: 150,
        width: 280,
        backgroundColor: '#F8EDE3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'black',
    },
    img: {
        width: 100,
        height: 80,
        resizeMode: 'contain'
    },

    cartDetails: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginRight: 20

    },
    incDecBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 8,
        alignItems: 'center',
    },
    removeCart: {
        backgroundColor: 'lightgrey',
        borderColor: 'black',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 3
    },
    cartPrize: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20, 
        borderRadius: 10,
        alignSelf: 'center',
        position: 'absolute', 
        bottom: 0, 
        backgroundColor: 'white'
    },
    totalPrice: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
})