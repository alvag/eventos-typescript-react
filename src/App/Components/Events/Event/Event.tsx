import React from 'react';
import { IEvent } from '../../../Interfaces';

interface IProps {
    event: IEvent;
}

const Event = (props: IProps) => {
    const event = props.event;

    return (
        <div className="uk-card uk-card-default">
            {event.logo !== null ?
                <div className="uk-card-media-top">
                    <img src={event.logo.url} alt={event.name.text} />
                </div>
                : ''
            }
            <div className="uk-card-body">
                <h3 className="uk-card-title">{event.name.text}</h3>
                {event.description.text ?
                    <p>{event.description.text.substring(0, 100)}</p>
                    : ''
                }

            </div>
        </div>
    );
};

export default Event;
