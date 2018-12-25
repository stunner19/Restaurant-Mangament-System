import React, { Component } from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment,fetchDishes,fetchComments, fetchPromos} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  // The call, this is a thunk, and so we can dispatch that punk by using dispatch and in order to do the dispatch, I need to map it in the 
  // DispatchToProp so that dispatch dishes becomes available for my main component to make use of. So, in the main component I need to fetch
  // the dishes.
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
  // So the form will be named as feedback and so these actions that we import from React-Redux-Form adds in the necessary actions for 
  // resetting the form which we will label as "feedback." So the corresponding model will be called feedback.
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {

    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoLoading={this.props.promotions.isLoading}
              promoErrMess={this.props.promotions.errMess}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            commentsErrMess={this.props.comments.errMess}
            addComment={this.props.addComment}
            />
      );
    }; 

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />    //So, how do I specify the menu component. If it is just a component which doesn't require any additional attributes are props to be passed to it. Then I can just simply specify the name of the computer component. So, I could have just said Menu here. And then it will work fine but then this approach of specifying the component will not allow me to pass in any props to the menu component. If I need to pass in props to a component through the specification of the route here, then I will have to pass that in as a function component. So I'm creating a function component in line here by specifying this here. So we'll say function component menu and then I'll say dishes, this.state.dishes. And then we will close off the menu component. So notice how I've specified the menu component here. So the component specification here as you see being specified here. The reason they specify it like this here is because this way I can pass in a props to the menu component. Now in this case, my menu component will only receive dishes. It won't receive the OnClick method anymore
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
          <Redirect to="/home" />
         </Switch>         
        <Footer/>
      </div>            
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));