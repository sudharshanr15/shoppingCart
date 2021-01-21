import React, { Component } from 'react';

class HomeLayout extends Component{
    render(){
        let classes = "btn btn-secondary ml-2 btn-sm";
        classes += (this.props.cartList.count === 1) ? " disabled" : '';
        return(
            <div className="item" style={{flex:'40%'}}>
                <img src={this.props.cartList.image} alt={this.props.cartList.name}/>
                <div><h3>{this.props.cartList.name}</h3></div>
                <div><button className="btn btn-secondary ml-2 btn-sm" onClick={() => this.props.onIncrement(this.props.cartList)}>+</button></div>
                <div><button className={classes} onClick={() => this.props.onDecrement(this.props.cartList)}>-</button></div>
                <span className={this.getButtonBadge()}>{this.props.cartList.count}</span>
                <div><button className="btn btn-danger ml-2 btn-sm" onClick={() => this.props.onDelete(this.props.cartList)}>Delete</button></div>
                <div><button className="buy-btn">Buy</button></div>
            </div>
        )
    }

    getButtonBadge(){
        let classes = "badge ml-2 badge-";
        classes += (this.props.cartList.count === 0? "warning" : 'primary');
        return classes;
    }
}

export default HomeLayout;