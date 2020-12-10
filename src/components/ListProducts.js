import React, {useContext} from 'react';
import {ProductContext} from './context/ProductsContext';
import { useCookies } from 'react-cookie';

//Mui
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
      maxWidth: "70%",
      marginLeft: "15%"
    },
  });

export default function ListProducts() {
    const [products, setProducts, available, setAvailable, stock, setStock] = useContext(ProductContext);
    const [cookies, setCookie] = useCookies();
    const classes = useStyles();

    const addToCart = (productId) =>{
        console.log("Product added to cart with this id: " + productId)
    }
    
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Product name</StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">In stock</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {products.map((product) => (
                    <StyledTableRow key={product.id}>
                    <StyledTableCell component="th" scope="row">
                        {product.title}
                    </StyledTableCell>
                    <StyledTableCell align="right">{product.description}</StyledTableCell>
                    <StyledTableCell align="right">{cookies.firstVisit === "true" && product.discounts[1] !== undefined ?
                    (product.price + product.discounts[1].value):
                    (cookies.Age > 65 ? (product.price * (100 + product.discounts[0].value)/100):(product.price))}</StyledTableCell>
                    <StyledTableCell align="right">{stock[product.title]}</StyledTableCell>
                    <StyledTableCell align="right">{available.includes(product.id)?(<button onClick={() => addToCart(product.id)}>ADD TO CART</button>):(<p>Item not Available</p>)}</StyledTableCell>
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

//TODO: add to cart, cart(localstorage), delete from cart, fix first visit cookie