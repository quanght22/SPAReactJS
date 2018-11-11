import Home from 'scenes/home';
import About from 'scenes/about';
import Products from 'scenes/products';
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
       path: '/products',
       component: Products
    },
    {
       path: '/contact',
       component: Contact
    }
];

export default routes;