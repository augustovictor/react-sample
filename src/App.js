import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import axios from 'axios';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import { Header } from './Components/Header';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: [],
            todos: [],
            name: 'Default'
        }
    };

    getTodos() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            this.setState({todos: res.data});
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        });
    };

    getProjects() {
        this.setState({projects: [
            { id: uuid.v4(), title: 'Proj1', category: 'Web dev' },
            { id: uuid.v4(), title: 'Proj2', category: 'Mobile dev' },
            { id: uuid.v4(), title: 'Proj3', category: 'Front-end dev' },
            { id: uuid.v4(), title: 'Proj4', category: 'E-commerce' },
            { id: uuid.v4(), title: 'Proj5', category: 'Full stack' }
        ]});
    };

    componentWillMount() {
        this.getProjects();
        this.getTodos();
    };

    componentDidMount() {
        this.getTodos();
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

    onGreet(name) {
        this.setState({ name: name });
    }

    render() {
        return (
            <div className="App">
                <Header homeLink="http://localhost:8080"/>
                <p>
                    Hello, { this.state.name }
                </p>
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} greet={this.onGreet.bind(this)} />
                <Todos todos={this.state.todos} />
            </div>
        );
    };
}

export default App;
