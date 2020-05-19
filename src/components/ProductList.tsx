import React, { useEffect } from "react";
import { PropsFromRedux } from "../containers/ProductListContainer";
import { ProductItem } from "./ProductItem";
import { Container, Row, Col } from "react-awesome-styled-grid";
import {ButtonWishlistContainer} from "../containers/ButtonWishlistContainer";

type Props = PropsFromRedux & {};

const ProductList = (props: Props) => {
  useEffect(props.fetchProduct, []);

  return (
    <Container>
      <Row>
        {!props.isFetching &&
          props.products.map((product, index) => (
            <Col xs={6} md={4} lg={6} key={index}>
              <ProductItem item={product}>
                <ButtonWishlistContainer item={product} />
              </ProductItem>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProductList;
