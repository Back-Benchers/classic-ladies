import React, {useState} from 'react'
import _ from 'underscore';

import './table.css'

const Table = props => {
    let [sortCustomerList, setSortCustomerList] = useState(props.bodyData);

    let [initDataShow,setInitDataShow] =  useState( props.limit && sortCustomerList ? sortCustomerList.slice(0, Number(props.limit)) : sortCustomerList);

    const [dataShow, setDataShow] = useState(initDataShow)

    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        let page = Math.floor(sortCustomerList.length / Number(props.limit))
        pages = sortCustomerList.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)

    const selectPage = page => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)

        setDataShow(sortCustomerList.slice(start, end))

        setCurrPage(page)
    }
    const sortCustomerListByName = () => {
        console.log('sortCustomerListByName');
        sortCustomerList = _.sortBy(sortCustomerList, 'name');
        setSortCustomerList([...sortCustomerList])
        initDataShow=props.limit && sortCustomerList ? sortCustomerList.slice(0, Number(props.limit)) : sortCustomerList
        setInitDataShow([...initDataShow]);
        setDataShow(initDataShow);
        // console.log(sortedCustomerList);


    }

    return (
        <div>
            <div className="table-wrapper">
                {props.page ==='Customers'?<h2 className="page-header">
                    <button onClick={sortCustomerListByName}>Sort by name</button>
                </h2>:null}
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        sortCustomerList && props.renderBody ? (
                            <tbody>
                                {
                                    dataShow.map((item, index) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item, index) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Table
