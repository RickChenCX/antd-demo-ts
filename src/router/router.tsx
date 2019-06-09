import React from 'react';
import { BrowserRouter as Router, Route ,} from "react-router-dom";
import asyncComponent from "../components/AsyncComponent"

// const AsyncHome = asyncComponent(() => import("../models/App"));
const AsyncHome = asyncComponent(() => import("../container/app"))
const AsyncDetail = asyncComponent(() => import("../models/detail"));


interface PageProp  {
    // store: Store
}
interface State {

}

export default class RouterComponent extends React.Component<PageProp,State> {
    constructor(props: PageProp) {
        super(props)
        this.state={}
    }
    render() {
        return (
            <React.Fragment>
                <Router >
                    <Route path='/' exact component={AsyncHome}></Route>
                    {/* //exact 表示完全匹配 */}
                    <Route path='/news' exact component={AsyncDetail}></Route>
                </Router>
            </React.Fragment>
        );
    }
}
