import React, { Component, FormEvent } from 'react';
import { ICategory, IEventParams } from '../../Interfaces';
import './Form.css';

interface IProps {
    categories: ICategory[];
    getCategories: () => void;
    getEvents: (params: IEventParams) => void;
}

class Form extends Component<IProps> {

    private eventName = React.createRef<HTMLInputElement>();
    private category = React.createRef<HTMLSelectElement>();

    public render() {
        return (
            <form onSubmit={this.searchEvent}>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o categoría
                    </legend>

                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input ref={this.eventName} type="text" className="uk-input" placeholder="Nombre de evento o ciudad" />
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select ref={this.category} className="uk-select">
                                {this.props.categories.map((category, index) => (
                                    <option key={index} value={category.id}>{category.name_localized}</option>
                                ))}
                            </select>
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <button className="uk-button uk-button-danger">Buscar</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }

    private searchEvent = (e: FormEvent) => {
        e.preventDefault();

        const eventName = this.eventName.current!.value;
        const categoryId = this.category.current!.value;

        this.props.getEvents({ eventName, categoryId });

    }
}

export default Form;
