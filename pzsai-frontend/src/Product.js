import {TextField} from "@mui/material"
import {useState, useCallback, useEffect} from "react";
import './App.css';
import axios from 'axios';
import { drawBarCode} from './barcode-generator'

function Product({product, onClick}) {

   
   useEffect( () => {
    setTimeout( () => {
        drawBarCode(product.code,  product.id)
    }, 100)
   }, []) 

  return (
    <div className="product-wrapper" onClick={onClick}>
       <img src={product.imgUrl} alt={'product photo'} className="product-img-container"/> 
       <div class="info-container">
       <p>{product.title}</p>
       <p>Description: {product.description}</p>
       <p>Price: {product.price / 100} UAH</p>
       <p>In stock: {product.inventoryCount}</p>
       <p>Brand: {product.brand}</p>
       <canvas className="barcode" id={product.id}></canvas>
       </div>
    </div>
  );
}

export default Product;
