import React from 'react';
import 'assets/scss/App.scss';
import { Item, statusList } from './Item';
import imgCat from '../assets/img/item.png';

const list = [
    {
        info: {
            img: imgCat,
            title: "Нямушка",
            subTitle: "с фуа-гра",
            desc: "Сказочное заморское яство",
            descActiveHover: "Котэ не одобряет?",

            footerBuyText: "Чего сидишь? Порадуй котэ, ",
            footerTextActive: "Печень утки разварная с артишоками.",
            footerTextDisable: "Печалька, с фуа-гра закончился.",

            features: [
                '10 порций',
                'мышь в подарок'
            ],
            messure: '0,5',
        },
        status: statusList.default
    },
    {
        info: {
            img: imgCat,
            title: "Нямушка",
            subTitle: "с рыбой",
            desc: "Сказочное заморское яство",
            descActiveHover: "Котэ не одобряет?",

            footerBuyText: "Чего сидишь? Порадуй котэ, ",
            footerTextActive: "Головы щучьи с чесноком да свежайшая сёмгушка.",
            footerTextDisable: "Печалька, с рыбой закончился.",

            features: [
                '10 порций',
                '2 мыши в подарок'
            ],
            messure: '2',
        },
        status: statusList.active
    },
    {
        info: {
            img: imgCat,
            title: "Нямушка",
            subTitle: "с курой",
            desc: "Сказочное заморское яство",
            descActiveHover: "Котэ не одобряет?",

            footerBuyText: "Чего сидишь? Порадуй котэ, ",
            footerTextActive: "Филе из цыплят с трюфелями в бульоне.",
            footerTextDisable: "Печалька, с курой закончился.",

            features: [
                '100 порций',
                '5 мышей в подарок',
                'заказчик доволен'
            ],
            messure: '5',
        },
        status: statusList.disable
    }
];

class App extends React.PureComponent {
    render() {
        return (
            <div className="b-layout">
                <div className="b-container">
                    <div className="b-title">Ты сегодня покормил кота?</div>
                    <div className="b-item-list">
                        {
                            list.map((item) => {
                                return <div className="b-item-list__item">
                                    <Item
                                        info={item.info}
                                        initStatus={item.status}
                                    ></Item>
                                </div>
                            })
                        }
                    </div>
                </div>
                <link href="https://fonts.googleapis.com/css?family=Exo+2:100,300,400" rel="stylesheet"/>
            </div>
        );
    }
}

export default App;