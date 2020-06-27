import React, { useState, useReducer } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

type RGBType = {
    red: number, green: number, blue: number
}

type RGBKeyType = keyof RGBType;

const COLOR_STEP = 50;

// Update the state for each color based on action 
const colorReducer = (state, action) => {
    switch (action.type) {
        case 'red':
            return { red: state.red + action.payload, green: state.green, blue: state.blue };
            break;
        case 'blue':
            return { red: state.red, green: state.green, blue: state.blue + action.payload };
        case 'green':
            return { red: state.red, green: state.green + action.payload, blue: state.blue };
        default:
            return state;
    }
}

const ColorCounterWithReducer: React.FC = () => {
    const [colorsState, colorDispatch] = useReducer(colorReducer, { red: 120, green: 120, blue: 120 })

    return (
        <FlatList
            keyExtractor={index => index}
            data={Object.keys(colorsState)}
            renderItem={({ index }) => {
                const color = Object.keys(colorsState)[index];
                const value: number = colorsState[color]
                return <ColorComponent title={color} value={value} colorDispatch={colorDispatch} />
            }}
        />
    )
}

type Props = {
    type: string,
    payload: number,
    colorDispatch: (action:{type: string, payload: number}) => void,
}

const ColorComponent = (props: Props) => {
    const { title, value, colorDispatch } = props;
    const colorVal = (colorName: string) => {
        let r = 0;
        let g = 0;
        let b = 0;

        switch (colorName) {
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
    return (<View style={{ width: 100, height: 100, backgroundColor: colorVal(title) }}>
        <Text>{title}</Text>
        <Button title='-' onPress={() => (value - COLOR_STEP > 0) && colorDispatch({type:`change_${title}`, payload:-COLOR_STEP})} />
        <Button title='+' onPress={() => (value + COLOR_STEP < 256) && colorDispatch({type:`change_${title}`,payload: COLOR_STEP})} />

    </View>);
}

const Layout = StyleSheet.create({

})

export default ColorCounterWithReducer;