import "../../stylesheets/TodoListItemStyle.scss"

import React from "react"
import { connect } from "react-redux"


@connect((store) => {

    return {

    }
})
export default class TodoListItem extends React.Component {


    render(){

        // var layer = this.getLayer.bind(this);
        // console.log(layer);
        return (<div className="todolistitem-component-container">

                TodoListItem componenet

        </div>);
    }
}
