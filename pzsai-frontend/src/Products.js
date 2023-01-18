import {TextField, Dialog} from "@mui/material"
import {useState, useCallback, useEffect, useLayoutEffect} from "react";
import './App.css';
import axios from 'axios';
import Product from './Product'
import { drawBarCode} from './barcode-generator'

function Products() {
    
    const [products, setProducts] = useState(['test'])
    const [search, setSearch] = useState('')

    const getProducts = useCallback( async (search) =>  {
      try {
        const res = await axios.get(`http://localhost:3000/`, { params: { search } });
        setProducts(res.data)
      } catch (e) {
        console.log(e)
      }
        
    }, [])

    useEffect( () => {
        getProducts(search)
    }, [search])

  return (
    <div className="wrapper-main"> 
      <TextField className="search" id="outlined-basic" label="Search" variant="outlined" onChange={(e) => setSearch(e.target.value)}/>
      <div className="products-wrapper">
      {products.map( product => {
        return <Product key={product.id} product={product} />
      })}
      </div>
    </div>
  );
}

export default Products;
