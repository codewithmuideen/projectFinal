import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { image } from "../constants";
import CustomButton from "../components/CustomButton";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex items-center w-full px-4 min-h-[84vh]">
          <Image
            source={image.onboard}
            resizeMethod="contain"
            className="h-130px"
          />

          <View className="mt-5 w-[69%]">
            <Text className="font-lbold text-[24px] leading-7 capitalize text-center">
              Wherever you are <Text className="text-primary-100">health</Text>{" "}
              is number one
            </Text>
            <Text className="mt-4 text-[15px] font-llight leading-[18px]">
              There is no instant way to a healthy life
            </Text>
          </View>

          <Image
            source={image.carousel}
            resizeMode="contain"
            className="w-[65px] h-[5px] mt-5"
          />

          <CustomButton
            title={"Get Started"}
            handlePress={() => router.push("/sign-in")}
            containerStyles={"w-full rounded-[32px] mt-5"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
