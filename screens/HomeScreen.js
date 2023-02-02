import {useEffect, useState} from 'react';
import HttpLogin from '../rest/http.login';
import AsyncStorage from '@react-native-community/async-storage';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {Card, Text} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import HttpRestaurant from '../rest/http.restaurants';

const image = {
  uri: 'https://thumbs.dreamstime.com/b/fork-plate-spoon-icon-vector-fork-plate-spoon-icon-vector-illustration-102307168.jpg',
};

const HomeScreen = ({navigation}) => {
  const [restaurants, setResturants] = useState([]);
  useEffect(() => {
    HttpRestaurant.getRestaurants().then(res => {
      console.log(res);
      setResturants(res);
    });
  }, []);
  const handleLogout = async () => {
    AsyncStorage.removeItem('AccessToken');
    console.log('token removed', await AsyncStorage.getItem('AccessToken'));
    navigation.navigate('Login');
  };

  return (
    <View>
      <View>
        <Text h2 style={styles.text}>
          Homes
        </Text>
      </View>
      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <Card>
              <View h4 style={styles.mb10}>
                <Image
                  style={{width: 100, height: 100, margin: 5}}
                  source={{uri: item.image}}
                />
                <Text>{item.name}</Text>
                <Text>{item.location}</Text>
              </View>
              <View>
                <Button
                  title="See detail"
                  onClick={() => {
                    navigation.navigate('RestaurantDetail', {item: item._id});
                  }}
                />
              </View>
            </Card>
          );
        }}
      />
      <View style={{paddingTop: 30}}>
        <Button
          title="Logout"
          onClick={() => {
            handleLogout();
          }}
        />
      </View>
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
  mb10: {
    marginBottom: 10,
  },
});

export default HomeScreen;
