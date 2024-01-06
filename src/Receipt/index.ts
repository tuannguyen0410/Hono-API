import { Hono } from 'hono'

import { ReceiptInfo } from './types';
const app = new Hono()

const data: APIResponsePagination<ReceiptInfo[]> = {
    data: [
        {
            id: 1,
            code: 'TS-1',
            customerName: 'Elysia',
            staffName: 'Welt Yang',
            purchaseDate: '01/01/2024',
            laptopList: [
                {
                    id: 1,
                    name: 'Laptop gaming',
                },
                {
                    id: 2,
                    name: 'Laptop gaming 1',
                }
            ],
            totalPrice: 10000,
            paymentStrategy: 'card',
        },
        {
            id: 2,
            code: 'TS-2',
            customerName: 'Seele',
            staffName: 'Bronya',
            purchaseDate: '01/08/2024',
            laptopList: [
                {
                    id: 1,
                    name: 'Laptop gaming',
                },
                {
                    id: 2,
                    name: 'Laptop gaming 1',
                }
            ],
            totalPrice: 1000000,
            paymentStrategy: 'cash',
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