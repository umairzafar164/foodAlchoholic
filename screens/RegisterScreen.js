import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Input, Text} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import HttpLogin from '../rest/http.login';
import AsyncStorage from '@react-native-community/async-storage';

const image = {
  uri: 'https://thumbs.dreamstime.com/b/fork-plate-spoon-icon-vector-fork-plate-spoon-icon-vector-illustration-102307168.jpg',
};

const RegisterScreen = ({navigation}) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeFullname = e => {
    setFullName(e);
  };

  const changeEmail = e => {
    setEmail(e);
  };

  const changePassword = e => {
    setPassword(e);
  };

  const handleRegister = () => {
    console.log('here');
    HttpLogin.register(fullname, email, password)
      .then(res => {
        console.log('res', res);
      })
      .catch(async err => {
        console.log(err);
        const token = await AsyncStorage.setItem('AccessToken', err.data.token);
        navigation.navigate('Login');
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View>
          <Text h2 style={styles.text}>
            Registeration
          </Text>
        </View>
        <View style={styles.input}>
          <Input
            placeholder="Fullname"
            type="password"
            leftIcon={<AntDesign name="user" size={24} />}
            value={fullname}
            onChangeText={changeFullname}
            onEndEditing={() => {
              setFullName(fullname);
              console.log(fullname);
            }}
            autoCorrect={false}
          />
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
              console.log(email);
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
              console.log(password);
            }}
          />
        </View>

        <View style={{paddingTop: 20}}>
          <Button
            title="Register"
            onClick={() => {
              handleRegister();
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.text1}>
            Already Registered ?{' '}
            <Text
              style={styles.text2}
              onPress={() => {
                //navigation.navigate('Login');
              }}>
              Login
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

export default RegisterScreen;
