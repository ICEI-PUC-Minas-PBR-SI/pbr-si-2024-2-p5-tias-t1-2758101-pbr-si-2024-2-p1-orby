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

const OrbyTopicBottomSheet = ({
  bottomSheetRef,
  onChange,
  onConfirmData,
  isEditMode = false,
  title = "",
  description = "",
}) => {
  const [topicTitle, setTopicTitle] = useState(isEditMode ? title : "");
  const [topicDescription, setTopicDescription] = useState(
    isEditMode ? description : ""
  );
  const textAreaMaxLenght = 600;

  const handleBottomSheetChange = useCallback((index) => {
    onChange(index);

    if (index === -1) {
      setTopicTitle("");
      setTopicDescription("");
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

        <Text style={styles.buttonText}>Titulo</Text>
        <OrbyInput
          customStyle={styles.input}
          value={topicTitle}
          onChangeText={setTopicTitle}
          placeholder="Titulo"
          keyboardType="Text"
        />

        <Text style={styles.buttonText}>Descrição</Text>
        <OrbyInput
          customStyle={styles.textArea}
          value={topicDescription}
          onChangeText={setTopicDescription}
          placeholder="Descrição"
          keyboardType="Text"
          isMultiline={true}
          maxLength={textAreaMaxLenght}
        />
        <Text style={styles.charCount}>
          {topicDescription.length} / {textAreaMaxLenght}
        </Text>

        <FAB
          placement="right"
          color={COLORS.primary}
          size="small"
          icon={<Icon name="check" size={20} color="white" />}
          onPress={() => onConfirmData(topicTitle, topicDescription)}
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
    minHeight: 250,
    textAlignVertical: "top",
  },
  charCount: {
    alignSelf: "flex-end",
  },
});

export default OrbyTopicBottomSheet;
