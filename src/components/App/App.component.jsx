// import './App.css';
import React, {Component} from 'react';
import { connect} from 'react-redux';
// import { addButtonOne } from '../../redux/action';
// import SignUp from '../../SignUp.component';

//import actions to be used in mapPropsToDispatch
import  {addFromSaga } from '../../redux/addSub/addSub.actions';

class App extends Component {
  state = {

  }

  render() { 
    //destructure props functions and state
    const {num, increment} = this.props;
    return (
      <div>
        <h1>Redux Sagas Application</h1>
        <section>
            <h2>Value: {num.value}</h2>
            <button onClick={increment}>Increament</button>
            <button>Decrement</button>
        </section>
        <section>
          <h2>Elements:</h2>
          <input placeholder="Element Name" />
          <button>Add Element</button>
          <ul>
            {this.props.elements.map((element, index) => <li key={index}>{element}</li>)}
          </ul>
        </section>
        
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  elements: reduxState.elementReducer,
  num: reduxState.addSubReducer
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(addFromSaga())
});
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
