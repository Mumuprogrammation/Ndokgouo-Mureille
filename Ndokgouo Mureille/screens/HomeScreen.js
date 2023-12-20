import React, { useState } from 'react';
import { Entypo, AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, Button, TouchableOpacityBase, TouchableOpacity } from 'react-native';


const menu = require('../assets/images/menu.png')
const orange = require('../assets/images/orange.png')
const raisin = require('../assets/images/raisain.png')
const search = require('../assets/images/search.png')
const person = require('../assets/images/person.png')
const pp = require('../assets/images/pp.jpg')
const panier = require('../assets/images/panier.png')
const boutique = require('../assets/images/boutique.png')
const boutique2 = require('../assets/images/boutique2.png')


const slides = [{

    type: 'View',
    content: (
        <View style={{
            marginTop: '60px',
            height: 10,
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 20,
            padding: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '150px',
        }}>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
                marginLeft: -150
            }} >Orange</View>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
            }} >Grapes</View>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
            }} >Watermelon</View>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
            }} >Mangos</View>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
            }} >Pineaple</View>
        </View>
    ),



}]

const slides2 = [{
    type: 'View',
    content: (
        <View style={{
            backgroundColor: 'pink',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
        }}>

            <Image source={orange} style={{
                backgroundColor: 'pink',
                width: 80,
                height: 80,
                display: 'flex',
                marginHorizontal: '140px',
                borderColor: '#fff',
                borderRadius: 60,
                borderWidth: 0,
                marginLeft: 50,

            }} />
            <Text style={{
                marginTop: '40px',
                fontFamily: 'arial',
                fontSize: '15px',
                marginTop: '40px',
                fontFamily: 'arial',
                fontWeight: 'bold',
                marginBottom: '40px',
            }}>Orange                  $10</Text>

            <View style={{
                display: 'flex',
                marginLeft: 50,
                width: 90,
                height: 20,
                justifyContent: 'center',
                backgroundColor: 'orange',
                borderRadius: '20px',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: -30,
            }}>ADD
            </View>


        </View>

    ),

},

{
    type: 'View',
    content: (
        <View style={{
            backgroundColor: 'purple',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
        }}>

            <Image source={raisin} style={{
                backgroundColor: 'purple',
                width: 80,
                height: 80,
                display: 'flex',
                marginHorizontal: '140px',
                borderColor: '#fff',
                borderRadius: 60,
                borderWidth: 0,
                marginLeft: 50,

            }} />

            <Text style={{
                marginTop: '40px',
                fontFamily: 'arial',
                fontSize: '15px',
                marginTop: '40px',
                // fontFamily: 'arial',
                fontWeight: 'bold',
                marginBottom: '40px',
            }}>Grapes                   $10</Text>

            <View style={{
                display: 'flex',
                marginLeft: 50,
                width: 90,
                height: 20,
                justifyContent: 'center',
                backgroundColor: 'blue',
                borderRadius: '20px',
                alignContent: 'center',
                alignItems: 'center',
                marginTop: -30

            }}>ADD
            </View>
        </View>
    ),



},
];
const slides3 = [{

    type: 'View',
    content: (
        <View style={{
            marginTop: -10,
            height: 1,
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 20,
            padding: '5%',

            alignItems: 'center',
            marginLeft: '2px',
        }}>

            <View style={{ width: 250, height: 70, borderRadius: 15, borderColor: 'pink', borderWidth: 2, marginLeft: -50 }} >
                <View style={{ display: 'flex', flexDirection: 'row', }} >
                    <Image source={boutique} style={{ width: 50, height: 30, marginTop: 10, marginLeft: 30 }} />
                    <View style={{ marginTop: 7 }}>
                        <Text> Xender Shop</Text>
                        <Text> 2356 Toltricon Street</Text>
                        <Text> 9AM- 7 PM</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: 250, height: 70, borderRadius: 15, borderColor: 'pink', borderWidth: 2, marginLeft: 5 }} >
                <View style={{ display: 'flex', flexDirection: 'row', }} >
                    <Image source={boutique2} style={{ width: 50, height: 30, marginTop: 10, marginLeft: 30 }} />
                    <View style={{ marginTop: 7 }}>
                        <Text> Xender Shop</Text>
                        <Text> 2356 Toltricon Street</Text>
                        <Text> 9AM- 7 PM</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: 250, height: 70, borderRadius: 15, borderColor: 'pink', borderWidth: 2, marginLeft: 5 }} >
                <View style={{ display: 'flex', flexDirection: 'row', }} >
                    <Image source={boutique} style={{ width: 50, height: 30, marginTop: 10, marginLeft: 30 }} />
                    <View style={{ marginTop: 7 }}>
                        <Text> Xender Shop</Text>
                        <Text> 2356 Toltricon Street</Text>
                        <Text> 9AM- 7 PM</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: 250, height: 70, borderRadius: 15, borderColor: 'pink', borderWidth: 2, marginLeft: 5 }} >
                <View style={{ display: 'flex', flexDirection: 'row', }} >
                    <Image source={boutique} style={{ width: 50, height: 30, marginTop: 10, marginLeft: 30 }} />
                    <View style={{ marginTop: 7 }}>
                        <Text> Xender Shop</Text>
                        <Text> 2356 Toltricon Street</Text>
                        <Text> 9AM- 7 PM</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: 210, height: 70, borderRadius: 15, borderColor: 'pink', borderWidth: 2, marginLeft: 5 }} >
                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 5 }} >
                    <Image source={boutique} style={{ width: 50, height: 30, marginTop: 10, marginLeft: 5 }} />
                    <View style={{ marginTop: 7, marginLeft: 5 }}>
                        <Text> Xender Shop</Text>
                        <Text> 2356 Toltricon Street</Text>
                        <Text> 9AM- 7 PM</Text>
                    </View>
                </View>
            </View>
            <View style={{ width: 250, height: 70, borderRadius: 15, borderColor: 'pink', borderWidth: 2, marginLeft: 5 }} >
                <View style={{ display: 'flex', flexDirection: 'row', }} >
                    <Image source={boutique} style={{ width: 50, height: 30, marginTop: 10, marginLeft: 30 }} />
                    <View style={{ marginTop: 7 }}>
                        <Text> Xender Shop</Text>
                        <Text> 2356 Toltricon Street</Text>
                        <Text> 9AM- 7 PM</Text>
                    </View>
                </View>
            </View>



        </View>
    ),



}]
const Slidelegume = () => (

    <view style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 12 }}>
        <View style={{
            backgroundColor: 'green',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: 20,
            marginLeft: 150,
        }}>

            <Image source={raisin} style={{

                // margin: '5%',
                width: '50%',
                height: '50%',
                marginHorizontal: 'auto',
                borderRadius: 60,
            }} />

            <Image source={pp} style={{

                marginTop: -100,
                width: '20%',
                height: '20%',
                marginHorizontal: '150px',
                borderRadius: 70,

            }} />
            <Text style={{
                marginTop: '60px',
                fontFamily: 'arial',
                fontSize: '15px',
                fontWeight: 'bold',
                marginBottom: '40px',
                marginLeft: 22,

            }}>Carrot                     $10</Text>


            <view style={{
                marginTop: -30,
                marginLeft: '30%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'yellow',
                height: 20,
                width: 80,
                borderRadius: 20

            }}
            > <Text color='white'>ADD</Text></view>
        </View>

        <View style={{
            backgroundColor: 'yellow',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
            marginLeft: 15,
            justifyContent: 'center',
            //  alignItems: 'center',
        }}>
            <Image source={raisin} style={{

                // margin: '5%',
                width: '60%',
                height: '60%',
                marginHorizontal: 'auto',
                borderRadius: 60,
            }} />

            <Image source={pp} style={{

                marginTop: -100,
                width: '20%',
                height: '20%',
                marginHorizontal: '140px',
                borderRadius: 60,

            }} />
            <Text style={{
                marginTop: '67px',
                fontFamily: 'arial',
                fontSize: '15px',
                fontWeight: 'bold',
                marginBottom: '40px',
                marginLeft: 22,
            }}>Tommate            $10</Text>


            <view style={{
                marginTop: -30,
                marginLeft: '30%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'violet',
                height: 20,
                width: 80,
                borderRadius: 20

            }}
            > <Text color='white'>ADD</Text></view>
        </View>
    </view>

);
const Slidefruit = () => (

    <view style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: 12 }}>
        <View style={{
            backgroundColor: 'green',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            borderRadius: 20,
            marginLeft: 150,
        }}>

            <Image source={orange} style={{

                // margin: '5%',
                width: '50%',
                height: '50%',
                marginHorizontal: 'auto',
                borderRadius: 60,
            }} />

            <Image source={pp} style={{

                marginTop: -100,
                width: '20%',
                height: '20%',
                marginHorizontal: '150px',
                borderRadius: 70,

            }} />
            <Text style={{
                marginTop: '60px',
                fontFamily: 'arial',
                fontSize: '15px',
                fontWeight: 'bold',
                marginBottom: '40px',
                marginLeft: 22,

            }}>Carrot                     $10</Text>


            <view style={{
                marginTop: -30,
                marginLeft: '30%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                backgroundColor: 'yellow',
                height: 20,
                width: 80,
                borderRadius: 20

            }}
            > <Text color='white'>ADD</Text></view>
        </View>

        <View style={{
            backgroundColor: 'yellow',
            width: 200,
            height: 200,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
            marginLeft: 15,
            justifyContent: 'center',
            //  alignItems: 'center',
        }}>
            <Image source={orange} style={{

                // margin: '5%',
                width: '60%',
                height: '60%',
                marginHorizontal: 'auto',
                borderRadius: 60,
            }} />

            <Image source={pp} style={{

                marginTop: -100,
                width: '20%',
                height: '20%',
                marginHorizontal: '140px',
                borderRadius: 60,

            }} />
            <Text style={{
                marginTop: '67px',
                fontFamily: 'arial',
                fontSize: '15px',
                fontWeight: 'bold',
                marginBottom: '40px',
                marginLeft: 22,
            }}>Tommate            $10</Text>


            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <view style={{
                    marginTop: -30,
                    marginLeft: '30%',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    backgroundColor: 'violet',
                    height: 20,
                    width: 80,
                    borderRadius: 20

                }}

                >
                    <Text color='white'>ADD</Text>
                </view>
            </TouchableOpacity>
        </View>
    </view>

);

function HomeScreen({ navigation }) {
    const [text, setText] = useState('');
    const [currentSlide, setcurrentSlide] = useState(null);
    const handleButton1Click = () => {
        setcurrentSlide(<Slidefruit/>);
    }
    const handleButton2Click = () => {
        setcurrentSlide(<Slidelegume />);
    }


    return (
        <View style={styles.body}>
            <View style={styles.app}>
                <View style={styles.header}>
                    <Image source={menu} style={styles.menu} />
                    <Image source={pp} style={styles.pp} />

                </View>
                <View style={styles.sousHeader}>
                    <View style={styles.sousHeaderLeft}>
                        <View style={styles.sousHeaderSousLeft}>
                            <Text style={styles.Texte12}> Discover seasonal</Text>
                        </View>
                        <Text style={styles.Text12}> Fruits and Vegetables </Text>
                    </View>

                </View>

                <StatusBar style="auto" />
                <ScrollView horizontal={true}>
                    {slides.map((slide, index) => (
                        <View key={index} style={{ width: '40%', height: 100, }}>
                            {slide.type === 'View' && slide.content}
                        </View>
                    ))}


                </ScrollView>

                <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                    <Button title='fruit' onPress={handleButton1Click} />
                    <Button title='legumes' onPress={handleButton2Click} />

                </View>

                <StatusBar style="auto" />
                <ScrollView horizontal={true}>
                    {currentSlide && (
                        <View style={{ width: '50%', height: 270 }}>
                            {currentSlide}

                        </View>
                    )}
                    {/* {slides2.map((slide, index) => (
                        <View key={index} style={{ width: '55%', height: 200, marginVertical: 10 }}>
                            {slide.type === 'View' && slide.content}
                        </View>
                    ))} */}


                </ScrollView>


                <View style={styles.avantGraphe}>
                    <View style={styles.sousHeaderLeft}>
                        <text style={{ fontWeight: 'bold', marginTop: 30, marginVertical: 5 }}> Nearby Shop</text>
                    </View>
                </View>
                <View>
                    <StatusBar style="auto" />
                    <ScrollView horizontal={true}>
                        {slides3.map((slide, index) => (
                            <View key={index} style={{ width: '65%', height: 80, marginTop: 0 }}>
                                {slide.type === 'View' && slide.content}
                            </View>
                        ))}


                    </ScrollView>
                </View>

                <View style={styles.image}>

                    <View>
                        <Entypo name="home" taille={40} couleur="noir" />
                    </View>
                    <View>
                        <AntDesign name="search1" taille={24} couleur="noir" />
                    </View>
                    <View>
                        <Image source={panier} style={styles.menu} />
                    </View>

                    <View>
                        <Ionicons name="person-outline" taille={40} couleur="noir" />
                    </View>


                </View>
            </View>
            <StatusBar style="auto" />
        </View>


    );
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

    menu: {
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

    pp: {
        marginTop: '0%',
        padding: '10px',
        width: '10%',
        height: '85%',
        resizeMode: 'contain',
        backgroundColor: '#fff',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',


    },

    sousHeader: {

        width: 'auto',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    sousHeaderLeft: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'column',
    },

    Texte12: {
        fontFamily: 'arial',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 35,
    },

    Text12: {
        fontFamily: 'arial',
        fontSize: 18,
        fontWeight: 'bold',

    },

    sousHeaderSousLeft: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        alignContent: 'center',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        // borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },

    avantGraphe: {
        width: '100%',
        height: '15%',
        resizeMode: 'contain',
        alignContent: 'center',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        // borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },

    textAvantGraphe: {
        marginTop: '-37px',
        fontFamily: 'arial',
        fontSize: '10px',
        fontWeight: 'bold',
    },
    image: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
})
export default HomeScreen;

