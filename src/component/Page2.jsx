import React from 'react'


const Page2 = () => {
  return (
    <div className='page0' id="content">
      <h1>Agent Based Model</h1>
      <div className='page0Boxes'>
        <div className='page0BoxBorder'>
          <div className='page0Box'>
            <h1>Janken Strategy</h1>
            <p><span className='span-3'>使用言語:R言語,typescript</span><br/>Agent based modelをじゃんけんで作成</p>
            <a className='button1' href="https://janken.yukiosada.work/" target="_blank">About evaluation function</a>
          </div>
        </div>
        <div className='page0BoxBorder'>
          <div className='page0Box'>
            <h1>Web Application</h1>
            <p><span className='span-3'>使用言語:python</span><br/>遺伝的アルゴリズムのサンプルを作成</p>
            <a className='button1'>About G.A. Sample</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
