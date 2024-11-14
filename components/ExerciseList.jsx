import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React, { useMemo } from "react";
import { useRouter } from "expo-router";
import { Image } from 'expo-image';

export default function ExerciseList({ data }) {
  const router = useRouter();
  
  const memoizedData = useMemo(() => data, [data]); // Memoize data to avoid re-renders

  return (
    <View>
      <FlatList
        data={memoizedData}
        numColumns={2}
        keyExtractor={item => item.id.toString()} // Ensure unique keys
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        initialNumToRender={5}  // Optimize initial render
        removeClippedSubviews={true}  // Remove off-screen items
        renderItem={({ item, index }) => (
          <ExerciseCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}

const ExerciseCard = ({ item, router, index }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push({ pathname: '/ExerciseDetails', params: { ...item } })}
        className="flex py-3 space-y-2"
      >
        <View className="bg-neutral-200 shadow rounded-[25px]">
          <Image
            source={{ uri: item.gifUrl }}
            placeholder={require('../assets/images/placeholder.png')} 
            contentFit="cover"
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[25px]"
          />
        </View>
        <Text
          style={{ fontSize: hp(1.7) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wide"
        >
          {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
