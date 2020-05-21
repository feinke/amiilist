import React from "react";
import { RootState } from "../reducers";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import { requestProducts } from "../actions/productActions";
import Navigation from "../components/Navigation";

const mapProps = (state: RootState) => ({
  products: state.productReducer.products,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchA: () => dispatch(requestProducts()),
});

const connector = connect(mapProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = ReduxProps & {};

class PlayHome extends React.Component<Props> {
  
  componentDidMount() {
    this.props.fetchA();
  }

  render() {
    const {products} = this.props;
    return <div>
      {products.map((item, index)=> (
        <div key={index}>
          {item.name}
        </div>
      ))}
    </div>;
  }
}

export default PlayHome;

export const PlayHomeContainer = connector(PlayHome);
