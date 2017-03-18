import "../../stylesheets/TodoListItemOptionsStyle.scss"

import React from "react"
import { connect } from "react-redux"

import CurrentTaskOptions from "./CurrentTaskOptions"
import CurrentTasksList from "./CurrentTasksList"
import CreateTask from "./CreateTask"

@connect((store) => {

    return {

    }
})
export default class TodoListItemOptions extends React.Component {


    render(){

        // var layer = this.getLayer.bind(this);
        // console.log(layer);
        return (<div className="todolistitemoptions-component-container">

                <CurrentTaskOptions />
                <CurrentTasksList />
                <CreateTask />


        </div>);
    }
}
