import React, {useState, useEffect} from 'react'
import * as S from './style'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import api from '../../services/api'
import ProductsTable from '../../components/ProductsTable'

function Stock() {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    await api.get(`/product`)
    .then((result) => {
      
      setProducts(result.data);
      
    }).catch((err) => {
      console.log("Erro inesperado.")   
    });
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <S.Container>
      <Header/>

      <S.Title> 
        <h3> ESTOQUE </h3>
      </S.Title>

      <S.Content>
        <ProductsTable products={products} />
      </S.Content>

      <Footer/>
    </S.Container>
  )
}

export default Stock;
