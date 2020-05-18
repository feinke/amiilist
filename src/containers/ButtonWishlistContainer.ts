import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../reducers";
import { addToWishlist, removeFromWishlist } from "../actions/wishlistActions";
import ButtonWishlist from "../components/ButtonWishlist";

const mapStateToProps = (state: RootState) => ({
  wishlist: state.wishlistReducer,
});

const mapDispatchToProps = {
  addToWishlist: addToWishlist,
  removeFromWishlist: removeFromWishlist
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

export const ButtonWishlistContainer = connector(ButtonWishlist);
