import { StatusBar } from "expo-status-bar";
import { Switch, Text, SafeAreaView, View} from "react-native";
import {useColorScheme} from "nativewind"
import ProductList from "./ProductList/productList";

export default function App() {
  const { colorScheme,toggleColorScheme } = useColorScheme()
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-sky-100 dark:bg-black ">
      <View className='flex-row w-full gap-5 items-center m-4'>
      <Text className='text-2xl font-bold dark:text-white'>
        New Collection
        </Text>
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme}/>
      </View>
      < ProductList className='dark:text-white'/>
      <StatusBar style={colorScheme === 'dark' ? 'light' : "dark"} />
    </SafeAreaView>
  );
}

