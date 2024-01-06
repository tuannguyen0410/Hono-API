import { Hono } from 'hono'

import { LaptopInfo } from './types';
const app = new Hono()

const data: APIResponsePagination<LaptopInfo[]> = {
    data: [
        {
            id: 1,
            code: 'intel',
            name: 'Intel core 2 duo',
            brand: 'Intel',
            processor: 'Asus',
            storage: '256Gb',
            price: 100000,
            memory: 16,
        },
        {
            id: 2,
            code: 'intel',
            name: 'Intel core 4',
            brand: 'Intel',
            processor: 'Acer',
            storage: '512Gb',
            price: 20000,
            memory: 32,
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