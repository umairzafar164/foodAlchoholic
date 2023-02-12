import {useState, useEffect} from 'react';
import HttpLogin from '../rest/http.login';
import AsyncStorage from '@react-native-community/async-storage';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Input, Text} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';

const image = {
  uri: 'https://thumbs.dreamstime.com/b/fork-plate-spoon-icon-vector-fork-plate-spoon-icon-vector-illustration-102307168.jpg',
};

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkToken();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('AccessToken');
    console.log('toekn', token);
    if (token) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  };

  const changeEmail = e => {
    setEmail(e);
  };

  const changePassword = e => {
    setPassword(e);
  };

  const handleLogin = async () => {
    HttpLogin.login(email, password).then(async response => {
      await AsyncStorage.setItem('AccessToken', response.token);
      navigation.navigate('Home');
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
          <Text h2 style={styles.text}>
            Login
          </Text>
        </View>

        <View style={{marginBottom: 20}}>
          <Input
            placeholder="Email"
            type="email"
            leftIcon={<AntDesign name="mail" size={24} />}
            autoComplete="email"
            onChangeText={changeEmail}
            onEndEditing={() => {
              setEmail(email);
            }}
            autoCapitalize={false}
          />
        </View>

        <View>
          <Input
            placeholder="Password"
            type="password"
            leftIcon={<MaterialCommunityIcons name="onepassword" size={24} />}
            autoCapitalize={false}
            secureTextEntry
            onChangeText={changePassword}
            onEndEditing={() => {
              setPassword(password);
            }}
          />
        </View>

        <View style={{paddingTop: 30}}>
          <Button
            title="Login"
            onClick={() => {
              handleLogin();
            }}
          />
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.text1}>
            Not Registered ?{' '}
            <Text
              style={styles.text2}
              onPress={() => {
                navigation.navigate('Register');
              }}>
              Registeration
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 70,
  },

  image: {
    justifyContent: 'center',
  },

  input: {
    marginBottom: 20,
    marginTop: 70,
  },

  text: {
    marginLeft: 15,
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
  },
  text1: {
    textAlign: 'center',
  },

  text2: {
    textAlign: 'center',
    color: '#0f07f5',
  },
});

export default LoginScreen;
