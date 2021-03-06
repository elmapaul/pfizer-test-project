import NavBar from './components/NavBar';
import CourseDetails from "./components/course/CourseDetails";
import NewCourseForm from "./components/course/CourseForm";
import GridList from "./components/course/GridList";
import Main from "./components/dashboard/Main";
import React from "react";
import {Route, Switch} from "react-router-dom";
import * as ROUTES from "./shared/routes";

function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route
                    exact
                    path={ROUTES.DASHBOARD}
                    component={Main}
                />
                <Route
                    exact
                    path={ROUTES.COURSE_NEW}
                    component={NewCourseForm}
                />
                <Route
                    exact
                    path={ROUTES.COURSE_EDIT}
                    component={(course) => NewCourseForm(course)}
                />
                <Route
                    exact
                    path={ROUTES.COURSES_ALL}
                    component={GridList}
                />
                <Route
                    path={ROUTES.COURSE_BASE_PATH + '/:id'}
                    component={CourseDetails}
                />
            </Switch>
        </div>
    );
}

export default App;
