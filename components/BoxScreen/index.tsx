import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const BoxScreen = (props: any) => {
    const childrenGen:Array<number> = [1,2,3];

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>This is a Box Layout {childrenGen[1]}</Text>
            <Text style={styles.textStyle}>This is a Box Layout {childrenGen[2]}</Text>
            <Text style={styles.textStyle}>This is a Box Layout {childrenGen[3]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 5,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: "center",
        flexDirection:"row",
        height:200


    },
    textStyle:{
        borderWidth: 2,
        borderColor: 'red',

    }
}
);

export default BoxScreen;