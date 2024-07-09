import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { image } from "../../constants";

import { Link, router } from "expo-router";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { CustomButton, FormField } from "../../components";

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email === "" || !form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setIsSubmitting(true);
    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full flex justify-center min-h-[86vh] px-4 my-6">
          <Text className="text-2xl font-lblack text-primary-100 ">
            Sign In
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-2"
            keyboardType="email-address"
            placeholder="Enter your email"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-2"
            placeholder="Enter your password"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-primary-100 font-lregular">
              Don't have an account?
            </Text>
            <Link href="/sign-up" className="text-lg font-lbold ">
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
