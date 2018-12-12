import React, { Component } from 'react';
import { IEvent } from '../../Interfaces';
import Event from './Event';
import './Events.css';

interface IProps {
    events: IEvent[];
}

class Events extends Component<IProps> {
    public render() {
        return (
            <div className="uk-child-width-1-4@m" uk-grid="true">
                {this.props.events.map((event, index) => (
                    <Event key={index} event={event} />
                ))}
            </div>
        );
    }
}

export default Events;
