import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';

const back = require('../assets/images/back.png')
const partager = require('../assets/images/partager.png')
const heart = require('../assets/images/heart.png')
const orange = require('../assets/images/orange.png')

const profileScreen = () => {
    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.app}>
                <View >
                    <View style={styles.header}>
                        <Image source={back} style={styles.back} />
                        <Text style={styles.Texte12}> Product Detail</Text>
                        <Image source={partager} style={styles.partager} />



                    </View >
                    <View style={styles.sousHeader}>
                        <Text style={styles.Texte13}> Juicy Orange</Text>
                    </View>
                    <View >
                        <Text style={styles.Text12}> Sweet and Juicy</Text>
                    </View>
                    <View >
                        <Text> Loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                            mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                        </Text>
                    </View>
                    <View >
                        <View style={styles.position}>
                            <View style={styles.positionheart} >
                                <Image source={heart} style={styles.heart} />
                            </View>
                            <Text style={styles.Text14}> Find Nearest Store</Text>
                        </View>
                        <View >
                        </View>
                    </View>
                </View>
                <View style={styles.image}>
                    <View style={{ marginTop: -100, }}>
                        <Image source={orange} style={styles.orange} />
                    </View>
                    <Text style={{ marginLeft: -50 }}> Nutrition Facts</Text>
                    <View style={styles.font}>
                        <Text style={{ marginLeft: -40 }} > Fiber</Text>
                        <Text style={styles.texte}> 3g</Text>
                        <Text style={styles.texte}> 7%</Text>
                    </View >

                    <View style={styles.graphe}>
                        <View style={{ height: 6, width: '110px', backgroundColor: 'pink',borderRadius:5,marginLeft:-20 }}>
                        </View>
                        <View style={{ height: 6, width: '200px', backgroundColor: 'gray',borderRadius:5,marginLeft:-20 }}>
                        </View>
                    </View>
              
                    <View  style={styles.font}>
                        <Text style={{ marginLeft: -60 }} > Good sugar</Text>
                        <Text style={{marginLeft: '40px'}}> 12g</Text>
                        <Text style={styles.texte}> 5%</Text>
                    </View >

                    <View style={styles.graphe}>
                        <View style={{ height: 6, width: '150px', backgroundColor: 'pink',borderRadius:5,marginLeft:-20 }}>
                        </View>
                        <View style={{ height: 6, width: '160px', backgroundColor: 'gray',borderRadius:5,marginLeft:-20 }}>
                        </View>
                    </View>

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
        backgroundColor: 'beige',
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
    partager: {
        marginTop: '0%',
        padding: '10px',
        width: '10%',
        height: '50%',
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',

    },
    back: {
        marginTop: '0%',
        padding: '10px',
        width: '10%',
        height: '50%',
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',


    },
    sousHeader: {
        marginTop: 50,
        width: 'auto',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Texte12: {
        fontFamily: 'arial',
        fontSize: '25px',
        fontWeight: 'bold',

    },
    Texte13: {
        fontFamily: 'arial',
        fontSize: '25px',
        fontWeight: 'bold',
        marginBottom: 30,

    },

    Text12: {
        fontFamily: 'arial',
        fontSize: 15,
        color: 'pink',


    },
    Text14: {
        fontFamily: 'arial',
        fontSize: 20,
        backgroundColor: 'pink',
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'pink',
        paddingTop: 10,
    },

    position: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,

    },

    positionheart: {
        marginRight: 10,



    },

    heart: {
        marginTop: '0%',
        padding: 20,
        width: 20,
        height: '50%',
        resizeMode: 'contain',
        backgroundColor: 'beige',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'pink',



    },
    orange: {
        width: 150,
        height: 150,
        fontFamily: 'arial',
        fontSize: '15px',
        marginTop: '40px',
        fontFamily: 'arial',
        fontWeight: 'bold',
        // marginBottom: '40px',
        // backgroundColor: 'red',

    },
    image: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        alignItems: 'center',
        width: 320,
        marginLeft: -30,
        height: '35%',
        marginTop: 100,

    },
    font: {
        display: 'flex',
        flexDirection: 'row',


    },
    texte: {

        marginLeft: '100px'
    },
    graphe: {
        display: 'flex',
        flexDirection: 'row',
        marginTop:5,
        
    },

})
export default profileScreen;
