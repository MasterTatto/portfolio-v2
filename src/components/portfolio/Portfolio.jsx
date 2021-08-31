import React, {useEffect, useState} from 'react';
import './portfolio.scss'
import PortfolioList from "./portfolioList/portfolioList";
import {webPortfolio, mobilePortfolio, designPortfolio} from '../../data'

const Portfolio = () => {
        const [data, setData] = useState([])
        const [selected, setSelected] = useState('web');
        const item = [
            {id: 'web', title: 'Web App'},
            {id: 'mobile', title: 'Mobile App'},
            {id: 'design', title: 'Design'},
        ]
        const liItem = item.map((i) => {
            return <PortfolioList title={i.title} id={i.id} setSelected={setSelected}
                                  active={selected === i.id}/>
        })

        useEffect(() => {
            switch (selected) {
                case 'web' :
                    setData(webPortfolio)
                    break;
                case 'mobile' :
                    setData(mobilePortfolio)
                    break;
                case 'design' :
                    setData(designPortfolio)
                    break;

                default:
                    setData(webPortfolio)

            }
        }, [selected])
        return (
            <div className={'portfolio'} id={'portfolio'}>
                <h1>Portfolio</h1>
                <ul>
                    {liItem}

                </ul>
                <div className="container">
                    {data.map((i) => {
                        return (
                            <div className="item">
                                <img src={i.img} alt=""/>
                                <h3>{i.title}</h3>
                            </div>
                        )
                    })}


                </div>
            </div>
        );
    }
;

export default Portfolio;
