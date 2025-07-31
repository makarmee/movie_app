import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const { data: trendingMovies, loading, error } = useFetch(getTrendingMovies);

  const posters = (trendingMovies || [])
    .filter((m) => m.poster_url)
    .slice(0, 3); // فقط ۳ پوستر

  const handleLogin = () => {
    // Login logic
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />

      <View className="h-[60%] justify-end items-center">
        {loading && <Text className="text-white">Loading...</Text>}
        {error && <Text className="text-red-500">Failed to load movies</Text>}
        {!loading && !error && posters.length >= 3 && (
          <View className="flex-row justify-center items-center space-x-2 mt-4 w-full">
            <Image
              source={{ uri: posters[1].poster_url }}
              className="w-36 aspect-[11/16] rounded-xl -rotate-6 translate-x-16"
              resizeMode="cover"
            />

            <Image
              source={{ uri: posters[0].poster_url }}
              className="w-52 aspect-[11/16] rounded-xl z-10 mb-12 shadow-lg shadow-primary"
              resizeMode="cover"
            />

            <Image
              source={{ uri: posters[2].poster_url }}
              className="w-36 aspect-[11/16] rounded-xl rotate-6 -translate-x-16"
              resizeMode="cover"
            />
          </View>
        )}
      </View>

      <View className="flex flex-col items-center justify-center px-8">
        <Text className="text-light-100 font-light">WELCOME TO MOVIEFLIX</Text>
        <Text className="text-white font-bold text-3xl mt-2 text-center">
          Your Next Favorite Movie{" "}
          <Text className="text-accent">Is Just One Tap Away</Text>
        </Text>
        <Text className="text-light-200 mt-8">
          Login to MovieFlix with Google
        </Text>
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-white rounded-full w-full py-4 mt-5"
        >
          <View className="flex flex-row items-center justify-center">
            <Image
              source={icons.google}
              className="size-5"
              resizeMode="contain"
            />
            <Text className="text-lg text-primary ml-2">
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
