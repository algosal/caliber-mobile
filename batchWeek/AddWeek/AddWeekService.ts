import axios from 'axios';

import Week from './Week';

export default class AddWeekService {
    private URI: string;
    constructor() {
        this.URI = '/weeks';
    }

    addWeek(week: Week): Promise<null> {
        return axios.post(this.URI, week).then(() => null);
    }
}
