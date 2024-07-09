import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

const Popular = ({ posts }) => {
  // const [activeItem, setActiveItem] = useState(posts[0]);

  // const viewableItemsChanged = ({ viewableItems }) => {
  //   if (viewableItems.length > 0) {
  //     setActiveItem(viewableItems[0].key);
  //   }
  // };

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-primary-DEAFULT" key={item.$id}>
          {item.id}
        </Text>
      )}
    />
  );
};

export default Popular;
