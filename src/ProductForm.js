import React, { Component } from 'react'
const RESET_VALUES = { id: '', category: '', price: '', name: '' }
export class ProductForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
        }
        this.handleSave = this.handleSave.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSave(e) {
        this.props.onSave(this.state.product)
        this.setState({
            product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); //Prevent form from triggering HTTP POST
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState((prevState) => {
            prevState.product[name] = value
            return { product: prevState.product }
        })
    }
    render() {

        return (
            <div class="col-sm-3">
            <form onSubmit={this.handleSave}>
            <div class="form-group">
                <h3>Add a New Product</h3>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
	                <input type="text" class="form-control" aria-describedby="name" placeholder="Enter Name" name="name" id="name" onChange={this.handleChange} value={this.state.product.name} required />
                </div>
                <div class="form-group">
                    <label for="category">Category</label>
	                <input type="text" class="form-control" aria-describedby="category" name="category" id="category" onChange={this.handleChange} value={this.state.product.category}  required/>
                </div>
                <div class="form-group">
                    <label for="price">Price</label>
	                <input type="text" class="form-control" aria-describedby="price" name="price" id="price" onChange={this.handleChange} value={this.state.product.price} required/>
                </div>
                <div class="form-group">
                <input type="submit" class="btn btn-info" value="save" />
                </div>
            </form>
            </div>
        )
    }
}
export default ProductForm