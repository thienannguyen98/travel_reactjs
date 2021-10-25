import React from 'react';
import { useState, useCallback } from 'react';
import "./Booking.css";
import * as data from '../../const';
import Item from './Item/Item';
import ExploreFooter from "../ExploreFooter/ExploreFooter"

function Booking(props) {

    const items = data.TOUR_DATA;

    var [search, setSearch] = useState('');
    var [sort, setSort] = useState(0);


    let type = ['Giá tăng', 'Giá giảm', 'Đánh giá']

    var [sortType, setSortType] = useState(type[0]);

    function handleSort(data) {
        setSort(data);
        setSortType(type[data - 1])
    }

    function onSort(data) {
        if (sort === 1) {
            data.sort((a, b) =>
                a.price - b.price
            )

        }
        if (sort === 2) {
            data.sort((a, b) =>
                b.price - a.price
            )

        }
        if (sort === 3) {
            data.sort((a, b) =>
                b.rank - a.rank
            )

        }
    }

    const buy = useCallback(
        (e) => {
            props.buy(e);
        }, [props]);

    return (
        <>
            {onSort(items)}
            <div id="b-container">
                <div id="b-bg"></div>

                <div id="b-main">
                    <div className="tools-bar">
                        <input
                            type="text"
                            placeholder="Nhập từ khóa tìm kiếm"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <div className="sort">
                            <label htmlFor="sort">Sắp xếp theo: </label>
                            <ul className="sort-list">
                                <li>{sortType}</li>
                                <li onClick={() => handleSort(1)}>Giá tăng</li>
                                <li onClick={() => handleSort(2)}>Giá giảm</li>
                                <li onClick={() => handleSort(3)}>Đánh giá</li>
                            </ul>
                        </div>
                    </div>
                    <div className="location">



                        {items.filter((item) => {
                            if (search === "") {
                                return item;
                            }
                            else if (item.name.toLowerCase().includes(search.toLowerCase()) || item.heading.toLowerCase().includes(search.toLowerCase())) {
                                return item;
                            }
                        }).map((item, index) =>
                            <Item
                                index={index}
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                heading={item.heading}
                                price={item.price}
                                rank={item.rank}
                                buy={buy}
                            />
                        )}


                    </div>
                </div>
                <ExploreFooter />
            </div>

        </>
    )
}

export default Booking
