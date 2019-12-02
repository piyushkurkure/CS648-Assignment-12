import React, { Component } from 'react'
import Filter from './Filters'
import ProductTable from './ProductTable.js'
import ProductForm from './ProductForm.js'
let PRODUCTS = {
    '1': { id: 1, category: 'Music', price: '$459.99', name: 'Clarinet' },
    '2': { id: 2, category: 'Music', price: '$5,000', name: 'Cello' },
    '3': { id: 3, category: 'Music', price: '$4,500', name: 'Tuba' },
    '4': { id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge' },
    '5': { id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table' },
    '6': { id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag' },
    '7': { id: 7, category: 'DVD', price: '$120', name: 'Mission Impossible' }
};

class Products extends Component {

    state = { products: PRODUCTS,
              filterText : "" }
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleFilter(filterInput) {
        this.setState(filterInput);
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
             let products = prevState.products
             delete products[productId]
             return { products }
        })
   }

   handleSave(product) {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    this.setState((prevState) => {
         let products = prevState.products
         products[product.id] = product
         return { products }
    });
}

    render() {
        return (
            <div>
                <Filter onFilter={this.handleFilter} />
                <ProductTable filterText={this.state.filterText} products={this.state.products} onDestroy = {this.handleDestroy}> </ProductTable>
                <ProductForm onSave={this.handleSave}/>
            </div>
        )
    }
}

export default Products
