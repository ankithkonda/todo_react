import '../../stylesheets/CreateItemStyle.scss'

import React from "react"
import { connect } from "react-redux"


@connect((store) => {

    return {

    }
})
export default class CreateItem extends React.Component {


    render(){

        // var layer = this.getLayer.bind(this);
        // console.log(layer);
        return (<div className="createitem-component-container">

                Add Item Container

        </div>);
    }
}
