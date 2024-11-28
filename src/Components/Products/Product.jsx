import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Product.scss';
import { useModal } from '../ModalContext';
import { useCart } from '../CartContext';
import '../Pages/ProductDetails.scss';

function Product({
  id,
  title,
  description,
  price,
  imageUrl,
  productCode,
  stock,
  brand,
  category,
  rating,
  isAvailable,
  size,
}) {
  const { addToCart } = useCart();
  const { openModal } = useModal();
  return (
    <div>
      <div
        className='product-card'
        onClick={() =>
          openModal({
            id,
            title,
            description,
            price,
            imageUrl,
            productCode,
            stock,
            brand,
            category,
            rating,
            isAvailable,
            size,
          })
        }
      >
        <div className='product-image'>
          {Array.isArray(imageUrl) && imageUrl.length > 0 ? (
            <img src={imageUrl[0]} alt={title} />
          ) : (
            <img src='/placeholder.jpg' alt='No Image Available' />
          )}
        </div>

        <div className='product-info product-info-background'>
          <div className='product-title'>
            {brand} | {title}
          </div>
          <div className='product-price'>{price} €</div>
          <div className='product-description'>{description}</div>
          <div className='bottom-card'>
            <div className='link-icon-pair'>
              {' '}
              <NavLink to='' onClick={addToCart}>
                U Košaricu{' '}
              </NavLink>
              <i className='fas fa-shopping-cart'></i>
            </div>

            <div className='link-icon-pair'>
              <NavLink to={`/bicikli/${id}`}>Detalji proizvoda</NavLink>
              <i className='fa-solid fa-arrow-right'></i>
            </div>
          </div>
        </div>
      </div>
      {/*     {showToast && isAvailable && (
        <div className="toast show">
          Proizvod {`${id}`} je dodan u Vašu košaricu !
        </div>
      )} */}
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.array.isRequired,
  productCode: PropTypes.string,
  stock: PropTypes.number,
  brand: PropTypes.string,
  category: PropTypes.string,
  rating: PropTypes.number,
  isAvailable: PropTypes.bool.isRequired,
  size: PropTypes.string,
};

export default Product;
