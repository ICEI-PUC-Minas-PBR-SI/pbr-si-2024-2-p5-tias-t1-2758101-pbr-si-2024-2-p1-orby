import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FAB } from "react-native-elements";
import { COLORS } from "../../assets/colors";
import Icon from "react-native-vector-icons/FontAwesome";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  createTopic,
  deleteTopic,
  getThreads,
} from "../../services/forumService";
import OrbyTopicCard from "../../components/orby_forum_cards/OrbyTopicCard";
import OrbyTopicBottomSheet from "../../components/orby_bottom_sheets/OrbyTopicBottomSheet";
import { useIsFocused } from "@react-navigation/native";
import OrbyConfirmationBottomSheet from "../../components/orby_bottom_sheets/OrbyConfirmationBottomSheet";

export function Forum({ navigation }) {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [confBottomSheet, setConfBottomSheet] = useState({
    flag: false,
    currentId: null,
  });
  const bottomSheetRef = useRef(null);
  const confirmationBottomSheetRef = useRef(null);

  const [topics, setTopics] = useState([]);

  const isFocused = useIsFocused();

  const fetchData = async () => {
    try {
      const threads = await getThreads();
      setTopics(threads);
    } catch (error) {
      console.error("Erro", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isFocused]);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
    bottomSheetRef.current?.expand();
  };

  const handleBottomSheetChange = useCallback((index) => {
    if (index === -1) {
      bottomSheetRef.current?.close();
    }
  }, []);

  const handleBottomSheetData = async (title, description) => {
    if (title.length > 0 && description.length > 0) {
      try {
        const thread = { title: title, description: description };
        await createTopic(thread);
        bottomSheetRef.current?.close();
        fetchData();
      } catch (error) {
        console.error("Erro", error);
      }
    }
  };

  const handleCardPress = (id) => {
    navigation.navigate("topic", { topicId: id });
  };

  const handleCardDeletePress = (id) => {
    setConfBottomSheet({ flag: true, currentId: id });
    confirmationBottomSheetRef.current?.expand();
  };

  const onDelete = async () => {
    try {
      await deleteTopic(confBottomSheet.currentId);
      confirmationBottomSheetRef.current?.close();
      fetchData();
    } catch (error) {
      console.error("Erro", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boldHeadline}>{"Forum"}</Text>
      <ScrollView>
        {topics.map((element) => (
          <TouchableOpacity
            key={element._id}
            onPress={() => handleCardPress(element._id)}
          >
            <OrbyTopicCard
              title={element.title}
              description={element.description}
              date={element.created_at}
              creator={element.userName}
              showDeleteOption={element.allowDelete}
              onDelete={() => handleCardDeletePress(element._id)}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FAB
        placement="right"
        color={COLORS.primary}
        size="large"
        icon={<Icon name="plus" size={20} color="white" />}
        onPress={openBottomSheet}
      />

      {isBottomSheetVisible && (
        <OrbyTopicBottomSheet
          bottomSheetRef={bottomSheetRef}
          onChange={handleBottomSheetChange}
          onConfirmData={handleBottomSheetData}
        />
      )}

      {confBottomSheet.flag && (
        <OrbyConfirmationBottomSheet
          bottomSheetRef={confirmationBottomSheetRef}
          title="Realmente deseja excluir o tópico?"
          onConfirm={() => onDelete()}
          onRefuse={() => {
            confirmationBottomSheetRef.current?.close();
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  boldHeadline: {
    color: COLORS.primary,
    fontSize: 36,
    lineHeight: 60,
    textAlign: "center",
  },
});
