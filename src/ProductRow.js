import React, { Component } from 'react'

export class ProductRow extends Component {

    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
    }

    destroy() {
        this.props.onDestroy(this.props.prod.id);
    }
    render() {
        const { prod } = this.props;
        return (
            <tr>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>{prod.category}</td>
                <td><input type="button" class="btn btn-info" value="remove" onClick={this.destroy} /></td>
            </tr>
        )
    }


}
export default ProductRow

