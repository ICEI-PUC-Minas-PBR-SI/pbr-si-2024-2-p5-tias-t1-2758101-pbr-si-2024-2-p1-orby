import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

const OrbyCheckBoxGroup = ({ items, setItems }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setItems(selectedItems); // Atualiza o pai sempre que selectedItems mudar
  }, [selectedItems]);

  const handleCheckboxChange = (item) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  return (
    <View>
      {items.map((item, index) => (
        <CheckBox
          key={index}
          title={item}
          checked={selectedItems.includes(item)}
          onPress={() => handleCheckboxChange(item)}
        />
      ))}
    </View>
  );
};

export default OrbyCheckBoxGroup;
