import '../../stylesheets/TodoListStyle.scss'

import React from "react"
import { connect } from "react-redux"

import TodoListItem from "./TodoListItem"
import TodoListItemOptions from "./TodoListItemOptions"

@connect((store) => {

    return {

    }
})
export default class TodoList extends React.Component {


    render(){

        // var layer = this.getLayer.bind(this);
        // console.log(layer);
        return (<div className="todolist-component-container">

                TodoList componenet
                <TodoListItem />
                <TodoListItemOptions />

        </div>);
    }
}
