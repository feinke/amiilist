import React from "react";
import { RootState } from "../reducers";
import { connect, ConnectedProps } from "react-redux";
import Navigation from "../components/Navigation";
import { ProductItem } from "../components/ProductItem";
import { ButtonWishlistContainer } from "../containers/ButtonWishlistContainer";
import { Container, Row, Col } from "react-awesome-styled-grid";

const mapStateToProps = (state: RootState) => ({
  wishlist: state.wishlistReducer,
});

const connector = connect(mapStateToProps, {});
type Props = ConnectedProps<typeof connector>;

const Wishlist = (props: Props) => {
  const { wishlist } = props;
  const items = Object.values(wishlist.items);
  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          {items.length ? (
            <>
              {items.map((item, index) => (
                <Col xs={6} md={4} lg={6} key={index}>
                  <ProductItem item={item}>
                    <ButtonWishlistContainer item={item} />
                  </ProductItem>
                </Col>
              ))}
            </>
          ) : (
            <Col>Your wishlist is empty.</Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default connector(Wishlist);
