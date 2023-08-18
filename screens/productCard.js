import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import { AntDesign } from "@expo/vector-icons";

export default function ProductCard({
    image,
    category,
    title,
    price,
    description,
}) {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    const [count, setCount] = useState(1);

    return (
        <View className="w-full bg-white dark:bg-gray-500 rounded-3xl p-5 my-5 ">
            <TouchableOpacity className='bg-white rounded-xl'>
                <Image
                    source={{ uri: image }}
                    className="w-full h-72"
                    style={{ resizeMode: "contain" }}
                />
            </TouchableOpacity>
            <View className='mt-5'>
                <Text>{category}</Text>
                <Text>{title}</Text>
                <Text>{description}</Text>
                <Text>{price}</Text>
            </View>
        </View>
    );
}
