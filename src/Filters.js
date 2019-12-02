import React, { Component } from 'react'

export class Filter extends Component{
    
    constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
		const value = e.target.value
		const name = e.target.name
		this.props.onFilter({
			[name]: value
		});
	}
    render(){
        return (
            <div>
            <form>
            <div class="col-sm-6">
                <h2>My Inventory</h2>
	            <input type="text" placeholder="Search" name="filterText" class="form-control" onChange={this.handleChange} autoComplete="off" />
            </div>
            </form>
            </div>

        )
    }
}

export default Filter