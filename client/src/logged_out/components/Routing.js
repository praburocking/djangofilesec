import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Verification from "./verification/verification";
import { Route } from "react-router-dom";


function Routing(props) {
  const { blogPosts, selectBlog, selectHome } = props;
  return (
    <Switch>
 
      <PropsRoute
        exact
        path="/faq"
        component={Blog}
        selectBlog={selectBlog}
        blogPosts={blogPosts}
      />
      
      <Route exact path="/verify/:type/:token" render={({match})=><Verification type={match.params.type} token={match.params.token}/>}></Route>
      <PropsRoute path="/" component={Home} selectHome={selectHome} openRegisterDialog={props.openRegisterDialog}/>

     
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
  selectVerification:PropTypes.func.isRequired
};

export default memo(Routing);
