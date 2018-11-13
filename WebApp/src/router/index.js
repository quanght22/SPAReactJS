import Home from 'scenes/home';
import About from 'scenes/about';
import Customers from 'scenes/customers';
import Contact from 'scenes/contact';
const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
       path: '/about',
       component: About
    },
    {
        path: '/customers',
        component: Customers
    },
    {
       path: '/contact',
       component: Contact
    }
];

export default routes;