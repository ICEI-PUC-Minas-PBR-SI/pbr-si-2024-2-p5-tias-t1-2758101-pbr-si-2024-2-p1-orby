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
import { createTopic, getThreads } from "../../services/forumService";
import OrbyTopicCard from "../../components/orby_forum_cards/OrbyTopicCard";
import OrbyTopicBottomSheet from "../../components/orby_bottom_sheets/OrbyTopicBottomSheet";
import { useIsFocused } from "@react-navigation/native";

export function Forum({ navigation }) {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const bottomSheetRef = useRef(null);

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
      setBottomSheetVisible(false);
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

  const handleCardPress = (id, title, description) => {
    navigation.navigate("topic", {
      topicId: id,
      topicName: title,
      topicDescription: description,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.boldHeadline}>{"Forum"}</Text>

      <ScrollView>
        {topics.map((element) => (
          <TouchableOpacity
            key={element._id}
            onPress={() =>
              handleCardPress(element._id, element.title, element.description)
            }
          >
            <OrbyTopicCard
              title={element.title}
              description={element.description}
              date={element.created_at}
              creator={element.userName}
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
