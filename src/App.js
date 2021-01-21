import React, {Component} from 'react';
import Navbar from "./component/navbar";
import {Route, Switch} from 'react-router-dom';
import Home from "./component/Home/home";
import Cart from "./component/Cart/cart";
class App extends Component{
    constructor(){
        super();
        this.buttonMessage();
    }
    state = {
        shoppingList:[
            {id: 1, name: 'HP pavilion', image: "https://www.91-img.com/pictures/laptops/hp/hp-15-e016tx-core-i5-3rd-gen-4-gb-1-tb-windows-8-2-gb-40539-medium-1.jpg?tr=q-60", count: 1,btnmsg: 'Cart'},
            {id: 2, name: 'Acer predator', image: "https://images-na.ssl-images-amazon.com/images/I/81g7AiqWrtL._AC_SL1500_.jpg", count: 1,btnmsg: 'Cart'},
            {id: 3, name: 'Lenovo thinkpad', image: "https://www.lenovo.com/medias/lenovo-laptop-thinkpad-t495-hero.png?context=bWFzdGVyfHJvb3R8NzIyODd8aW1hZ2UvcG5nfGgzYS9oY2EvOTk4NjgzNzgzOTkwMi5wbmd8MDdkMTc4OGYwOTk1OGZjYjMxOTEzZThhMDEwNjNlZDk5NmRmMjM0MWU4ZWUwMWM5OWNlZGEyYWJlYTMwMDVmNA", count: 1,btnmsg: "Cart"},
            {id: 4, name: 'Dell xps 15', image: "https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_15_7590/general/111-xps-product-imagery-notebook-xps-15-7590-campaign.jpg?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=855&qlt=95,0&resMode=sharp2&op_usm=1.75,0.3,2,0&size=855,402", count: 1,btnmsg: 'Cart'},
            {id: 5, name: 'Apple m1 pro', image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-silver-select-202011?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1603406899000", count: 1,btnmsg: 'Cart'},
            {id: 6, name: 'HP envy x360', image: "https://images-na.ssl-images-amazon.com/images/I/61KTUddnpSL._SL1500_.jpg", count: 1,btnmsg: 'Cart'},
            {id: 7, name: 'Alienware a51', image: "https://images.idgesg.net/images/article/2019/01/ces19_pho_006_alienwarea51-100784135-orig.jpg", count: 1,btnmsg: 'Cart'},
            {id: 8, name: 'MSI gs65', image: "https://images.anandtech.com/doci/12612/gs65-1.jpg", count: 0,btnmsg: 'Cart'}
        ],
        cartList:[]
    }
    render(){
        return(
            <div className="App-container">
                <div className="navbar">
                    <Navbar/>
                </div>
                <div className="main-container">
                    <Switch>
                        <Route path="/" exact
                        render={() => (
                        <Home shoppingList={this.state.shoppingList}
                        onShop={this.handleShop}
                        />
                        )}/>
                        <Route path="/cart"
                        render={()=>(
                            <Cart cartList={this.state.cartList}
                            onDecrement={this.handleDecrement}
                            onIncrement={this.handleIncrement}
                            onDelete={this.handleDelete}/>
                        )}
                        />
                    </Switch>
                </div>
            </div>
        )
    }

    handleShop = (counter) => {
        const cartList = [...this.state.cartList];
        const cart = {...counter};
        if(cart.btnmsg === "Added to Cart"){
            return ;
        }
        cart.btnmsg = "Added to Cart";
        cartList.push(cart);
        this.setState({cartList});
        this.buttonMessage(counter);
    }

    buttonMessage(counter = false){
        if(counter){
            const counters = {...counter};
            const shoppingList = [...this.state.shoppingList];
            const index = shoppingList.indexOf(counter);
            counters.btnmsg = "Added to Cart";
            shoppingList.splice(index, 1, counters);
            this.setState({shoppingList});
            // console.log(this.state.cartList);
        }
    }

    handleIncrement = (counter) => {
        const cartList = [...this.state.cartList];
        const index = cartList.indexOf(counter);
        cartList[index].count++;
        this.setState({cartList});
    }

    handleDecrement = (counter) => {
        const cartList = [...this.state.cartList];
        const index = cartList.indexOf(counter);
        if(cartList[index].count === 1){
            return ;
        }else{
            cartList[index].count--;
            this.setState({cartList});
        }
    }

    handleDelete = (counter) => {
        let cartList = [...this.state.cartList];
        const index = cartList.indexOf(counter);
        cartList[index].btnmsg = 'Cart';
        const counterId = counter.id;
        cartList = this.state.cartList.filter(c => c.id !== counterId);
        this.setState({cartList});
    }

    // componentDidUpdate(){
    //     console.log(this.state.shoppingList[0], this.state.cartList[0]);
    // }
}

export default App;