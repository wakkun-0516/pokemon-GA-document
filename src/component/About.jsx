import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <h1>ヘイラッシャの上に立つ<span className='span-500'><br/></span>シャリタツ</h1>
      <div className='boxes'>
        <div className='box-border'>
          <div className='box'>
          <h2>Genetic Algorithms</h2>
          <p>このポケモンバトルシミュレータは、遺伝的アルゴリズムによって、オールラウンダーなポケモンのパーティを出力結果として得ることを目的としている。遺伝的アルゴリズムの特異な性質をぜひ体験していただきたい。</p>
          </div>
        </div>
        <div className='box-border'>
          <div className='box'>
          <h2>Player Experience</h2>
          <p>このポケモンバトルシミュレータは、ポケモンに精通している2人のポケモンのゲームプレイヤーによって、バイアスがかけられている。バイアスをかけることにより、演算長を減少させ、よりよい結果が出力されることを目指している。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
