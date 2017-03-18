import '../../stylesheets/ClientStyle.scss'


import React from "react"
import { connect } from "react-redux"

import CreateItem from "./CreateItem"
import FilterOptions from "./FilterOptions"
import TodoList from "./TodoList"

@connect((store) => {

    return {

    }
})
export default class Client extends React.Component {


    render(){

        return (<div className="client-component-container">

                <CreateItem />
                <FilterOptions />
                <TodoList />

        </div>);
    }
}
