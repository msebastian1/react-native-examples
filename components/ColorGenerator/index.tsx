import React, { useState } from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors,setColors] = useState([{r:0,g:255,b:200}]);

    const generateColor = () =>{
        const r = Math.random() * 256;
        const g = Math.random() * 256;
        const b = Math.random() * 256;
        setColors([...colors,{r,g,b}])
    }

    return (
        <View>
            <Button title="Add a color" onPress={()=>generateColor()}/>
            <FlatList
                keyExtractor={item=>`${item.r+item.g+item.b}`}
                data={colors}
                renderItem={({index})=>{
                    // item === 'rgb(0,0,0)'
                   return  <View style={{height:100, width:100, backgroundColor: `rgb(${colors[index].r},${colors[index].g},${colors[index].b})`}} />
                }}
            
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorScreen;
