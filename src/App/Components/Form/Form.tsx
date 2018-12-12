import React, { Component } from 'react';
import { ICategory } from '../../Interfaces';
import './Form.css';

interface IProps {
    categories: ICategory[];
    getCategories: () => void;
}

class Form extends Component<IProps> {
    public render() {
        return (
            <form>
                <fieldset className="uk-fieldset uk-margin">
                    <legend className="uk-legend uk-text-center">
                        Busca tu evento por nombre o categoría
                    </legend>

                    <div className="uk-column-1-3@m uk-margin">
                        <div className="uk-margin" uk-margin="true">
                            <input type="text" className="uk-input" placeholder="Nombre de evento o ciudad" />
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select className="uk-select">
                                {this.props.categories.map((category, index) => (
                                    <option value={category.id}>{category.name_localized}</option>
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
}

export default Form;
