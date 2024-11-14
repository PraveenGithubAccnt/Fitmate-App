import {StatusBar, Image, View,Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodyPart } from "./api/exerciseDB";
import { demoExercises } from "../constants";
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";

export default function Exercises() {
  const router = useRouter();
  const [exercises, setExercises] = useState([]);
  const item = useLocalSearchParams();
  console.log("got item: ", item);

  useEffect(() => {
    if (item) getExercises(item.name);  
  }, [item]);

  const getExercises = async (bodyPart) => {
    // const lowerCaseBodyPart = bodyPart.toLowerCase();
    let data = await fetchExercisesByBodyPart(bodyPart);
    // console.log('got data: ', data);
    setExercises(data);
  };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />

      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-neutral-900 pr-4 mx-4 absolute rounded-full flex justify-center items-center"
        style={{ height: 40, width: 40, marginTop: 40 }}>
        <Ionicons name="caret-back-outline" size={40} color="white" />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
        <Text style={{fontSize:hp(3)}} className="font-bold text-neutral-700">
          {item.name} <Text className="font-bold text-yellow-600">exercises</Text>
        </Text>

        <View className="mb-10">
        <ExerciseList data={exercises}/>
        </View>

      </View>
    </ScrollView>
  );
}
