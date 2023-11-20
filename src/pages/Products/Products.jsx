import { useLocation } from 'react-router-dom';

import css from './Products.module.css';

import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal/Modal.jsx';

import { useDispatch } from 'react-redux';
import { useProducts } from '../../hooks';
import {
  fetchProductCategories,
  fetchProducts,
} from '../../redux/products/operations';
import { findProductByText } from '../../redux/products/slice.jsx';

import AddProductForm from '../../components/products/AddProductForm/AddProductForm.jsx';

import NotFound from '../../components/products/NotFound/NotFound.jsx';
import { AddProductsSuccess } from '../../components/products/AddProductsSuccess/AddProductsSuccess.jsx';
import ProductsFilters from '../../components/products/ProductsFilters/ProductsFilters.jsx';
import ProductsList from '../../components/products/ProductsList/ProductsList.jsx';

const Products = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { products, loading, categories, filter, filterRec, filterByText } =
    useProducts();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessModal1, setShowSuccessModal1] = useState(false);

  const [productData, setProductData] = useState({});
  const [caclCall, setCalcCall] = useState(0);
  const [amount, setAmount] = useState(0);
  const [productId, setProductId] = useState('');
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  const showProducts =
    Array.isArray(products.products) && products.products.length > 0;

  let showCloseBtn = false;
  if (filterByText !== '') {
    showCloseBtn = true;
  }

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchProductCategories());
  }, [dispatch]);

  useEffect(() => {
    setIsAnyModalOpen(showSuccessModal || showSuccessModal1);
  }, [showSuccessModal, showSuccessModal1]);

  useEffect(() => {
    document.body.style.overflow = isAnyModalOpen ? 'hidden' : 'auto';
  }, [isAnyModalOpen]);

  const getVisibleProducts = () => {
    if (!filter || filter.value === 'all' || filter.value === 'All') {
      return products.products;
    } else {
      return products.products.filter((product) =>
        product.item.category.toLowerCase().trim().includes(filter.value),
      );
    }
  };
  const visibleProducts = getVisibleProducts();

  const getVisibleProducts1ByRec = () => {
    if (filterRec === '') {
      return visibleProducts;
    } else {
      return visibleProducts.filter(({ allowed }) => allowed === filterRec);
    }
  };
  const VisibleProducts1ByRec = getVisibleProducts1ByRec();

  const getVisibleProductsByTitle = () => {
    if (!filterByText) {
      return VisibleProducts1ByRec;
    } else {
      return VisibleProducts1ByRec.filter(({ item }) =>
        item.title.toLowerCase().trim().includes(filterByText.toLowerCase()),
      );
    }
  };
  const visibleProductsByTitle = getVisibleProductsByTitle();

  const toggleSuccessModal = () => {
    setShowSuccessModal((prevState) => !prevState);
    if (!showSuccessModal) {
      setCalcCall(0);
    }
  };

  const toggleSuccessModalTest = () => {
    setShowSuccessModal1((prevState) => !prevState);
  };

  const toggleSuccessModal1 = (data) => {
    setProductData(data);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    setProductId(productData._id);
    setCalcCall(Math.round((value * productData.calories) / 100));
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    dispatch(findProductByText(value));
  };

  const handleClearInput = (event) => {
    event.preventDefault();
    dispatch(findProductByText(''));
  };

  return (
    <div className={css.background}>
      <section className={css.productsSection}>
        <p className={css.toolTip}>Filters</p>
        <div className={css.titleSearchBox}>
          <h1 className={css.title}>Products</h1>
          <ProductsFilters
            handleClearInput={handleClearInput}
            handleSearchChange={handleSearchChange}
            showCloseBtn={showCloseBtn}
            filterByText={filterByText}
            categories={categories}
          />
        </div>

        {(visibleProductsByTitle?.length === 0 && <NotFound />) || (
          <ProductsList
            visibleproducts={visibleProductsByTitle}
            toggleSuccessModal={toggleSuccessModal}
            toggleSuccessModal1={toggleSuccessModal1}
            showProducts={showProducts}
            loading={loading}
          />
        )}

        {showSuccessModal && (
          <Modal onClose={toggleSuccessModal}>
            <AddProductForm
              toggleSuccessModal={toggleSuccessModal}
              toggleSuccessModalTest={toggleSuccessModalTest}
              handleChange={handleChange}
              productData={productData}
              caclCall={caclCall}
              amount={amount}
              productId={productId}
            />
          </Modal>
        )}

        {showSuccessModal1 && (
          <Modal onClose={toggleSuccessModalTest}>
            <AddProductsSuccess
              toggleSuccessModalTest={toggleSuccessModalTest}
              caclCall={caclCall}
              location={location}
            />
          </Modal>
        )}
      </section>
    </div>
  );
};

export default Products;
