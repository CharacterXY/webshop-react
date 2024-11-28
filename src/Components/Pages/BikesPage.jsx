import { useEffect, useReducer } from 'react';
import { useQuery } from 'react-query';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Product from '../Products/Product';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SidebarProducts from '../SidebarProducts/SidebarProducts';
//import { useModal } from '../ModalContext';
import ShoppingCart from './Cart';
import '../../assets/main.scss';
import './BikesPage.scss';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import {
  //getProducts,
  getNumberOfProducts,
  getPaginatedProducts,
} from '../../utils/api';

function Bikes() {
  const { data: numbersOfProducts, isLoading: isLoadingNUmbersOfProducts } =
    useQuery(`getNumberOfProducts`, getNumberOfProducts, {
      cacheTime: 0,
      select: (data) => data.total, // Set cacheTime to 0 to always /*  */fetch fresh data
    });

  /*   const { data: paginatedProducts, isLoading: isLoadingPaginatedProducts } =
    useQuery(`getPaginatedProducts`, getPaginatedProducts, {
      cacheTime: 0,
    }); */

  const initialState = {
    products: [],
    filteredProducts: [],
    price: 0,
    showFullDescription: false,
    isLoading: true,
    numbersOfProducts: 0,
    limitPerPage: 6,
    pages: 0,
    page: 1,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'initialize':
        return {
          ...state,
          products: action.payload,
          filteredProducts: action.payload,
          isLoading: false,
        };

      case 'geNumbersOfProducts':
        return {
          ...state,
          numbersOfProducts: action.payload,
        };

      case 'getNumberOfPages': {
        return {
          ...state,
          pages: state.numbersOfProducts / Math.ceil(state.limitPerPage),
        };
      }

      case 'SET_TOTAL_PRODUCTS': {
        const totalPages = Math.ceil(action.payload / state.limitPerPage);
        return {
          ...state,
          numbersOfProducts: action.payload,
          pages: totalPages, // Automatski izračunaj broj stranica
        };
      }

      case 'SET_PAGE_NUMBER': {
        return {
          ...state,
          page: action.payload,
        };
      }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    products,
    //filteredProducts,
    //price,
    isLoading,
  } = state;

  useEffect(() => {
    const fetchPaginatedProducts = async () => {
      if (!isLoadingNUmbersOfProducts) {
        dispatch({ type: 'SET_TOTAL_PRODUCTS', payload: numbersOfProducts });
      }
      try {
        const paginatedProducts = await getPaginatedProducts(
          state.page,
          state.limitPerPage
        );
        const formattedProducts = paginatedProducts.map((product) => ({
          id: product.productId,
          title: product.productModel,
          description: product.productDescription,
          price: product.productPrice,
          stock: product.productStock,
          imageUrl: product.productPictures.map(
            (picture) => `http://localhost:3000${picture.pictureUrl}` // Dodaj bazni URL
          ),
          brand: product.productBrend,
          category: product.categoryId,
          rating: product.productRating,
          isAvailable: product.productIsavailable,
          atDiscount: product.productAtdiscount,
          discount: product.productDiscount,
        }));
        console.log('formattedProducts:', formattedProducts);

        dispatch({ type: 'initialize', payload: formattedProducts });
      } catch (error) {
        console.error('Error fetching paginated products:', error);
      }
    };

    fetchPaginatedProducts();
  }, [state.page, state.limitPerPage]);

  const handlePageChange = async (event, value) => {
    console.log('value je tip', typeof value);
    event.preventDefault();
    dispatch({ type: 'SET_PAGE_NUMBER', payload: value });
    try {
      const paginatedProducts = await getPaginatedProducts(
        value,
        state.limitPerPage
      );
      dispatch({ type: 'initialize', payload: paginatedProducts });
    } catch (error) {
      console.error('Error fetching paginated products:', error);
    }
  };

  console.log('Products:', products);
  console.log('State numbersOfProducts:', state.numbersOfProducts);
  console.log('pages', state.pages);
  return (
    <>
      <Header />
      <ShoppingCart />
      <div className='container-wrapper'>
        <SidebarProducts
          products={products}
          //setFilteredProducts={setFilteredProducts}
          //price={price}
          //setPrice={setPrice}
        />
        <div className='main-content'>
          <div className='card-container-header'>
            <div className='breadcrumb'>
              <h3>
                <NavLink to='/'>Home</NavLink> /{' '}
                <span className='actual_page'>Bicikli</span>
              </h3>
            </div>
          </div>
          <div className='card-container'>
            {isLoading ? (
              <CircularProgress color='success' size={80} thickness={2} />
            ) : products.length ? (
              products.map((product) => (
                <Product
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  stock={product.stock}
                  brand={product.brand}
                  category={product.category}
                  rating={product.rating}
                  isAvailable={product.isAvailable}
                />
              ))
            ) : (
              <CircularProgress color='success' size={80} thickness={2} />
            )}
          </div>
          <div className='pagination'>
            <Stack spacing={2}>
              {console.log(state.pages)}
              {console.log(state.page)}
              <Pagination
                count={state.pages}
                page={state.page}
                variant='outlined'
                shape='rounded'
                color='secondary'
                onChange={handlePageChange}
              />
            </Stack>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Bikes;
