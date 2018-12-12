import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import { ICategory } from './Interfaces';
import Utils from './Utils';

interface IAppState {
    categories: ICategory[];
}

class App extends Component<{}, IAppState> {

    public state: IAppState = {
        categories: []
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
                    />
                </div>
            </div>
        );
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
