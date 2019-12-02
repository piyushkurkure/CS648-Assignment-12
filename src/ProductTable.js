import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ProductRow } from './ProductRow'
const divStyle = {
    marginTop : 12
};
class ProductTable extends Component {

    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
   }
   
    handleDestroy(id) {
        this.props.onDestroy(id)
   }

    render() {
        const { filterText } = this.props
        var filteredRows = [];
        const products = Object.keys(this.props.products)
        products.forEach((product) => {
            let name = this.props.products[product].name.toUpperCase();
            let item = this.props.products[product];
            let filter = filterText.toUpperCase();
            if (filter === "" || filter.length === 0)
                filteredRows.push(<ProductRow key={item.id} prod={item} onDestroy ={this.handleDestroy}/>)
            else {
                if (name.indexOf(filter) !== -1)
                    filteredRows.push(<ProductRow key={item.id} prod={item} onDestroy ={this.handleDestroy} />)
            }
        })
        return (
            
            <div class="col-sm-6" style={divStyle}>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th cope="col"><strong>Name</strong></th>
                        <th cope="col"><strong>Price</strong></th>
                        <th cope="col"><strong>Category</strong></th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredRows}
                </tbody>
            </table>
            </div>
        )
    }
}

ProductTable.propTypes = {
    products: PropTypes.object
}

export default ProductTable