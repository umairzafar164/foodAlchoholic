import {useEffect, useState} from 'react';
import HttpLogin from '../rest/http.login';
import AsyncStorage from '@react-native-community/async-storage';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import {Card, Text, Input} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../components/Button';
import HttpRestaurant from '../rest/http.restaurants';

const image = {
  uri: 'https://thumbs.dreamstime.com/b/fork-plate-spoon-icon-vector-fork-plate-spoon-icon-vector-illustration-102307168.jpg',
};

const RestaurantDetail = props => {
  const [restaurant, setResturant] = useState(false);
  const [review, setReview] = useState('');
  const [rate, setRate] = useState(0);
  useEffect(() => {
    HttpRestaurant.getRestaurant(props.navigation.state.params.item).then(
      res => {
        setResturant(res);
        console.log('reee', typeof res.name);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReview = () => {
    HttpRestaurant.postReview(props.navigation.state.params.item, review);
  };
  const changeReview = e => {
    setReview(e);
  };

  const onCheckLimit = value => {
    if (Number.isNaN(value)) {
      setRate(0); //setter for state
    } else if (value > 10) {
      setRate(10);
    } else {
      setRate(value);
    }
  };
  console.log('con', rate);
  return (
    <Card>
      {restaurant ? (
        <View>
          <Text h2>{restaurant.name}</Text>
          <Image
            style={{width: 300, height: 250, margin: 5}}
            source={{uri: restaurant.image}}
          />
          <Text h6>{restaurant.location}</Text>
          <Text h4>Menu:</Text>
          {
            <FlatList
              data={restaurant.menu}
              renderItem={({item}) => {
                return (
                  <View>
                    <Text>
                      {item.itemName} - {item.price} /Rs
                    </Text>
                  </View>
                );
              }}
            />
          }
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View>
            <FlatList
              data={restaurant.reviews}
              renderItem={({item}) => {
                return (
                  <View>
                    <Text>{item.review}</Text>
                  </View>
                );
              }}
            />
            <Text h4>Add Review</Text>
            <Input
              placeholder="Review"
              type="text"
              onChangeText={changeReview}
              onEndEditing={() => {
                setReview(review);
              }}
              autoCapitalize={false}
            />
          </View>
          <Button title={'Post'} onClick={() => handleReview()} />
          <View>
            <Text>Rate? </Text>
            <Input
              placeholder="Out of 10"
              value={rate}
              onChangeText={onCheckLimit}
              onEndEditing={() => {
                setRate(rate);
              }}
              otherProps
            />
            <Text>{restaurant.rating}</Text>
          </View>
        </View>
      ) : null}
    </Card>
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

export default RestaurantDetail;
