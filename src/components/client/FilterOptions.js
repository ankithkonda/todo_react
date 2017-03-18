import '../../stylesheets/FilterOptionsStyle.scss'

import React from "react"
import { connect } from "react-redux"


@connect((store) => {

    return {

    }
})
export default class FilterOptions extends React.Component {


    render(){

        // var layer = this.getLayer.bind(this);
        // console.log(layer);
        return (<div className="filteroptions-component-container">

                Filter Options

        </div>);
    }
}
