import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/colors";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useCallback, useState } from "react";
import OrbyInput from "../../components/orby_input/OrbyInput";
import { FAB } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const OrbyRepliBottomSheet = ({ bottomSheetRef, onChange, onConfirmData }) => {
  const [text, setText] = useState("");
  const textAreaMaxLenght = 800;

  const handleBottomSheetChange = useCallback((index) => {
    onChange(index);

    if (index === -1) {
      setText("");
    }
  }, []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={["90%"]}
      onChange={handleBottomSheetChange}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheetContainerBackground}
    >
      <BottomSheetView style={styles.bottomSheetContent}>
        <View style={styles.bottomSheetHeader}>
          <TouchableOpacity onPress={() => bottomSheetRef.current?.close()}>
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.buttonText}>Comentário</Text>
        <OrbyInput
          customStyle={styles.textArea}
          value={text}
          onChangeText={setText}
          placeholder="Descrição"
          keyboardType="Text"
          isMultiline={true}
          maxLength={textAreaMaxLenght}
        />
        <Text style={styles.charCount}>
          {text.length} / {textAreaMaxLenght}
        </Text>

        <FAB
          placement="right"
          color={COLORS.primary}
          size="small"
          icon={<Icon name="check" size={20} color="white" />}
          onPress={() => onConfirmData(text)}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainerBackground: {
    backgroundColor: COLORS.gray_background,
  },
  bottomSheetContent: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.gray_background,
  },
  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  buttonText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    backgroundColor: COLORS.gray_background_700,
    borderRadius: 10,
    marginVertical: 8,
  },
  textArea: {
    backgroundColor: COLORS.gray_background_700,
    borderRadius: 10,
    marginVertical: 8,
    minHeight: 350,
    textAlignVertical: "top",
  },
  charCount: {
    alignSelf: "flex-end",
  },
});

export default OrbyRepliBottomSheet;
