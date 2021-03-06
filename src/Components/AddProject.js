import React, { Component } from 'react';
import uuid from 'uuid';

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
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
        }}, () => {
            this.props.addProject(this.state.newProject);
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

                    <br />

                    <div>
                        <label htmlFor="category">Category</label>
                        <select ref="category" id="category">
                            {categoryOptions}
                        </select>
                    </div>

                    <br />

                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    };
}

AddProject.propTypes = {
    categories: React.PropTypes.array,
    handleSubmit: React.PropTypes.func
}

export default AddProject;
