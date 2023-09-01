// APP COMPONENT //

/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import Checkout from './Checkout';
import ShoppingBag from './ShoppingBag';
import Home from './Home';
import Footer from './Footer';
import Success from './Success';
import Empty from './Empty'
import '../styles/_App.scss'

import ProductDetail from './ProductDetail/ProductDetail';
import { cleanFetchedData } from '../helperFunctions';

function App() {
  const [cookies, setCookie] = useCookies(['shoppingBag']);
  const [shoppingBag, setShoppingBag] = useState([])
    
  const { loading, error, data } = useQuery(GET_ALL_ITEMS)
  const [totalPrice, setTotalPrice] = useState(0);
  const [items, setItems] = useState([]);
  const [itemsForDisplay, setItemsForDisplay] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (cookies.shoppingBag) {
      setShoppingBag([...cookies.shoppingBag]);
    }
  }, [])  

  useEffect(() => {
    setCookie('shoppingBag', shoppingBag)
  }, [shoppingBag])

  const addTotalPrice = () => {
    const total = shoppingBag.reduce((price, item) => {
      return price += (item.price * item.quantity)
    }, 0)
    setTotalPrice(parseInt(total).toFixed(2))
  }

  const emptyShoppingBag = () => {
    setShoppingBag([])
  }

  const updateSuccessMessage = (res) => {
    res ? setSuccessMessage(res.data.createOrderForm.message) : setSuccessMessage('');
  }

  useEffect(() => {
    addTotalPrice();
  }, [shoppingBag])


  const removeItemFromBag = id => {
    setShoppingBag(shoppingBag.filter(item => item.id !== parseInt(id)))
  }

  const updateQuantity = (id, operation = 'subtract', change) => {
    let index;
    const newItem = shoppingBag.find((item, i) => {
      index = i;
      return item.id === id
    })
    operation === 'add' ? newItem.quantity += Number(change) : newItem.quantity -= Number(change);
    !newItem.quantity ?
      removeItemFromBag(id) :
        setShoppingBag(shoppingBag => {
          const newBag = [...shoppingBag]
          newBag.splice(index, 1, newItem)
          return newBag
        })
  }
 
  const addToShoppingBag = (item) => {
    setShoppingBag([...shoppingBag, item]);
  }

  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    if (!items.length && !loading && !error) {
      setItems(data.products);
    }
  }, [data]);

  useEffect(() => {
    const displayProducts = cleanFetchedData(items);
    setItemsForDisplay(displayProducts);
  }, [items]);

  return (
    <div className="app">
      {!loading && !error &&
        <>
          {successMessage && <Success successMessage={successMessage} updateSuccessMessage={updateSuccessMessage}/>}
          <Routes>
            <Route 
              path='/' 
              element={<Home 
                itemsForDisplay={itemsForDisplay} 
              />} 
            />
            <Route 
              path='/shopping-bag' 
              element={<ShoppingBag 
                shoppingBag={shoppingBag} 
                totalPrice={totalPrice} 
                removeItemFromBag={removeItemFromBag} 
                updateQuantity={updateQuantity} 
              />} 
            />
            <Route 
              path='/checkout' 
              element={<Checkout 
                shoppingBag={shoppingBag} 
                totalPrice={totalPrice} 
                emptyShoppingBag={emptyShoppingBag} 
                updateSuccessMessage={updateSuccessMessage}
              />}
            />
            <Route 
              path='/products/:productID' 
              element={<ProductDetail 
                updateQuantity={updateQuantity} 
                shoppingBag={shoppingBag} 
                addToShoppingBag={addToShoppingBag} 
                itemsForDisplay={itemsForDisplay} 
              />}
            />
            <Route
              path='/*'
              element = {<Empty/>}
            />
          </Routes>
          <Footer />
        </>
      }
    </div>
  );
}


export default App;
