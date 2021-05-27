import React from 'react';

//Page error
// const PageError = React.lazy(() => import('./pages/Pages/Special/PageError'));

//Shop
const Shop = React.lazy(() => import('./pages/Shop/index'));
// const ShopProducts = React.lazy(() => import('./pages/Pages/Shop/ShopProducts'));
// const ShopProductDetail = React.lazy(() => import('./pages/Pages/Shop/ShopProductDetail'));
// const ShopCart = React.lazy(() => import('./pages/Pages/Shop/ShopCart'));
// const ShopCheckouts = React.lazy(() => import('./pages/Pages/Shop/ShopCheckouts'));
// const ShopMyAccount = React.lazy(() => import('./pages/Pages/Shop/ShopMyAccount'));

const routes = [

    //Shop
    // { path: '/shop-products', component: ShopProducts },
    // { path: '/shop/product-detail/:id', component: ShopProductDetail },
    // { path: '/shop-cart', component: ShopCart },
    // { path: '/shop-checkouts', component: ShopCheckouts },
    // { path: '/shop-myaccount', component: ShopMyAccount },
    
    //Index Main
    { path: '/index', component: Shop },

    //Index root
    
    { path: '/', component: Shop, exact : true }, 
    // { component: PageError, isWithoutLayout : true, exact : false },
    
];

export default routes;