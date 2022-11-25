import React from 'react';
import { TouchableOpacity, StyleSheet, Platform, Dimensions, Keyboard,Image,ScrollView } from 'react-native';
import { Button, Block, Text, Input, theme } from 'galio-framework';
import { Icon, Product } from '../components/';
const { width } = Dimensions.get('screen');
import homeImages from '../constants/images/home';

export default class Home extends React.Component {
  
  renderSearch = () => {
    const { navigation } = this.props;
    const iconContent = <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />

    return (
      <Input
        right
        color="black"
        style={styles.search}
        iconContent={iconContent}
        placeholder="Search for Medicines/Lab Tests/Health"
        onFocus={() => navigation.navigate('Search')}
      />
    )
  }
  
  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Categories')}>
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Deals')}>
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Product product={homeImages[0]} horizontal />
          <Block flex row>
            <Product product={homeImages[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={homeImages[2]} />
          </Block>
          <Product product={homeImages[3]} horizontal />
          <Product product={homeImages[4]} full />
        </Block>
      </ScrollView>
    )
  }
  renderCategory = () => {
    return (
      <Block style={{width:width, height:115,marginTop:20,}}  >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
       <Button  style={{width:100, height:100,}}
        >
            <Image source = {require('../assets/images/diabetes.png')} style={{height:85,width:85,}} />
            <Text size={15} center  >Medicines</Text>
            
        </Button>
        <Button  style={{width:100, height:100,}}
        >
            <Image source = {require('../assets/images/gift.png')} style={{height:85,width:85,}} />
            <Text size={15} center  >Lab Tests</Text>
        </Button>
        <Button  style={{width:100, height:100,}}
        >
            <Image source = {require('../assets/images/healthcare.png')} style={{height:85,width:85,}} />
            <Text size={15} center  >Healthcare</Text>
        </Button>
        <Button  style={{width:100, height:100,}}
        >
            <Image source = {require('../assets/images/Lab.png')} style={{height:85,width:85,}} />
            <Text size={15} center  >SurgiCare</Text>
        </Button>
        <Button  style={{width:100, height:100,}}
        >
            <Image source = {require('../assets/images/Medicines.png')} style={{height:85,width:85,}} />
            <Text size={15} center  >Top Products</Text>
        </Button>
        <Button  style={{width:100, height:100,}}
        >
            <Image source = {require('../assets/images/offer.png')} style={{height:85,width:85,}} />
            <Text size={15} center  >Best Offers</Text>
        </Button>
        <Button  style={{width:100, height:100,}}
        >
            <Image source = {require('../assets/images/prescription.png')} style={{height:85,width:85,}} />
            <Text size={15} center  >Prescription</Text>
        </Button>
        <Button  style={{width:100, height:100,}}
        >
            <Image source = {require('../assets/images/Surgicare.png')} style={{height:85,width:85,}} />
            <Text size={15} center  >Get PLUS</Text>
        </Button>
        <Button  style={{width:100, height:100,}}
        >
            <Image source = {require('../assets/images/top.png')} style={{height:85,width:85,}} />
            <Text size={15} center  >BeatO</Text>
        </Button>
        </ScrollView>
        
      </Block>
    )
  }
  renderSlider = () => {
    return (
      <Block style={{width:width, height:180,marginTop:20,}}  >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
       <Button  style={{width:380, height:180,}}
        >
            <Image source = {require('../assets/images/slider1.png')} style={{width:width, height:180,}} />
            
        </Button>
       <Button  style={{width:380, height:180,}}
        >
            <Image source = {require('../assets/images/slider2.png')} style={{width:width, height:180,}} />
            
        </Button>
       <Button  style={{width:380, height:180,}}
        >
            <Image source = {require('../assets/images/slider1.png')} style={{width:width, height:180,}} />
            
        </Button>
       
        
        </ScrollView>
        
      </Block>
    )
  }

  renderDiscount = () => {
    return (
      <Block style={{width:width, height:210,marginTop:22,marginLeft:12,}}  >
        <Text size={18} bold style={{marginLeft:9}}>Especially For You</Text>
          <Block style={{marginTop:15}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}  >
       <Button  style={{width:140, height:140,marginTop:10,marginHorizontal:15}}
        >
            <Image source = {require('../assets/images/discount.png')} style={{width:160, height:160,borderRadius:10}} />
        </Button>
       <Button  style={{width:145, height:145,marginTop:10,marginHorizontal:15}}
        >
            <Image source = {require('../assets/images/discount.png')} style={{width:160, height:160,borderRadius:10}} />
        </Button>
       <Button  style={{width:145, height:145,marginTop:10,marginHorizontal:15}}
        >
            <Image source = {require('../assets/images/discount.png')} style={{width:160, height:160,borderRadius:10}} />
        </Button>
       <Button  style={{width:145, height:145,marginTop:10,marginHorizontal:15}}
        >
            <Image source = {require('../assets/images/discount.png')} style={{width:160, height:160,borderRadius:10}} />
        </Button>
       
        </ScrollView>
          </Block>
        
      </Block>
    )
  }

  render() {
    return (
      <ScrollView>
      <Block flex center style={styles.home}>
          {this.renderCategory() }
          {this.renderSlider() }
          {this.renderDiscount() }

        {/* {this.renderProducts()} */}
      </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    // backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    // backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});
