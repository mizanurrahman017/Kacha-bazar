import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Highlights from '../../Components/Highlights/Highlights';
import PriceList from '../../Components/PriceList/PriceList';
import Item from '../../Components/Item/Item';
import PriceComparison from '../../Components/PriceComparison/PriceComparison';
import LatestMarket from '../../Components/LatestMarket/LatestMarket';
import Ratings from '../../Components/Ratings/Ratings';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Highlights></Highlights>
            <PriceList></PriceList>
            <Item></Item>
            <PriceComparison></PriceComparison>
            <LatestMarket></LatestMarket>
            <Ratings></Ratings>
        </div>
    );
};

export default Home;