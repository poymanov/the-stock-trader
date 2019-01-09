import Home from '../src/components/Home.vue';
import Portfolio from '../src/components/portfolio/Portfolio.vue';
import Stocks from '../src/components/stocks/Stocks.vue';

export const routes = [
  { path: '/',  component: Home},
  { path: '/portfolio',  component: Portfolio},
  { path: '/stocks',  component: Stocks},
];