import * as types from "../../constants/wishlistTypes";
import * as actions from "../wishlistActions";

const testItem: types.Item = {
  head: "testhead",
  tail: "testtail",
  name: "testname",
  image: "testimage",
};

describe("wishlist actions", () => {
  it("should add item to wishlist", ()=>{

    const expectedAction = {
      type: types.ADD_TO_WISHLIST,
      payload: testItem,
    };

    expect(actions.addToWishlist(testItem)).toEqual(expectedAction);
  });
});
