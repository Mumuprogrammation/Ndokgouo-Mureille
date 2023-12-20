
// import React from 'react';
// import { View, Text, Image, StyleSheet,TextInput } from 'react-native';


// const SignInScreen = () => {
//     return (
// <View style={styles.container}>
//     <Text style={styles.title}> Login </Text>

// <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                    <TextInput
//                     style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, paddingLeft: 40, borderRadius: 10, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff'}}
//                       onChangeText={text => setText(text)}
//                       value={text}
//                        placeholder="e-mail"
//                   />
//                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                    <TextInput
//                     style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, paddingLeft: 40, borderRadius: 10, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff'}}
//                       onChangeText={text => setText(text)}
//                       value={text}
//                        placeholder="Password "
//                   />
//                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                    <TextInput
//                     style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, paddingLeft: 40, borderRadius: 10, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff'}}
//                       onChangeText={text => setText(text)}
//                       value={text}
//                        placeholder="Confirm Password"
//                   />
//                 </View>


//                 </View>

//                 </View>
//                 </View>

//     );
// }
// export default SignInScreen;


import React from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';

const bag = require('../assets/images/bag.png')

const SignInScreen = () => {
    return (
        <View style={styles.body}>
            <View style={styles.app}>

                <Image source={bag} style={{ width: 320, height: '80%', backgroundColor: 'beige', marginLeft: -14, borderRadius: 30, marginTop: -20, }} />
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: -50, borderRadius: 30 ,backgroundColor:'white', width: 320, marginLeft: -14, height:210}}>
                    <Text style={styles.text}>   Order Groceries</Text>
                    <Text style={styles.text}> and Get delivered</Text>
                    <Text style={styles.text}> in few minutes</Text>
                    <Text style={{ width:'50%', height:50, borderRadius:20, borderWidth:2, borderColor:'green', alignItems:'center', justifyContent:'center', display:'flex', marginTop:20, color:'green'}}> Get Started</Text>
                </View>
               

            </View>

        </View>


    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'rgb(92,93,92)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    app: {
        width: 320,
        height: 500,
        borderRadius: 30,
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: 'white',
        paddingLeft: '2%',
        paddingRight: '2%',

    },
    text: {

        fontFamily: 'arial',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
}
)
export default SignInScreen;