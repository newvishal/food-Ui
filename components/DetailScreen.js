import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import PopularData from '../assets/data/PopularData';

import Color from '../assets/Color';

export default function DetailScreen({route, navigation}) {
  const {item} = route.params;
  const renderIngrediantItem = ({item}) => {
    return (
      <View
        style={[
          styles.itemContainer,
          {
            marginHorizontal: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.ingrediantImage} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather
                  name="chevron-left"
                  color={Color.textColor}
                  size={12}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.headerRight}>
              <MaterialCommunityIcons
                name="star"
                color={Color.unSelected}
                size={12}
              />
            </View>
          </View>
        </SafeAreaView>

        {/* title */}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        {/* price  */}
        <View style={styles.priceWrapper}>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        {/* item detail  */}
        <View style={styles.itemDetailWrapper}>
          <View style={styles.itemDetailsPart}>
            <View style={styles.singleDetailWrapper}>
              <Text style={styles.heading}>Size</Text>
              <Text style={styles.headingInfo}>{item.sizeName}</Text>
              <Text style={styles.heading}>Crust</Text>
              <Text style={styles.headingInfo}>{item.crust}</Text>
              <Text style={styles.heading}>Delivery in</Text>
              <Text style={styles.headingInfo}>{item.deliveryTime}</Text>
            </View>
          </View>
          <View style={styles.itemImagePart}>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>
        {/* ingredient part  */}
        <View style={styles.ingrediantWrapper}>
          <Text style={styles.ingredientText}>Ingredients</Text>
          <FlatList
            data={item.ingredients}
            renderItem={renderIngrediantItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* place order button  */}
        <TouchableOpacity onPress={() => alert('ok')}>
          <View style={styles.buttonWrapper}>
            <View style={styles.textWrapper}>
              <Text style={styles.btnText}>Place an order</Text>
              <Feather
                name="chevron-right"
                size={12}
                style={styles.arrowRight}
              />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.unSelected,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingTop: 20,
  },
  headerLeft: {
    borderRadius: 12,
    borderColor: Color.lightText,
    borderWidth: 2,
    padding: 12,
  },
  headerRight: {
    backgroundColor: Color.textPrimary,
    borderRadius: 10,
    padding: 12,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    color: Color.textColor,
    width: '50%',
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 28,
    color: Color.textPrice,
  },
  itemDetailWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemDetailsPart: {},
  itemImagePart: {},
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 90,
  },
  singleDetailWrapper: {},
  heading: {
    color: Color.lightText,
    fontSize: 14,
  },
  headingInfo: {
    color: Color.textColor,
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 20,
  },
  ingrediantWrapper: {
    paddingTop: 20,
  },
  ingredientText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: Color.unSelected,
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 20,
    shadowColor: Color.blackColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  ingrediantImage: {
    resizeMode: 'contain',
  },
  buttonWrapper: {
    backgroundColor: Color.textPrimary,
    borderRadius: 15,
    paddingVertical: 18,
    marginHorizontal: 20,
    marginTop: 40,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: Color.textColor,
  },
  arrowRight: {
    alignSelf: 'center',
    marginLeft: 5,
  },
});
