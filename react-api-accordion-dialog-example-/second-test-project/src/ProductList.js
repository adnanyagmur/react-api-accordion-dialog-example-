import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import SimpleDialogDemo from './DİaDeneme';
//import { Button } from 'reactstrap';




export default function ProductList() {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  /*   state = {
      products: []
    }
  
    componentDidMount() {
      axios.get(`https://fakestoreapi.com/products`)
        .then(res => {
          const products = res.data;
          this.setState({ products });
        })
    } */

  const [products,setProducts] = useState([]);

 

  useEffect(() => { axios.get('https://fakestoreapi.com/products').then((res) => {
   setProducts(res?.data); console.log(res.data)
  })},[]);

/*   const getAllProducts = () => {
   
     
        const products = response.data;
        this.useEffect({products})
      })
     /*  .catch(error => console.error("error:" + { error })) */
   

console.log(products.id);



  return (
    <div className='container'>

      {products?.map(product =>
          <Accordion expanded={expanded === "panel"+product.id} onChange={handleChange("panel"+product.id)}>


            <AccordionSummary expandIcon={<img src='https://cdn-icons-png.flaticon.com/512/1077/1077976.png' width="50" height="50" />} aria-controls="panel1d-content" id="panel1d-header"  >
              <img src={product.image} width="200" height="250" />
              <Typography key={product.id} marginLeft='750px' marginTop='100px'> <h3 align='right'>Price:      {product.price} $ </h3></Typography>
            </AccordionSummary>

            <AccordionDetails >
              <Typography >
                <h3>
                  Title: {product.title}    </h3>
                <Typography align='right' >


                  <SimpleDialogDemo product= {product}></SimpleDialogDemo>


                </Typography>
              </Typography>
            </AccordionDetails>

          </Accordion>
        )}
    </div>
  );

}


