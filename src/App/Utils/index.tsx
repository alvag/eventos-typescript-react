import { Constants } from '../Constants';
import { IEventParams } from '../Interfaces';

type ApiType = 'categories' | 'events';
export default class Utils {
    public static getAPIUrl = (type: ApiType, params: IEventParams = {}): string => {
        let url = '';
        switch (type) {
            case 'categories':
                url = `${Constants.EVENTBRITE_API}/${type}/?locale=es_ES`;
                break;
            case 'events':
                url = `${Constants.EVENTBRITE_API}/${type}/search/?q=${params.eventName}&categories=${params.categoryId}&sort_by=date`;
                break;
        }
        url += `&token=${process.env.REACT_APP_EVENTBRITE_TOKEN}`;
        return url;
    }
}
