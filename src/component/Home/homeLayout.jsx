import React, { Component } from 'react';

class HomeLayout extends Component{
    render(){
        return(
            <div className="item">
                <img src={this.props.shoppingList.image} alt={this.props.shoppingList.name}/>
                <div><h3>{this.props.shoppingList.name}</h3></div>
                <div><button className="buy-btn" onClick={() => {this.props.onShop(this.props.shoppingList)}}>{this.props.shoppingList.btnmsg}</button></div>
            </div>
        )
    }
}

export default HomeLayout;