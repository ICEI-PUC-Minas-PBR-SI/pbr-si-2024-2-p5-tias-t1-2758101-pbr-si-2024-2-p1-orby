import React from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "../../assets/colors";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import { useCallback } from "react";
import OrbyButton from "../orby-button/OrbyButton";

const OrbyConfirmationBottomSheet = ({
  bottomSheetRef,
  title = "",
  onConfirm,
  onRefuse,
}) => {
  const handleBottomSheetChange = useCallback((index) => {
    if (index === -1) {
      bottomSheetRef.current?.close();
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
      snapPoints={["40%"]}
      onChange={handleBottomSheetChange}
      enablePanDownToClose={true}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.bottomSheetContainerBackground}
    >
      <BottomSheetView style={styles.bottomSheetContent}>
        <Text style={styles.title}>{title}</Text>

        <OrbyButton
          onPress={() => onConfirm()}
          title="Confirmar"
          customStyle={styles.button}
        />

        <OrbyButton
          onPress={() => onRefuse()}
          title="Cancelar"
          customStyle={styles.button}
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
  title: {
    color: COLORS.primary,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});

export default OrbyConfirmationBottomSheet;
