import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
// import { DISHES } from '../shared/dishes';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    // const HomePage = () => {
    //   return(
    //       <Home
    //         dish={this.state.dishes.filter((dish) => dish.featured)[0]}
    //         promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
    //         leader={this.state.leaders.filter((leader) => leader.featured)[0]} 
    //       />
    //   );
    // }

    // const DishWithId = ({match}) => {
    //   return(
    //       <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
    //         comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
    //   );
    // };

    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    }; 

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />    //So, how do I specify the menu component. If it is just a component which doesn't require any additional attributes are props to be passed to it. Then I can just simply specify the name of the computer component. So, I could have just said Menu here. And then it will work fine but then this approach of specifying the component will not allow me to pass in any props to the menu component. If I need to pass in props to a component through the specification of the route here, then I will have to pass that in as a function component. So I'm creating a function component in line here by specifying this here. So we'll say function component menu and then I'll say dishes, this.state.dishes. And then we will close off the menu component. So notice how I've specified the menu component here. So the component specification here as you see being specified here. The reason they specify it like this here is because this way I can pass in a props to the menu component. Now in this case, my menu component will only receive dishes. It won't receive the OnClick method anymore
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
          <Redirect to="/home" />
         </Switch>         
        <Footer/>
      </div>            
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));