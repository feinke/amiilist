import React from "react";
import { PropsFromRedux } from "../containers/ProductListContainer";
import { ProductItem } from "./ProductItem";
import { Container, Row, Col } from "react-awesome-styled-grid";
import { ButtonWishlistContainer } from "../containers/ButtonWishlistContainer";

type Props = PropsFromRedux & {};

class ProductList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchProductsIfNeeded();
  }

  render() {
    const { products, isFetching } = this.props;

    return (
      <Container>
        <Row>
          {!isFetching &&
            products.map((product, index) => (
              <Col xs={6} md={4} lg={6} key={index}>
                <ProductItem item={product}>
                  <ButtonWishlistContainer item={product} />
                </ProductItem>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default ProductList;
