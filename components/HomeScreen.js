import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import categoriesData from '../assets/data/CategoriesData';
import PopularData from '../assets/data/PopularData';
import Color from '../assets/Color';
// import {} from 'react-native-gesture-handler';

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default function HomeScreen({navigation}) {
  const renderCategoryItem = ({item}) => {
    return (
      <View
        style={[
          styles.categoryItemWrapper,
          {
            backgroundColor: item.selected
              ? Color.textPrimary
              : Color.unSelected,
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.categoryItemImage} />
        <Text style={styles.categoryItemTitle}>{item.title}</Text>
        <View
          style={[
            styles.categorySelectWrapper,
            {
              backgroundColor: item.selected
                ? Color.unSelected
                : Color.textSecondary,
            },
          ]}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.categorySelectIcon}
            color={item.selected ? Color.blackColor : Color.unSelected}
          />
        </View>
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
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <Feather name="menu" size={22} color={Color.textColor} />
          </View>
        </SafeAreaView>
        {/* title wrapper  */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesSub}>Food</Text>
          <Text style={styles.titlesTitle}>Delivery</Text>
        </View>
        {/* search wrapper */}
        <View style={styles.searchWrapper}>
          <Feather name="search" size={16} color={Color.textColor} />
          <View style={styles.search}>
            <Text style={styles.searchText}>Search...</Text>
          </View>
        </View>
        {/* category */}
        <View style={styles.categoriesWrapper}>
          <Text style={styles.categoryText}>Categories</Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList
              data={categoriesData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>

          {PopularData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() =>
                navigation.navigate('DetailScreen', {
                  item: item,
                })
              }>
              <View
                style={[
                  styles.popularCartWrapper,
                  {
                    marginTop: item.id == 1 ? 10 : 20,
                  },
                ]}>
                <View>
                  <View>
                    <View style={styles.popularTopWrapper}>
                      <MaterialCommunityIcons
                        name="crown"
                        size={12}
                        color={Color.textPrimary}
                      />
                      <Text style={styles.popularTopText}>top of the week</Text>
                    </View>
                    <View style={styles.popularTitleWrapper}>
                      <Text style={styles.popularTitlesTitle}>
                        Primavera Pizza
                      </Text>
                      <Text style={styles.popularTitleWeight}>
                        Weight 540 gr
                      </Text>
                    </View>
                  </View>
                  <View style={styles.pouplarCartBottom}>
                    <View style={styles.addPizza}>
                      <Feather name="plus" size={10} />
                    </View>
                    <View style={styles.rateingWrapper}>
                      <MaterialCommunityIcons
                        name="star"
                        size={10}
                        color={Color.textColor}
                      />
                      <Text style={styles.rating}>5.0</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.popularCardRight}>
                  <Image source={item.image} style={styles.popularCardImage} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 100 / 2,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSub: {
    fontSize: 16,
    fontFamily: 'Montserrat-normal',
    lineHeight: 19.5,
  },
  titlesTitle: {
    fontSize: 32,
    fontFamily: 'Montserrat-ExtraBold',
    lineHeight: 39.01,
    marginTop: 5,
  },
  searchWrapper: {
    marginTop: 36,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: Color.lightText,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: 'Montserrat-Normal',
    fontSize: 14,
    color: Color.lightText,
    lineHeight: 17.01,
    marginBottom: 5,
  },
  categoriesWrapper: {
    // paddingHorizontal: 20,
    marginTop: 25,
  },
  categoryText: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 16,
    lineHeight: 25.5,
    color: Color.textColor,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: Color.textPrimary,
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
  },
  categoryItemImage: {
    height: 60,
    width: 60,
    marginTop: 24,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    fontSize: 14,
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
    alignSelf: 'center',
  },
  categorySelectWrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
    marginBottom: 20,
  },
  categorySelectIcon: {
    alignSelf: 'center',
  },
  popularWrapper: {
    marginHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    lineHeight: 19.05,
    marginBottom: 11,
  },
  popularCartWrapper: {
    backgroundColor: Color.unSelected,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: Color.blackColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  popularTitleWrapper: {
    marginTop: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  popularTitleWeight: {
    fontFamily: 'Montserrat-Normal',
    fontSize: 14,
    color: Color.lightText,
    marginTop: 5,
  },
  pouplarCartBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: -20,
  },
  addPizza: {
    backgroundColor: Color.textPrimary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  rateingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  rating: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: Color.textColor,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardImage: {
    width: 210,
    height: 125,
    resizeMode: 'contain',
  },
});
