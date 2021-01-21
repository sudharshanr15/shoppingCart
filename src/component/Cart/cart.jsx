import React, { Component } from 'react';
import CartLayout from './cartLayout';

class Cart extends Component{
    render(){
        return(
            <div className="contents">
                <div className="items">
                    {this.props.cartList.length=== 0 ? <p id="emptyCart">Cart is empty!</p> : this.props.cartList.map(list=>(
                        <CartLayout
                        cartList={list}
                        key={list.id}
                        onDecrement={this.props.onDecrement}
                        onIncrement={this.props.onIncrement}
                        onDelete={this.props.onDelete}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Cart;