import React from 'react'
import { useFetch } from "../../hooks/useFetch"

const config = () => {


const data = useFetch("/products");
const products = data || [];

const mapData = () => {
  products.map((product) => {
    return product.thumbnail
  })
}
useEffect(() => {
  console.log(mapData())
}, [products])





  return  baseUrl = mapData()
}

export default config