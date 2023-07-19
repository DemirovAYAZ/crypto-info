import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import Coin from '../routes/Coin'
import {Link} from 'react-router-dom'

const Coins = (props) => {

    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <div className='item'><p>#</p></div>
                    <div className='item'><p>Coin</p></div>
                    <div className='item'><p>Price</p></div>
                    <div className='item'><p>24h</p></div>
                    <div className='item hide-mobile-2'><p className='hide-mobile'>Volume</p></div>
                    <div className='item hide-mobile-2'><p className='hide-mobile item'>Mkt Cap</p></div>
                </div>

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} >
                            <CoinItem coins={coins} />
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}

export default Coins
