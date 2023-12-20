import React from "react";
import { View, Text, Image, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { Entypo, Ionicons, AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const arbre = require('../assets/images/arbre.png')
const carotte = require('../assets/images/carotte.png')

const DescriptionScreen = () => {
    // const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.app}>
                <View style={styles.header}>
                    <AntDesign name="leftcircleo" size={24} color="black" />
                    <View style={styles.sousHeader}>
                        <AntDesign name="leftcircleo" size={24} color="black" />
                        <AntDesign name="leftcircleo" size={24} color="black" />
                    </View>

                </View>
                <View style={styles.arbre}>
                    <Image source={arbre} style={styles.arbre2} />
                </View>
                <View style={styles.text}>
                    <Text style={{ width: 100, height: 30, backgroundColor: 'beige', borderColor: 'beige', borderRadius: 5, justifyContent: 'center', alignContent: 'center', padding: 5, color: 'green' }}> Vegetables</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Broccoli</Text>
                    <Text> approx 100 gm</Text>
                </View>
                <View style={{ width: 300, height: 2, borderWidth: 1, borderColor: 'black', marginTop: 5 }}>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', margin: 10 }}>
                    <View>
                        <Image source={carotte} style={styles.carotte} />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Agrifarm Inc</Text>
                        <Text> F5RJ + FJF, Chartakol</Text>
                    </View>
                </View>
                <View style={{ width: 300, height: 2, borderWidth: 1, borderColor: 'black', marginTop: 5 }}>
                </View>

                <View >
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}> Description</Text>
                    <Text> Broccoli is an edible green plant in the cabbage</Text>
                    <Text> family whose large flowering head, stalk and</Text>
                    <Text> small associated leaves are Read more</Text>

                </View>
                <View style={{display:'flex', justifyContent:'space-around', flexDirection:'row', marginTop:40 }}>
                    <Image source={carotte} style={styles.carotte} />
                    <Text style={{ width: 200, height: 30, backgroundColor: 'beige', borderColor: 'beige', borderRadius: 5, justifyContent: 'center', alignContent: 'center', padding: 5, color: 'green', marginTop: 10 }}> Add to cart $ 1.50</Text>
                </View>
            </View>
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
        width: 400,
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
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'

    },
    sousHeader: {

        display: 'flex',
        flexDirection: 'row',
        width:50,
        justifyContent: 'space-between',

    },

    arbre: {

        marginTop: 50,
        backgroundColor: 'beige',
        width: 300,
        height: 200,
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 5,
        borderColor: 'beige',
        borderWidth: 1,




    },
    arbre2: {

        padding: 100

    },

    text: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',

    },
    carotte: {
        marginTop: 5,
        padding: '10px',
        width: 50,
        height: 50,
        resizeMode: 'contain',
        backgroundColor: 'beige',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'

    },


})
export default DescriptionScreen;
