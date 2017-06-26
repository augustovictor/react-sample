import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    };

    componentWillMount() {
        this.setState({projects: [
            { id: uuid.v4(), title: 'Proj1', category: 'Web dev' },
            { id: uuid.v4(), title: 'Proj2', category: 'Mobile dev' },
            { id: uuid.v4(), title: 'Proj3', category: 'Front-end dev' },
            { id: uuid.v4(), title: 'Proj4', category: 'E-commerce' },
            { id: uuid.v4(), title: 'Proj5', category: 'Full stack' }
        ]});
    };

    handleAddProject(project) {
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects: projects})
    };

    handleDeleteProject(id) {
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index, 1);
        this.setState({projects: projects});

    };

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
            </div>
        );
    };
}

export default App;
