import { prettyJSON } from 'hono/pretty-json'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import StaffApi from './Staff';
import CustomerApi from './Customer';
import LaptopApi from './Laptop';
import ReceiptApi from './Receipt';

const app = new Hono()

const data = {"project":{"name":"Hono","repository":"https://github.com/honojs/hono"}};

app.use('*', prettyJSON())

app.get('/', (c) => c.text('Wellcome to the league of API !'))

app.route('/staff', StaffApi)
app.route('/customer', CustomerApi)
app.route('/laptop', LaptopApi)
app.route('/receipt', ReceiptApi)

const port = 8080
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
