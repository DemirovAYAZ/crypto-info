import React from 'react'
import './Coins.css'


const CoinItem = (props) => {
  return (
    <div className='coin-row'>
      <div className='item'><p>{props.coins.market_cap_rank}</p></div>
      <div className='img-symbol item'>
        <img src={props.coins.image} alt='' />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <div className='item'><p>${props.coins.current_price.toLocaleString()}</p></div>
      <div className='item'><p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p></div>
      <div className='item hide-mobile-2'><p className='hide-mobile'>${props.coins.total_volume.toLocaleString()}</p></div>
      <div className='item hide-mobile-2'><p className='hide-mobile'>${props.coins.market_cap.toLocaleString()}</p></div>
    </div>
  )
}

export default CoinItem
