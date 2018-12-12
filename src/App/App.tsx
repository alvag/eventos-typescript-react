import React, { Component } from 'react';
import './App.css';
import Events from './Components/Events';
import Form from './Components/Form';
import Header from './Components/Header';
import { ICategory, IEvent, IEventParams } from './Interfaces';
import Utils from './Utils';

interface IAppState {
    categories: ICategory[];
    events: IEvent[];
}

class App extends Component<{}, IAppState> {

    public state: IAppState = {
        categories: [],
        events: []
    };

    public componentDidMount() {
        this.getCategories();
    }
    public render() {
        return (
            <div className="App">
                <Header />

                <div className="uk-container">
                    <Form
                        categories={this.state.categories}
                        getCategories={this.getCategories}
                        getEvents={this.getEvents}
                    />

                    <Events events={this.state.events} />
                </div>
            </div>
        );
    }

    private getEvents = async (params: IEventParams) => {
        const url = Utils.getAPIUrl('events', params);
        await fetch(url).then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ events: data.events });
            });
    }

    private getCategories = async () => {
        const url = Utils.getAPIUrl('categories');

        await fetch(url).then((response) => response.json())
            .then((data) => {
                this.setState({ categories: data.categories });
            });
    }
}

export default App;
