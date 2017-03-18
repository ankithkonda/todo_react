import "../../stylesheets/CurrentTasksListStyle.scss"

import React from "react"
import { connect } from "react-redux"


@connect((store) => {

    return {

    }
})
export default class CurrentTaskList extends React.Component {


    render(){

        // var layer = this.getLayer.bind(this);
        // console.log(layer);
        return (<div className="currenttaskslist-component-container">

                CurrentTaskList List

        </div>);
    }
}
