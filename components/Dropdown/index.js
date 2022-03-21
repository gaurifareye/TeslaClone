import React , {useState} from 'react';
import { View, Text, Button ,FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import cars from '../CarsList/cars';

const Dropdown = () => {

  const [selectedValue, setSelectedValue] = useState("ModelS");

  return (
    <View >
      <Picker
        selectedValue={selectedValue}
        style={{ height: 15, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Mercedes" value="Mercedes" />
        <Picker.Item label="Nexon" value="Nexon" />
        <Picker.Item label="Model X" value="Model X" />
        <Picker.Item label="Jaguar" value="Jaguar" />

       
      </Picker>
    </View>
  );
};

export default Dropdown;

