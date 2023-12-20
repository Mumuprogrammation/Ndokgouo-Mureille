// import React from 'react';
// import { View, Text, Image, StyleSheet,TextInput } from 'react-native';


// const SignUpScreen = () => {
//     return (
//       <View style={styles.container}>
//     <Text style={styles.title}>Signup </Text>

// <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                    <TextInput
//                     style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, paddingLeft: 40, borderRadius: 10, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff'}}
//                       onChangeText={text => setText(text)}
//                       value={text}
//                        placeholder="Enter Your Name"
//                   />
//                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                    <TextInput
//                     style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, paddingLeft: 40, borderRadius: 10, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff'}}
//                       onChangeText={text => setText(text)}
//                       value={text}
//                        placeholder="Enter Your e-mail"
//                   />
//                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                    <TextInput
//                     style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, paddingLeft: 40, borderRadius: 10, marginTop: '10px', marginBottom: '10px', backgroundColor: '#fff'}}
//                       onChangeText={text => setText(text)}
//                       value={text}
//                        placeholder="Enter your Password"
//                   />
//                 </View>


//                 </View>

//                 </View>
//              </View>
//     );
// }
// export default SignUpScreen;


import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Entypo, Ionicons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const fraise = require('../assets/images/fraise.png')
const orange = require('../assets/images/orange.png')
const heart = require('../assets/images/heart.png')
const pomme = require('../assets/images/pomme.png')
const raisin = require('../assets/images/raisain.png')



const SignUpScreen = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.app}>
                <View style={styles.header}>
                    <AntDesign name="leftcircleo" size={24} color="black" />
                    <SimpleLineIcons name="bag" size={24} color="black" />

                </View >
                    <View style={styles.text}>
                        <Text > My</Text>
                        <Text > Order</Text>
                    </View>

              
                <View style={styles.sousSousHeader}>
                    <View style={styles.orange}>
                        <Image source={orange} style={styles.orange} />
                    </View>
                    <View style={styles.text}>
                        <Text> 1 x</Text>
                    </View>
                    <View style={styles.text2}>
                 <Text>Orange  </Text>
                        <Text>  $10</Text>
                    </View>

                    <View style={styles.bin}>
                        <Ionicons name="trash-bin-outline" size={24} color="black" />
                    </View>

                </View>
                <View style={styles.sousSousHeader}>
                    <View style={styles.fraise}>
                        <Image source={fraise} style={styles.fraise} />
                    </View>
                    <View style={styles.text}>
                        <Text> 1 x</Text>
                    </View>
                    <View style={styles.text2}>
                        <Text>  Strawberry</Text>
                        <Text>  $12</Text>
                    </View>

                    <View style={styles.bin}>
                        <Ionicons name="trash-bin-outline" size={24} color="black" />
                    </View>

                </View>

                <View style={styles.sousSousHeader}>
                    <View style={styles.pomme}>
                        <Image source={pomme} style={styles.pomme} />
                    </View>
                    <View style={styles.text}>
                        <Text> 1 x</Text>
                    </View>
                    <View style={styles.text2}>
                        <Text>   Green Apple</Text>
                        <Text>    $13</Text>
                    </View>

                    <View style={styles.bin}>
                        <Ionicons name="trash-bin-outline" size={24} color="black" />
                    </View>

                </View>

                <View style={styles.sousSousHeader}>
                    <View style={styles.raisin}>
                        <Image source={raisin} style={styles.raisin} />
                    </View>
                    <View style={styles.text}>
                        <Text> 1 x</Text>
                    </View>
                    <View style={styles.text2}>
                     <Text>    Grape          </Text>
                        <Text>    $15</Text>
                    </View>

                    <View style={styles.bin}>
                        <Ionicons name="trash-bin-outline" size={24} color="black" />
                    </View>

                </View>

                <View style={{ marginTop: 50}}>
                        <Text> Total Price                                                   $50</Text>
                </View>
                
                <View style={{ marginTop: 50, alignItems:'center', justifyContent: 'center', backgroundColor:'pink', height:50, width:'80%', borderRadius:10,marginLeft:'10%'}}>
                        <Text> Payement </Text>
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
    header: {
        width: 'auto',
        height: '6%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    orange: {
        marginTop: '0%',
        padding: '10px',
        width: '20%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: 'beige',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        display:'flex'

    },

    fraise: {
        marginTop: '0%',
        padding: '10px',
        width: '20%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: 'pink',
        borderRadius: 5,
        borderWidth: 2,
       borderColor: 'pink',
       display:'flex'


    },
    pomme: {
        marginTop: '0%',
        padding: '10px',
        width: '20%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: 'beige',
        borderRadius: 5,
        borderWidth: 2,
         borderColor: 'beige',
         display:'flex'
       


    },

    raisin: {
        marginTop: '0%',
        padding: '10px',
        width: '20%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: 'skyblue',
        borderRadius: 5,
       // borderWidth: 2,
       borderColor: 'skyBblue',
       alignItems:'center',
       display:'flex'


    },
    // sousHeader: {

    //     width: 'auto',
    //     height: '10%',
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },

    text:{
        fontFamily: 'arial',
        fontSize: '30px',
       // fontFamily: 'arial',
        fontWeight: 'bold',
   



    },

    sousSousHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:40,
       
    },

})
export default SignUpScreen;

