/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */




// import React from 'react';
// import { Text, View} from 'react-native';

import Home from  './src/screen/Home' ;
// import Link from  './src/component/Link;





// const App = () => {
  
//   return (
//       <View styles={{flex:1, justifyContent:'center', alignItems : 'center'}}>
//         <Sample />
//         {/* <Home />
//         <Link />
//         <Text></Text> */}
//       </View>
//   );
// }
// // console.log("here we link file from source folder");

// export default App;
import React from 'react';
import { Text, View , StyleSheet} from 'react-native';

import Sample from "./src/screen/sample";



const YourApp = () => {
  return (
    <View style ={styles.container}>
      <Home />
      <Sample />
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

export default YourApp;






