import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from "expo-router";
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function ExerciseDetails() {
  const item = useLocalSearchParams(); 

  // console.log("got item: ", item);  

  return (
    <ScrollView>
      <View style={{ marginTop: hp(6) }} className="flex-row justify-between items-center mx-5">
        <Text style={{ fontSize: hp(3) }} className="font-bold tracking-wider text-yellow-600">
          Exercise Details
        </Text>
      </View>

      <View className="flex flex-1">
        <View className="shadow-md rounded-b-[35px]"   style={{marginLeft:35}}>
          {item.gifUrl ? (
            <Image
              source={{ uri: item.gifUrl }}
              contentFit='cover'
              style={{ width: wp(80), height: wp(80) }}
              className="rounded-b-[35px]"
            />
          ) : (
            <Text>No image available</Text>
          )}
        </View>

        <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: hp(2.5), fontWeight: 'bold' }}>Name:<Text style={{ color: '#CA8A04' }}> {item.name}</Text></Text>

          <Text style={{ fontSize: hp(2.1) }} className="font-semibold">
            Body Part: <Text style={{ color: '#CA8A04' }}>{item.bodyPart}</Text>
          </Text>
          <Text style={{ fontSize: hp(2.1) }} className="font-semibold">
            Target Muscle: <Text style={{ color: '#CA8A04' }}>{item.target}</Text>
          </Text>

          <Text style={{ fontSize: hp(2.1) }} className="font-semibold">
            Equipment: <Text style={{ color: '#CA8A04' }}>{item.equipment}</Text>
          </Text>
        </View>


        <View style={{ marginTop: 20, paddingHorizontal: 10 }}>
          <Text style={{fontSize: hp(2.1), fontWeight: 'bold'}}>Instructions:</Text>
          <Text style={{ fontSize: hp(2), marginTop: 10 }} className="font-semibold" >{item.instructions}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
