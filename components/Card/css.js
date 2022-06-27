import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    Card: {
        width: '100%',
        height: '100%',
    },
    Cardimage: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
        position: "absolute",
    },
    Cardbody: {
        marginTop: "30%",
        width: '100%',
        alignItems: 'center',
    },
    Cardtitle: {
        fontSize: 40,
        fontweight: '500',
    },
    Cardsubtitle: {
        fontSize: 18,
        color: "#5c5e62"

    }

});

export default styles