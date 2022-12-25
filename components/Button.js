import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({title, onClick}) => {

    return (
        <View>
            <TouchableOpacity 
                style={styles.touchable}
                onPress={onClick}
            >
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

};

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: "#ff9900",
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        marginHorizontal: 15,
        borderRadius: 24
    },

    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default Button;