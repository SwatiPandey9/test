import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'



const Home = () =>
{
    return(
        <View>
            <Text style ={{backgroundColor:'green'}}>
                Check Report 
            </Text>
            <Button
            title = 'press me'
            onPress={() => alert("press on me")}/> 
        </View>

    );
};






export default Home;