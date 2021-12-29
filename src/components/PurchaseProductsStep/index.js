import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '250px'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  cusMarginTop: {
    marginTop: '50px'
  },
  cusMarginLeft: {
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '10px'
  },
  pos: {
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '40px',
    minHeight: '40px'

  },
  prefix: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#666',
    position: 'relative',
    top: '2px'
  },
  price: {
    color: 'rgb(45, 167, 122)',
    lineHeight: 1,
    display: 'inline-block',
    verticalAlign: 'middle',
    margin: '0px',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  btnAdd: {
    backgroundColor: 'rgb(255, 255, 255)',
    color: 'rgb(45, 167, 122)',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    padding: '6px 12px',
    marginBottom: '0px',
    lineHeight: '1.42857',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundImage: 'none',
    borderRadius: '50px',
    border: '2px solid rgb(45, 167, 122)',
    justifyContent: 'center',
    margin: '0 auto', 
    
  },
  btnAddCart: {
    color: 'rgb(45, 167, 122)',
    fontSize: '30px',
    cursor: 'pointer'

  },
  btnRemoveCart: {
    color: 'rgb(212, 63, 58)',
    fontSize: '30px',
    cursor: 'pointer'
  },
  centerText: {
    textAlign: 'center'
  },
  cusInput: {
    borderRadius: '20px'
  },
  cusDescription: {
    color: '#666',
    fontSize: '11px',
    textAlign: 'center',
    marginTop: '15px'
  },
  cusQuantity: {
    fontWeight: 'bold',
    color: 'rgb(45, 167, 122)'
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function PurchaseProductsStep({setPropsProducts, valueProducts, productsItems, setPropsTotalAmount, valueTotalAmount}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [productChartName, setProductChartName] = useState();
  const [statusPurchase, setStatusPurchase] = useState();
  const [products, setProducts] = useState([]);
  
  function currencyFormat(num) {
    return num.toFixed(2).replace('.', ',')
  }
  
  function generateId (name, index) {
    return `${name}_${index}`
  }
  
  function generateFieldCart ( hide, show, product, input_id ) {
    setOpen(true);
    setStatusPurchase("adicionado ao")
    hideElement(hide, show)
    setProductChartName(product.name)
    setPropsTotalAmount(valueTotalAmount + product.price)
    
    let product_quantity = document.getElementById(input_id);
    product_quantity.value =  1;

    let productObj = {id: product._id, quantity: 1, price: product.price}
    setProducts([...products, productObj]);
    setPropsProducts(products);    
  };

  function hideElement(hide, show) {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
  }

  function incrementCart(input_id, product) {
    let product_quantity = document.getElementById(input_id);
    if(parseInt(product_quantity.value) === product.qty_stock ) return false;

    product_quantity.value =  parseInt(product_quantity.value) + 1;
    setStatusPurchase("adicionado ao");
    setOpen(true);
    
    let aux_products = []
    products.forEach(current_product => {      
      if(current_product.id === product._id) aux_products.push({id: current_product.id, quantity: parseInt(product_quantity.value), price: current_product.price})  
      else aux_products.push(current_product)
    });
    
    setPropsTotalAmount(valueTotalAmount + product.price)
    setProducts(aux_products);    
  }

  function decrementCart(input_id, product, hide, show) {
    setOpen(true);
    setStatusPurchase("removido do")
    let product_quantity = document.getElementById(input_id);
    product_quantity.value =  parseInt(product_quantity.value) - 1;
    if(parseInt(product_quantity.value) === 0) hideElement(hide, show)
    
    let aux_products = []
    products.forEach(current_product => {      
      if(current_product.id === product._id) aux_products.push({id: current_product.id, quantity: parseInt(product_quantity.value), price: current_product.price})  
      else aux_products.push(current_product)
    });

    console.log("===============")
    console.log(valueTotalAmount)
    console.log( product.price)
    console.log("===============")
    
    setPropsTotalAmount(valueTotalAmount - product.price)
    setProducts(aux_products);    
  }

  function setQuantityProducts() {
    
    
    valueProducts.forEach(currentValueProduct => {
      
      let position = productsItems.map(function(e) { return e._id; }).indexOf(currentValueProduct.id);
      setTimeout(() => {
        hideElement(`btn_${position}`, `card_${position}`,)
        let current_input = document.getElementById(`input_${position}`)
        current_input.value = currentValueProduct.quantity;
        setProducts(valueProducts)
      }, 1000);
      
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  useEffect(() => setPropsProducts(products), [products]);

  useEffect(() => { setQuantityProducts(); }, []);

  return (
    
    <Grid container spacing={3}>
      {
        productsItems.map((product, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                  {product.name}
                </Typography>
                <Typography variant="body2" component="p" className={classes.centerText}>
                  <span className={classes.prefix}> R$ </span> <span className={classes.price}> {currencyFormat(product.price)} </span>
                </Typography>
              </CardContent>
              <CardActions id={generateId('btn', index)} textAlign='center' >
                <Button size="small" className={classes.btnAdd} onClick={() => generateFieldCart(`btn_${index}`, `card_${index}`, product, `input_${index}`)}> <AddIcon /> Adicionar </Button>
              </CardActions>

              <CardActions class="cardInput" id={generateId('card', index)} textAlign='center' >
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                  <Grid item xs={2} > 
                    <RemoveCircleIcon 
                      className={classes.btnRemoveCart} 
                      onClick={() => decrementCart(`input_${index}`, product, `card_${index}`, `btn_${index}`)} 
                    /> 
                  </Grid>
                  <Grid item xs={4} >
                    <TextField 
                      className={classes.cusInput} 
                      id={generateId('input', index)} 
                      aria-readonly 
                      inputProps={{min: 0, style: { textAlign: 'center',  }}}
                    />
                  </Grid>
                  <Grid item xs={2} > 
                    <AddCircleIcon 
                      className={classes.btnAddCart} 
                      onClick={() => incrementCart(`input_${index}`, product)} /> 
                  </Grid>
                </Grid>
                <p className={classes.cusDescription}> 
                A quantidade máxima para esse item é <span className={classes.cusQuantity}> {product.qty_stock} </span>.
                </p>
              </CardActions>

            </Card>
          </Grid>
        ))
      }

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" style={{fontSize: '12px'}}>
          O produto {productChartName} foi {statusPurchase} carrinho.<br/>
          <span >Valor total da compra <strong> R$ {currencyFormat(valueTotalAmount)}</strong> </span>
        </Alert>
      </Snackbar>



    </Grid>

  )
}

export default PurchaseProductsStep;