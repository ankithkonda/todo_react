import React from "react"
import { connect } from "react-redux"

import Client from "./client/Client"
import Admin from "./admin/Admin"

import { fetchUser, setUserAdmin } from "../store/actions/userActions"

@connect((store) => {
    return {}
})
export default class Layout extends React.Component {

    componentWillMount(){

        console.log("Layout component will mount");

        this.props.dispatch(fetchUser())
    }

    componentDidMount(){

        console.log("Layout component did mount")


    }

    componentWillUnmount(){

        console.log("Layout component will unmount")
    }


    render(){

        // var layer = this.getLayer.bind(this);
        // console.log(layer);
        return (<div className="Layout_component">

                <div className="layer_continer">
                    <Client/>
                </div>
        </div>);
    }
}
