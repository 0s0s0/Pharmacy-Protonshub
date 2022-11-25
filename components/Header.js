import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import { TouchableOpacity, StyleSheet, Platform, Dimensions, Keyboard,Image,ScrollView } from 'react-native';
import { Button, Block, NavBar, Input, Text, theme,Slider } from 'galio-framework';

import Icon from './Icon';
import materialTheme from '../constants/Theme';
import Tabs from './Tabs';
import { log } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

const ChatButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Chat')}>
    <Icon
      family="GalioExtra"
      size={16}
      name="chat-33"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const BasketButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Cart')}>
    <Icon
      family="GalioExtra"
      size={16}
      name="basket-simple"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const SearchButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Search')}>
    <Icon
      size={16}
      family="entypo"
      name="magnifying-glass"
      color={theme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
);

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    if (back)
      navigation.goBack();
      else
        navigation.openDrawer();
    // return (back ? navigation.goBack() : navigation.openDrawer());
  }

  renderRight = () => {
    const { white, title, navigation, scene } = this.props;
    // const { options } = scene.descriptor;
    // const routeName = options.headerTitle; // wip

    if (title ===  'Title') {
      return ([
        // <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
        <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
      ]);
    }

    switch (title) {
      case 'About':
      case 'Agreement':
      case 'Cart':
      case 'Categories':
      case 'Category':
      case 'Deals':
      case 'Home':
      case 'Woman':
      case 'Man':
      case 'Kids':
      case 'NewCollection':
      case 'Notifications':
      case 'Privacy':
      case 'Profile':
      case 'Search':
      case 'Settings':
        return ([
          // <ChatButton key='chat-search' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-search' navigation={navigation} isWhite={white} />
        ]);
      case 'Product':
        return ([
          <SearchButton key='search-product' navigation={navigation} isWhite={white} />,
          <BasketButton key='basket-product' navigation={navigation} isWhite={white} />
        ]);
      default:
        break;
    }
  }

  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        left
        color="black"
        style={styles.search}
        placeholder="   Search for Medicines/Lab Tests/Health.."
        onFocus={() => {Keyboard.dismiss(); navigation.navigate('Search');}}
        iconContent={<Icon size={18} color={theme.COLORS.MUTED} name="magnifying-glass" family="entypo" />}
      />
    )
  }

  // renderOptions = () => {
  //   const { navigation, optionLeft, optionRight } = this.props;
  //   return (
  //     <Block style={{width:width, height:115,marginTop:20}}  >
  //         <ScrollView horizontal showsHorizontalScrollIndicator={false} >
  //      <Button shadowless style={{width:100, height:100,backgroundColor:'white'}}
  //       >
  //           <Image source = {require('../assets/images/diabetes.png')} style={{height:85,width:85,}} />
  //           <Text size={15} center  >Medicines</Text>
            
  //       </Button>
  //       <Button shadowless style={{width:100, height:100,backgroundColor:'white'}}
  //       >
  //           <Image source = {require('../assets/images/gift.png')} style={{height:85,width:85,}} />
  //           <Text size={15} center  >Medicines</Text>
  //       </Button>
  //       <Button shadowless style={{width:100, height:100,backgroundColor:'white'}}
  //       >
  //           <Image source = {require('../assets/images/healthcare.png')} style={{height:85,width:85,}} />
  //           <Text size={15} center  >Medicines</Text>
  //       </Button>
  //       <Button shadowless style={{width:100, height:100,backgroundColor:'white'}}
  //       >
  //           <Image source = {require('../assets/images/Lab.png')} style={{height:85,width:85,}} />
  //           <Text size={15} center  >Medicines</Text>
  //       </Button>
  //       <Button shadowless style={{width:100, height:100,backgroundColor:'white'}}
  //       >
  //           <Image source = {require('../assets/images/Medicines.png')} style={{height:85,width:85,}} />
  //           <Text size={15} center  >Medicines</Text>
  //       </Button>
  //       <Button shadowless style={{width:100, height:100,backgroundColor:'white'}}
  //       >
  //           <Image source = {require('../assets/images/offer.png')} style={{height:85,width:85,}} />
  //           <Text size={15} center  >Medicines</Text>
  //       </Button>
  //       <Button shadowless style={{width:100, height:100,backgroundColor:'white'}}
  //       >
  //           <Image source = {require('../assets/images/prescription.png')} style={{height:85,width:85,}} />
  //           <Text size={15} center  >Medicines</Text>
  //       </Button>
  //       <Button shadowless style={{width:100, height:100,backgroundColor:'white'}}
  //       >
  //           <Image source = {require('../assets/images/Surgicare.png')} style={{height:85,width:85,}} />
  //           <Text size={15} center  >Medicines</Text>
  //       </Button>
  //       <Button shadowless style={{width:100, height:100,backgroundColor:'white'}}
  //       >
  //           <Image source = {require('../assets/images/top.png')} style={{height:85,width:85,}} />
  //           <Text size={15} center  >Medicines</Text>
  //       </Button>
  //       </ScrollView>
  //       {/* <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Deals')}>
  //         <Block row middle>
  //           <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
  //           <Text size={16} style={styles.tabTitle}>{optionRight || 'Best Deals'}</Text>
  //         </Block>
  //       </Button> */}
  //     </Block>
  //   )
  // }

  renderSlider = () => {
    const { navigation, optionLeft, optionRight } = this.props;
    return (
      <Block row style={{backgroundColor:'red',width:width*1,height:height*0.35}}>
       <Button shadowless 
        >
          <Block row middle style={{width:width*1.5,height:height*0.25,backgroundColor:'blue',marginTop:height*0.25,marginLeft:width*0.5}}   >
            <ScrollView  >
              <Block >
              <Image source = {require('../assets/images/slider1.png')} style={{height:175,width:385,marginHorizontal:"2%"}}  />
              </Block>
              <Block >
              <Image source = {require('../assets/images/slider2.png')} style={{height:175,width:385,marginHorizontal:"2%"}}  />
              </Block>
            </ScrollView>
          </Block>
        </Button>
   
      </Block>
    )
  }
  // renderOptions = () => {
  //   const { navigation, optionLeft, optionRight } = this.props;

  //   return (
  //     <Block row style={styles.tabs}>
  //       <Button shadowless style={[styles.tab, styles.divider]} onPress={() => navigation.navigate('Categories')}>
  //         <Block row middle>
  //           <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
  //           <Text size={16} style={styles.tabTitle}>{optionLeft || 'Categories'}</Text>
  //         </Block>
  //       </Button>
  //       <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Deals')}>
  //         <Block row middle>
  //           <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
  //           <Text size={16} style={styles.tabTitle}>{optionRight || 'Best Deals'}</Text>
  //         </Block>
  //       </Button>
  //     </Block>
  //   )
  // }

  renderTabs = () => {
    const { tabs, tabIndex, navigation } = this.props;
    const defaultTab = tabs && tabs[0] && tabs[0].id;
    
    if (!tabs) return null;

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }

  renderHeader = () => {
    const { search, tabs, options,  } = this.props;
    console.log("this.props",this.props);
    if (search || tabs || options) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {/* {options ? this.renderOptions() : null} */}
          {/* {this.renderSlider()} */}
          {/* {options ? this.renderOptions() : null} */}
          {/* {tabs ? this.renderTabs() : null} */}
        </Block>
      )
    }
    return null;
  }

  render() {
    const { back, title, white, transparent, navigation, scene } = this.props;

    // const { routeName } = navigation.state;
    // const { options } = scene.descriptor;
    // const routeName = scene.descriptor?.options.headerTitle ?? '';
    const noShadow = ["Search", "Profile"].includes(title);
    const headerStyles = [
      // !noShadow ? styles.shadow : null,
      //  { backgroundColor: 'blue' } 
      // transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
    ];

    return (
      
      <Block style={headerStyles}>
        <NavBar
          back={back}
          title={title}
          style={styles.navbar}
          // transparent={transparent}
          right={this.renderRight()}
          rightStyle={{ alignItems: 'center' }}
          leftStyle={{ paddingTop: 3, flex: 0.3 }}
          leftIconName={back ? null : "navicon"}
          // leftIconFamily="font-awesome"
          leftIconColor={white ? theme.COLORS.WHITE : theme.COLORS.ICON}
          titleStyle={[
            styles.title,
            { color: theme.COLORS[white ? 'WHITE' : 'ICON'] },
          ]}
          onLeftPress={this.handleLeftPress}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    // backgroundColor: materialTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 8,
    right: 8,
  },
  header: {
    // backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  tabs: {
    marginBottom: 50,
    marginTop: 40,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
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
});