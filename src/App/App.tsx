import React, { Component } from 'react';
import './App.css';
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
