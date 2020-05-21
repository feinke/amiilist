import { wishlistReducer } from "../wishlistReducer";
import * as types from "../../constants/wishlistTypes";
import * as actions from "../../actions/wishlistActions";

const initialState: types.WishlistState = {
  items: {},
};

const payload = {
  head: "1",
  tail: "2",
  name: "name",
  image: "image",
};

const sampleState: types.WishlistState = {
  items: {
    "12": { ...payload },
  },
};

describe("wishlist reducer", () => {
  it("should add", () => {
    expect(
      wishlistReducer(initialState, {
        type: types.ADD_TO_WISHLIST,
        payload: payload,
      })
    ).toEqual(sampleState);
  });

  it("should remove", () => {
    expect(
      wishlistReducer(sampleState, {
        type: types.REMOVE_FROM_WISHLIST,
        payload: "12",
      })
    ).toEqual(initialState);
  });
});
