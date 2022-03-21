import React from 'react';
import {View, Image,Text} from 'react-native';
import Dropdown from '../Dropdown';

import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
       <Text style={{fontSize:25}}>Cars Model</Text>
      <Dropdown style={styles.menu}/>
        </View>
  );
};

export default Header;