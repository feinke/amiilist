import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../reducers";
import {
  fetchProducts,
  fetchProductsIfNeeded,
} from "../actions/productActions";
import ProductList from "../components/ProductList";

const mapStateToProps = (state: RootState) => ({
  products: state.productReducer.products,
  isFetching: state.productReducer.isFetching,
});

const mapDispatchToProps = {
  fetchProduct: fetchProducts,
  fetchProductsIfNeeded: fetchProductsIfNeeded,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export const ProductListContainer = connector(ProductList);