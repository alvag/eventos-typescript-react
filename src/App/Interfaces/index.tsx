export interface ICategory {
    resource_uri: string;
    id: string;
    name: string;
    name_localized: string;
    short_name: string;
    short_name_localized: string;
}

export interface IEventParams {
    categoryId?: string;
    eventName?: string;
}

export interface IEvent {
    name: {
        text: string
    };
    description: {
        text: string
    };
    logo: {
        url: string
    };
}
