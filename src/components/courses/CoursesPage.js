// this file is a class component with the redux-connect HOC, where the component is connected to the redux store using the connect function from react-redux

import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions"; // import all actions from courseActions
import PropTypes from "prop-types"; // import PropTypes for type checking
import { bindActionCreators } from "redux"; // import bindActionCreators to bind action creators to dispatch

class CoursesPage extends React.Component {
  // class field syntax (ES2022) allows you to define class properties and methods without using the constructor function below
  state = {
    course: {
      title: ""
    }
  };

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       course: {
  //         title: ""
  //       }
  //     };

  //     // no need to do this below, as the handleChange method is bound to the class instance with the arrow function
  //     //this.handleChange = this.handleChange.bind(this);
  //   }

  // arrow function inherits the binding context of the enclosing lexical scope
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course }); // short hand for { course: course }
  };

  handleSubmit = event => {
    event.preventDefault(); // prevents the default form submission behavior
    //this.props.dispatch(courseActions.createCourse(this.state.course)); // dispatch the action to create a course
    //this.props.createCourse(this.state.course); // this is the same as the above line, but using the createCourse prop instead of dispatch
    this.props.actions.createCourse(this.state.course); // dispatch the action to create a course using the actions prop
    //alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div> // render the list of courses
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  // propTypes is used to validate the props passed to the component
  courses: PropTypes.array.isRequired, // courses is an array and is required
  //dispatch: PropTypes.func.isRequired // dispatch is a function and is required
  //createCourse: PropTypes.func.isRequired // createCourse is a function and is required
  actions: PropTypes.object.isRequired // actions is an object and is required
};

function mapStateToProps(state) {
  return {
    courses: state.courses // map the courses from the Redux store to the component's props
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course)) // map the createCourse action to the component's props
    actions: bindActionCreators(courseActions, dispatch) // bind all course actions to the dispatch function
  };
}

// when mapDispatchToProps is ommitted, the component gets a dispatch prop automatically
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
