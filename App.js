import { Text, SafeAreaView, View } from "react-native";
import ProductList from "./ProductList/productList";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-sky-100 dark:bg-black ">
      <View className=' gap-5 items-center mb-3 mt-7'>
        <Text className='text-2xl font-bold dark:text-white text-center '>
          Welcome 🎉
        </Text>
      </View>
      < ProductList />

    </SafeAreaView>
  );
}

