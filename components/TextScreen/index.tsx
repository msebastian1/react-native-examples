import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [textState, setTextState] = useState("")
    return (
        <View>
            <Text>Your Name:</Text>
            <TextInput autoCorrect={false}
                autoCapitalize="none" value={textState}
                placeholder="Type here.." style={Layout.input}
                onChangeText={(e) => setTextState(e)} />
            <Text>Your Name is {textState}</Text>

        </View>
    );
}

export default TextScreen;

const Layout = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1.2
    }
});
