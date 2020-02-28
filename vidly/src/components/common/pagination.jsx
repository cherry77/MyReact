import React from 'react'
import _ from 'lodash';
import PropTypes from 'prop-types'

const Pagination = (props) => {
    const {itemCounts, pageSize, currentPage, onPageChange} = props;
    //计算页数
    const pagesCount = Math.ceil(itemCounts / pageSize);
    if (pagesCount === 1) return null;
    //页数循环成数组格式,好循环渲染视图
    const pages = _.range(1, pagesCount + 1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li className={currentPage === page? "page-item active": "page-item" } key={page}>
                        <span className="page-link" onClick={()=>onPageChange(page)}>{page}</span>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

Pagination.propTypes = {
    itemCounts: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
