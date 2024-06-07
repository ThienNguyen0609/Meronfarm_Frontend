import './Pagination.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const  Pagination = ({index=1, lastIndex, linkAddress}) => {
    return (
        <>
        <div className="pagination-wrapper">
            <div className="pagination-inner">
                <div className="item">
                    <Link className='link arrow icon' to={`${linkAddress}${index-1}`}><FontAwesomeIcon icon={faAngleLeft} /></Link>
                    {index === 1 && <div className="overlay"></div>}
                </div>
                {index-2 > 1 && <Link className='link item' to={`${linkAddress}1`}>1</Link>}
                {index >= 5 && <div className='item icon'><FontAwesomeIcon icon={faEllipsisH} /></div>}
                {index-2 >= 1 && <Link className='link item' to={`${linkAddress}${index-2}`}>{index-2}</Link>}
                {index-1 >= 1 && <Link className='link item' to={`${linkAddress}${index-1}`}>{index-1}</Link>}
                <Link className='item active' to="#">{index}</Link>
                {index+1 <= lastIndex && <Link className='link item' to={`${linkAddress}${index+1}`}>{index+1}</Link>}
                {index+2 <= lastIndex && <Link className='link item' to={`${linkAddress}${index+2}`}>{index+2}</Link>}
                {index <= lastIndex-4 && <div className='item icon'><FontAwesomeIcon icon={faEllipsisH} /></div>}
                {index+2 < lastIndex && <Link className='link item' to={`${linkAddress}${lastIndex}`}>{lastIndex}</Link>}
                <div className="item">
                    <Link className='link arrow icon' to={`${linkAddress}${index+1}`}><FontAwesomeIcon icon={faAngleRight} /></Link>
                    {index === lastIndex && <div className="overlay"></div>}
                </div>
            </div>
        </div>
        </>
    )
}

export default Pagination