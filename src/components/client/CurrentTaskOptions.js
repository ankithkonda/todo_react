import "../../stylesheets/CurrentTaskOptionsStyle.scss"

import React from "react"
import { connect } from "react-redux"


@connect((store) => {

    return {

    }
})
export default class CurrentTaskOptions extends React.Component {


    render(){

        // var layer = this.getLayer.bind(this);
        // console.log(layer);
        return (<div className="currenttaskoptions-component-container">

                CurrentTask Options

        </div>);
    }
}
