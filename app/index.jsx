import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";
export default function index() {
  const router = useRouter();
  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute"
        source={require("../assets/images/welcm.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            style={{ fontSize: hp(4) }}
            className="text-white font-bold tracking-wide"
          >
            Plan Your
          </Text>
          <Text
            style={{ fontSize: hp(4) }}
            className="text-yellow-500 font-bold tracking-wide"
          >
            {" "}
            Workouts <Text className="text-white">And</Text> Diets
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          className="flex items-center"
        >
          <TouchableOpacity
            onPress={() => router.push("Home")}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-blue-500 flex items-center justify-center max-auto rounded-full border-[2px] border-gray-400"
          >
            <Text
              style={{ fontSize: hp(2.8) }}
              className="text-white font-bold"
            >
              Let's Start
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
