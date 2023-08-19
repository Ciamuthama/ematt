import * as React from 'react'
import {FlatList} from 'react-native'
import { product } from '../products'
import ProductCard from '../screens/productCard'

export default function ProductList() {
    
    return(
        <FlatList
            data={product}
            keyExtractor={(product) => product.id}
            renderItem={({ item }) =>
                < ProductCard { ...item} />
            }
        />
    )
}