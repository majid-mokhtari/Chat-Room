import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './../actions/listAction';

class AppContainer extends Component {

    componentWillMount(){
        this.props.actions.loadList();
    }

    render() {
        console.log(this.props)
        return (
            <div>Hello wrold</div>
        );
    }
}


function mapStateToProps(state) {
  const {listReducer} = state;
  return {
    listReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);