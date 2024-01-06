import { Hono } from 'hono'

import { StaffInfo } from './types';
const app = new Hono()

const data: APIResponsePagination<StaffInfo[]> = {
    data: [
        {
            id: 1,
            code: 'DS',
            name: 'David Simpson',
            phone: '0909123222',
            username: 'david simpson',
            role: 'Consulting'
        },
        {
            id: 2,
            code: 'TD',
            name: 'Tronald Dump',
            phone: '0909123122',
            username: 'tronald dump',
            role: 'Cusomer service'
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