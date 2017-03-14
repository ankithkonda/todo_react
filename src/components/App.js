import React from "react"
import { connect } from "react-redux"

import LoaderButtons from "./LoaderButtons"
import Tweets from "./Tweets"

import { fetchUser } from "../store/actions/userActions"

@connect((store) => {
    return {
        user:store.user.user
    }
})
export default class App extends React.Component {
    componentWillMount(){
        this.props.dispatch(fetchUser())
    }

    render(){

        const { user } = this.props;

        console.log(user);

        return (
            <div className="container">
                <h1>{this.props.user.name}'s  App</h1>
                <LoaderButtons />
                <Tweets />
            </div>
        )
    }
}
