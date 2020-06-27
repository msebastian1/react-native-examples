import React from 'react';
import { View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';


type Props = {
    navigation: StackNavigationProp<RootStackParamList,'Home'>
}

const Home = (props:Props) => {
    const {navigation} = props;
    const menu:['Generator','Counter', "CounterReducer", "TextScreen", "BoxScreen"] = ['Generator','Counter', 'CounterReducer', "TextScreen", "BoxScreen"];
    return (
        <View>
           <FlatList 
                keyExtractor={index=>index}
                data={menu}
                renderItem={({index})=><Button onPress={()=>navigation.navigate(menu[index])} title={menu[index]}/>}
           />
        </View>
    )
}

export default Home;