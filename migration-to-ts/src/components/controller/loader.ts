// import { Response } from '../../types/index';
import { ResponseSources } from '../../types/index';
import { ResponseArticles } from '../../types/index';

class Loader {
    baseLink: string;
    options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options }: { endpoint: string; options: object },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', (endpoint = 'sources'), callback, options); // here is mistake. webpack don't compile, fall with warning
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }

    makeUrl(options: object, endpoint: 'everything' | 'sources'): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });
        return url.slice(0, -1);
    }

    load(
        method: 'GET' | 'POST',
        endpoint: 'everything' | 'sources',
        callback: (data: ResponseArticles | ResponseSources) => void,
        options = {}
    ) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;