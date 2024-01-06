import { Hono } from 'hono'

import { CustomerInfo } from './types';
const app = new Hono()

const data: APIResponsePagination<CustomerInfo[]> = {
    data: [
        {
            id: 1,
            code: 'jingliu',
            name: 'Jingliu',
            phone: '0901123222',
        },
        {
            id: 2,
            code: 'Topaz',
            name: 'Topaz',
            phone: '0909123112',
        },
    ],
    meta: {
        total: 2,
        totalPages: 1,
        limit: 15,
        page: 1
    }
};


app.get('/', (c) => c.json(data))
app.get('/:id', (c) => c.json(data.data.find((el) => el.id === Number(c.req.param('id')))))

export default app