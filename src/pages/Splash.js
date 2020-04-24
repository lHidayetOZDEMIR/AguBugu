import React from "react";

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from "react-native";

export default class Splash extends React.Component {

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.navigate('Welcome')
        }, 2000);
    }

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../images/logorc-128.png')}></Image>
                    <Text style={styles.title}>AGU BUGU</Text>
                    <Text style={styles.explanation}>Bir Çeviri Uygulaması</Text>
                    <Text style={styles.dev}>Hidayet Özdemir</Text>
                </View>
            </View>

        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title:{
        color: '#f7c744',
        fontSize: 30,
        marginTop: 5,
        opacity: 0.9
    },
    explanation:{
        color: '#f7c744',
        fontSize: 18,
        marginTop: 5,
        opacity: 0.9
    },
    dev:{
        fontFamily:'',
        color: '#f7c744',
        fontSize: 12,
        marginTop: 5,
        opacity: 0.9
    }
})