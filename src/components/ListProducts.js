import React, {useContext} from 'react';
import {ProductContext} from './context/ProductsContext';
import Grid from "@material-ui/core/Grid";
import Product from "./Product";

export default function ListProducts() {
    const [products, setProducts, available, setAvailable, stock, setStock] = useContext(ProductContext);
    return (
        <Grid  
        container
        item xs={12} spacing={3}
        direction="column"
        justify="space-between"
        alignItems="center"
        >
            {products.map((product) => (
                <Grid item>
                    <Product product={product}></Product>
                </Grid>
            ))}
        </Grid>
    );
}