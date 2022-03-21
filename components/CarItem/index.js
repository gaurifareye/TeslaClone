import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';
import { useState } from 'react';

const CarItem = (props) => {

  const [customOrder, setCustomOrder] = useState(0);
  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}> 
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order (" + customOrder + ")"}
          onPress={() => {
            console.warn("Custom Order was pressed" + customOrder);
            setCustomOrder(customOrder+1);
            console.log(customOrder);
          }}
        />

        <StyledButton
          type="secondary"
          content={"Delete Custom Order"}
          onPress={() => {
            console.warn("Deleted Order");
            if(customOrder>0)
            setCustomOrder(customOrder-1);
            else 
            console.warn("Add Custom Order");
          }}
        />
      </View>

    </View>
  );
};

export default CarItem;