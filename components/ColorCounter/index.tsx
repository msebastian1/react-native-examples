import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

type RGBType = {
    red: number, green: number, blue: number
}

type RGBKeyType = keyof RGBType;

const COLOR_STEP = 50;

const ColorCounter:React.FC = () => {
    const [colors, setColors] = useState({ red: 120, green: 120, blue: 120 });
    const updateColor = (title:string,value:number) => {
        const newObj = Object.keys(colors).reduce((acc,red)=>{
            acc[red] = red === title ? value : colors[red];
            return acc;
        },{red:0,green:0,blue:0})
        setColors(newObj);
    };

    return (
        <FlatList
            keyExtractor={index => index}
            data={Object.keys(colors)}
            renderItem={({ index }) => {
                const color = Object.keys(colors)[index];
                const value:number = colors[color]
                return <ColorComponent title={color} value={value} updateColor={updateColor} />
            }}
        />
    )
}

type Props = {
    title: string,
    value: number,
    updateColor:(title: string, value: number)=> void,
}

const ColorComponent = (props: Props) => {
    const { title,value,updateColor} = props;
    const colorVal = (colorName:string) => {
        let r = 0;
        let g = 0;
        let b = 0;
        
        switch(colorName){
            case 'red':
                r = value;
                break;
            case 'blue':
                b = value;
                break;
            case 'green':
                g = value;
                break;
        }

        return `rgb(${r},${g},${b})`;
    }
    return (<View style={{width:100, height:100, backgroundColor:colorVal(title)}}>
        <Text>{title}</Text>
        <Button title='-' onPress={()=>(value-COLOR_STEP > 0) && updateColor(title,value-COLOR_STEP)}/>
        <Button title='+' onPress={()=>(value+COLOR_STEP < 256) && updateColor(title,value+COLOR_STEP)}/>

    </View>);
}

const Layout = StyleSheet.create({

})

export default ColorCounter;