import React from "react";
import { RootState } from "../reducers";
import { connect, ConnectedProps } from "react-redux";

interface WithLoginProps {
  isLoggedIn: boolean;
}

const withConnectedLogin = <P extends WithLoginProps>(
  WrapperComponent: React.ComponentType<P>
) => {
       const mapStateToProps = (state: RootState) => ({
         isLoggedIn: state.userReducer.isLoggedIn,
       });

       type HocProps = ReturnType<typeof mapStateToProps> & P & {};

       class Hoc extends React.Component<HocProps> {
         render() {
           const { isLoggedIn } = this.props;
           return (
             <>
               <WrapperComponent {...this.props} />
             </>
           );
         }
       }


       const ConnectedHoc = connect(mapStateToProps);
       return ConnectedHoc;
     };

export default withConnectedLogin;
