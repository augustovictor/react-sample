import React, { Component } from 'react';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        };
    };
    
    static defaultProps = {
        categories: ['Web dev', 'Mobile dev', 'Front-end dev', 'E-commerce', 'Full stack']
    };

    handleSubmit(e) {
        e.preventDefault();
        if(!this.refs.title.value.length) {
            return alert('Empty title');
        }
        this.setState({newProject: {
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, () => {
            console.log(this.state.newProject);
        });
    };

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return(
                <option key={category} value={category}>{category}</option>
            );
        });

        return (
            <div className="AddProject">
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" ref="title" />
                    </div>

                    <div>
                        <label htmlFor="category">Category</label>
                        <select ref="category" id="category">
                            {categoryOptions}
                        </select>
                    </div>

                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddProject;
