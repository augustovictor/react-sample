import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Victor'
        }
    }

    componentWillMount() {
        console.log('componentWillMount() executed');
    };

    componentDidMount() {
        console.log('componentDidMount() executed');
    };

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps() executed: ', nextProps);
    };
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate() executed: ', nextProps, nextState);
        return true;
    };

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate() executed');
    };

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate() executed: ', prevProps, prevState);
    };

    componentWillUnmount() {
        console.log('componentWillUnmount() executed');
    }
    
    deleteProject(id) {
        this.props.onDelete(id);
    };

    onGreetName() {
        this.props.greet(this.state.name);
    };
    
    render() {
        let projectItems;
        if(this.props.projects) {
            projectItems = this.props.projects.map(project => {
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
                );
            });          
        }

        return (
            <div className="Projects">
                <button onClick={this.onGreetName.bind(this)}>Say Hello</button>
                <h3>Latest projects</h3>
                { projectItems }
            </div>
        );
    };
}

// Validates the types defined
Projects.propTypes = {
    projects: React.PropTypes.array,
    onDelete: React.PropTypes.func,
    greet: React.PropTypes.func
}

export default Projects;
