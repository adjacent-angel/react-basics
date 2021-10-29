import './App.css';
import React, {Component} from 'react';
import { connect} from 'react-redux';
import { addButtonOne } from './redux/action';
 
//import for react-router-dom
// import{ Link, Route, Switch } from 'react-router-dom';

// import pages
// import HomePage from './Pages/HomePage.component';
// import AboutPage from './Pages/AboutPage.component';
// import ServicePage from './Pages/ServicePage.component';
// import ServicePageDetails from './Pages/ServicePageDetails.component';

class App extends Component {
  state = {

  }

  componentDidMount() {
    console.log(this.props);
  }

  render() { 
    return (
      <div>
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={ServicePage} />
          <Route path="/service/:serviceId" component={ServicePageDetails} />
          <Route path="/about" component={AboutPage} />
        </Switch> */}
        <h1>App Component</h1>
        <div>
          <h3>Button One's count: {this.props.button1.count}</h3>
          <button onClick={this.props.handleButtonOne}>Add to Button One Count</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  button1: reduxState.buttonOneReducer,
  user: reduxState.userReducer
});

const mapDispatchToProps = dispatch => ({
  handleButtonOne: (event) => dispatch(addButtonOne())
});
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
