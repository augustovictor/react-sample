import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    };

    componentWillMount() {
        this.setState({projects: [
            { title: 'Proj1', category: 'Web dev' },
            { title: 'Proj2', category: 'Mobile dev' },
            { title: 'Proj3', category: 'Front-end dev' },
            { title: 'Proj4', category: 'E-commerce' },
            { title: 'Proj5', category: 'Full stack' }
        ]});
    };

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects})
    };

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} />
            </div>
        );
    };
}

export default App;
