import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Popular, SearchInput } from "../../components";

const home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    // re call vid
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-primary-bg h-full">
      <FlatList
        data={[{ id: "Exercise1" }, { id: "Exercise2" }, { id: "Exercise3" }]}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <>
            <Text className="text-2xl px-4 " key={item.id}>
              {item.id}
            </Text>
          </>
        )}
        ListHeaderComponent={() => (
          <>
            <View className="my-6 px-4 space-y-6">
              <View>
                <Text className="font-lregular text-base text-primary-DEAFULT">
                  Good Morning 🔥
                </Text>
                <Text className="text-2xl font-lbold text-primary-DEAFULT">
                  Zido
                </Text>
              </View>

              <SearchInput />

              <View className="w-full flex-1 pt-5 pb-8">
                <Text className="text-xl font-lregular text-primary-DEAFULT mb-3">
                  Popular Workouts
                </Text>

                <Popular
                  posts={
                    [
                      { id: "Exercise1" },
                      { id: "Exercise2" },
                      { id: "Exercise3" },
                    ] ?? []
                  }
                />
              </View>
            </View>

            <Text className="text-xl font-lregular text-primary-DEAFULT mb-3 px-4">
              Today Plan
            </Text>
          </>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default home;
