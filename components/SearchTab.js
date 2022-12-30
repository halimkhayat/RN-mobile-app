import React from 'react';
import {View, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import  Icon from 'react-native-vector-icons/Ionicons';

export default function SearchTab() {
    return(
        <View style={{flexDirection: 'row', marginTop: 18}}>
            <GooglePlacesAutocomplete
             placeholder="Search our branch"
             styles={{
                textInput:{
                    backgroundColor: '#eee',
                    borderRadius: 25,
                    fontWeight: '800',
                    marginTop: 9
                },
                textInputContainer:{
                    backgroundColor: '#eee',
                    borderRadius: 45,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 13
                }
             }}

             renderLeftButton={() => (
                <View style={{marginLeft: 20}}>
                    <Icon name="location" size={24}/>
                </View>
             )}

             renderRightButton={() => (
                <View style={{
                    flexDirection: 'row',
                    marginRight: 20,
                    alignItems: 'center'
                }}>
                    <AntDesign name="clockcircle" size={24}/>
                </View>
             )}
            />
        </View>
    )
}