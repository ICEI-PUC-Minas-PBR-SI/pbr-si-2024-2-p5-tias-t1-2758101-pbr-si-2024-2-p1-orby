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
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  changeTopic,
  createReplie,
  getTopic,
} from "../../services/forumService";
import OrbyTopicBottomSheet from "../../components/orby_bottom_sheets/OrbyTopicBottomSheet";
import { useRoute } from "@react-navigation/native";
import OrbyReplieCard from "../../components/orby_forum_cards/OrbyReplieCard";
import OrbyRepliBottomSheet from "../../components/orby_bottom_sheets/OrbyRepliBottomSheet";
import { Header } from "../../components/orby-header/DefaultHeader";

export function Topic({ navigation }) {
  const route = useRoute();
  const { topicId } = route.params;

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isBottomSheetEditVisible, setBottomSheetEditVisible] = useState(false);
  const bottomSheetRef = useRef(null);
  const bottomSheetEditRef = useRef(null);

  const [topicName, setTopicName] = useState("");
  const [topicDescription, setTopicDescription] = useState("");

  const [replies, setReplies] = useState([]);
  const [allowEdit, setAllowEdit] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getTopic(topicId);
      setReplies(data.replies);
      setAllowEdit(data.isUserThread);
      setTopicName(data.thread.title);
      setTopicDescription(data.thread.description);
    } catch (error) {
      console.error("Erro", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          leftButton={navigation.goBack}
          rightButton={
            allowEdit ? (
              <TouchableOpacity onPress={() => openBottomSheetEdit()}>
                <Icon name="edit" size={30} color={COLORS.primary} />
              </TouchableOpacity>
            ) : null
          }
        />
      ),
    });
  }, [allowEdit, navigation]);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
    bottomSheetRef.current?.expand();
  };

  const handleBottomSheetChange = useCallback((index) => {
    if (index === -1) {
      setBottomSheetVisible(false);
    }
  }, []);

  const handleBottomSheetData = async (text) => {
    if (text.length > 0) {
      try {
        const replie = { text: text };
        await createReplie(topicId, replie);
        bottomSheetRef.current?.close();
        fetchData();
      } catch (error) {
        console.error("Erro", error);
      }
    }
  };

  const openBottomSheetEdit = () => {
    setBottomSheetEditVisible(true);
    bottomSheetEditRef.current?.expand();
  };

  const handleBottomSheetEditChange = useCallback((index) => {
    if (index === -1) {
      setBottomSheetEditVisible(false);
    }
  }, []);

  const handleBottomSheetEditData = async (title, description) => {
    if (title.length > 0 && description.length > 0) {
      try {
        const data = { title: title, description: description };
        await changeTopic(topicId, data);
        bottomSheetEditRef.current?.close();
        fetchData();
      } catch (error) {
        console.error("Erro", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topicHeader}>
        <Text style={styles.boldHeadline}>{topicName}</Text>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        {replies.map((element) => (
          <OrbyReplieCard
            key={element._id}
            text={element.text}
            date={element.created_at}
            creator={element.userName}
          />
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
        <OrbyRepliBottomSheet
          bottomSheetRef={bottomSheetRef}
          onChange={handleBottomSheetChange}
          onConfirmData={handleBottomSheetData}
        />
      )}

      {isBottomSheetEditVisible && (
        <OrbyTopicBottomSheet
          bottomSheetRef={bottomSheetEditRef}
          onChange={handleBottomSheetEditChange}
          onConfirmData={handleBottomSheetEditData}
          isEditMode={true}
          title={topicName}
          description={topicDescription}
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
    flex: 1,
    color: COLORS.darker_gray,
    fontSize: 36,
    lineHeight: 36,
    textAlign: "center",
    fontWeight: "bold",
  },
  topicHeader: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  scrollViewContainer: {
    marginBottom: 16,
  },
});
