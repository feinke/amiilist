import React from 'react';
import { RootState } from '../reducers';
import { connect, ConnectedProps } from 'react-redux';
import { ProductItem } from '../components/ProductItem';

const mapStateToProps = (state:RootState) => ({
  wishlist: state.wishlistReducer
})

const connector = connect(mapStateToProps, {});
type Props = ConnectedProps<typeof connector>;

const Wishlist = (props: Props) => {
  return (
    <div>
      {props.wishlist.map((item, index) => (
        <ProductItem item={item} key={index} />
      ))}
    </div>
  );
};

export default connector(Wishlist);