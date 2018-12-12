import { Constants } from '../Constants';

export default class Utils {
    public static getAPIUrl = (type: string): string => {
        return `${Constants.EVENTBRITE_API}/${type}/?locale=es_ES&token=${process.env.REACT_APP_EVENTBRITE_TOKEN}`;
    }
}
