import React from 'react'
import { useEffect } from 'react'


const Page0 = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);

  return (
    <div className='page0' id="content">
      <h1>The pokémon-GA <span className='span-500'><br/></span>project</h1>
      <div className='page0Boxes'>
        <div className='page0BoxBorder'>
          <div className='page0Box'>
            <h1>Evaluation Function</h1>
            <p>対戦した際のポケモンの評価を計算する関数の作成</p>
            <button className='button1'>About evaluation function</button>
          </div>
        </div>
        <div className='page0BoxBorder'>
          <div className='page0Box'>
            <h1>Web Application</h1>
            <p>オールラウンダーなポケモンのパーティを生成し、ユーザに表示することができるウェブアプリの作成</p>
          </div>
        </div>
      </div>
      <div className='page0BoxBorder'>
        <div className='page0Box'>
          <h1>Quest</h1>
          <p>適切なバイアスをかけるために、適切なバイアスを探求する</p>
          <button className='button2'>About Quest</button>
        </div>
      </div>
      <div className='eFunction'>
        <h1>Evaluation Function</h1>
      </div>
      <div className='quest'>
        <h1>Quest</h1>
      </div>
    </div>
  )
}

export default Page0
