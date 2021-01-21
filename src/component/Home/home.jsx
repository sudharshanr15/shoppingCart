import React, {Component} from 'react';
import HomeLayout from "./homeLayout";

class Home extends Component{
    
    render(){
        // console.log(this.props.shoppingList);
        return(
            <div className="contents">
                <div className="items">
                    {this.props.shoppingList.map(list=>(
                        <HomeLayout
                        shoppingList={list}
                        onShop={this.props.onShop}
                        key={list.id}
                        />
                    ))}
                </div>
            </div>

        )
    }
}

export default Home;