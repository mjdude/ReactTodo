var React = require('react');
var {connect} = require('react-redux');


export var Login = (props) => {
    return (
      <div>
        <div>Login</div>
        <div>
          {props.children}
        </div>
      </div>
    );
};

export default connect()(Login);
