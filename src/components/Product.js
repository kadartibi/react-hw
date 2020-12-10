import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from "@material-ui/core";


export default function Product(props) {
    const product = props.product;

    return (
        <Typography align="center" variant="h6">
            {product.title}<p/>
            {product.description}<p/>
            {product.price}
        </Typography>
        
    );
    }