import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import { AntDesign } from "@expo/vector-icons";

export default function ProductCard({ image, title, category, description, price }) {
    const { colorScheme } = useColorScheme();
    const [count, setCount] = useState(1);


    return (
        <View className=" bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5 m-4">
            <View className="bg-white rounded-xl">
                <Image
                    source={{ uri: image }}
                    className="w-full h-72"
                    style={{ resizeMode: "contain" }}
                />
            </View>
            <View className="mt-5">
                <Text className="text-sm text-black/60">{category}</Text>
                <Text className="text-lg font-semibold dark:text-white">
                    {title}
                </Text>

                <View className="flex-row justify-between my-2">
                    <View className="flex-row items-center gap-3">
                        <AntDesign
                            name="minuscircleo"
                            color={colorScheme === "light" ? "black" : "white"}
                            size={24}
                            onPress={() => setCount(count - 1)}
                        />
                        <Text className="text-xl dark:text-white">{count}</Text>
                        <AntDesign
                            name="pluscircleo"
                            color={colorScheme === "light" ? "black" : "white"}
                            size={24}
                            onPress={() => setCount(count + 1)}
                        />
                    </View>
                    <Text className="text-2xl font-extrabold dark:text-white">
                        $ {price * count}
                    </Text>
                </View>
                <Text
                    numberOfLines={2}
                    className="text-sm text-black/60 dark:text-white"
                >
                    {description}
                </Text>
            </View>


            <TouchableOpacity className="self-center bg-black dark:bg-white p-3 rounded-full w-10/12 my-3 ">
                <Text className="text-white dark:text-black font-bold text-center">
                    Add To Cart
                </Text>
            </TouchableOpacity>
        </View>





    )
}
