import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Page4 = () => {

  const [latestGen, setLatestGen] = useState(0)
  const [ranking, setRanking] = useState([])
  const [pastGen, setPastGen] = useState(0)
  const [pastRanking, setPastRanking] = useState([])

  const pokedex = { 59: 'ウインディ', 80: 'ヤドラン', 91: 'パルシェン', 94: 'ゲンガー', 113: 'ラッキー', 128: 'ケンタロス', 130: 'ギャラドス', 134: 'シャワーズ', 135: 'サンダース', 149: 'カイリュー', 184: 'マリルリ', 196: 'エーフィ', 197: 'ブラッキー', 199: 'ヤドキング', 205: 'フォレトス', 212: 'ハッサム', 214: 'ヘラクロス', 229: 'ヘルガー', 232: 'ドンファン', 242: 'ハピナス', 248: 'バンギラス', 279: 'ペリッパー', 282: 'サーナイト', 286: 'キノガッサ', 324: 'コータス', 373: 'ボーマンダ', 398: 'ムクホーク', 419: 'フローゼル', 423: 'トリトドン', 426: 'フワライド', 445: 'ガブリアス', 448: 'ルカリオ', 450: 'カバルドン', 460: 'ユキノオー', 461: 'マニューラ', 462: 'ジバコイル', 471: 'グレイシア', 475: 'エルレイド', 479: 'ロトム', 553: 'ワルビアル', 571: 'ゾロアーク', 576: 'ゴチルゼル', 591: 'モロバレル', 612: 'オノノクス', 625: 'キリキザン', 635: 'サザンドラ', 637: 'ウルガモス', 663: 'ファイアロー', 691: 'ドラミドロ', 693: 'ブロスター', 700: 'ニンフィア', 706: 'ヌメルゴン', 713: 'クレベース', 715: 'オンバーン', 745: 'ルガルガン', 748: 'ドヒドイデ', 778: 'ミミッキュ', 823: 'アーマーガア', 842: 'タルップル', 849: 'ストリンダー', 855: 'ポットデス', 858: 'ブリムオン', 861: 'オーロンゲ', 873: 'モスノウ', 887: 'ドラパルト', 908: 'マスカーニャ', 911: 'ラウドボーン', 914: 'ウェーニバル', 920: 'エクスレッグ', 923: 'パーモット', 925: 'イッカネズミ', 930: 'オリーヴァ', 934: 'キョジオーン', 936: 'グレンアルマ', 937: 'ソウブレイズ', 939: 'ハラバリー', 941: 'タイカイデン', 945: 'タギングル', 949: 'リククラゲ', 952: 'スコヴィラン', 956: 'クエスパトラ', 959: 'デカヌチャン', 964: 'イルカマン', 966: 'ブロロローム', 967: 'モトトカゲ', 968: 'ミミズズ', 970: 'キラフロル', 972: 'ハカドッグ', 973: 'カラミンゴ', 977: 'ヘイラッシャ', 979: 'コノヨザル', 980: 'ドオー', 981: 'リキキリン', 982: 'ノココッチ', 983: 'ドドゲザン', 998: 'セグレイブ', 1000: 'サーフゴー' }

  const inputElement = useRef(null)

  const handleClick = () => {
    setPastGen(inputElement.current.value)
  };


  const rankingMap = ranking.map((rank, i) => {
    return <li li key={i} >
      rank:{rank.rank} <br />
      score:{rank.score} <br />
      1:{pokedex[rank.party[0][0]]} <br />
      2:{pokedex[rank.party[1][0]]} <br />
      3:{pokedex[rank.party[2][0]]} <br />
      4:{pokedex[rank.party[3][0]]} <br />
      5:{pokedex[rank.party[4][0]]} <br />
      6:{pokedex[rank.party[5][0]]} <br />
      <br />
    </li >
  }
  );

  const pastRankingMap = pastRanking.map((rank, i) => {
    return <li li key={i} >
      rank:{rank.rank} <br />
      score:{rank.score} <br />
      1:{pokedex[rank.party[0][0]]} <br />
      2:{pokedex[rank.party[1][0]]} <br />
      3:{pokedex[rank.party[2][0]]} <br />
      4:{pokedex[rank.party[3][0]]} <br />
      5:{pokedex[rank.party[4][0]]} <br />
      6:{pokedex[rank.party[5][0]]} <br />
      <br />
    </li >
  }
  );


  useEffect(() => {
    fetch(`https://pokemon-ga-api.yukiosada.work`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRanking(data.ranking)
      })

    fetch(`https://pokemon-ga-api.yukiosada.work/latest-generation`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setLatestGen(data)
      })
  }, [])

  useEffect(() => {
    fetch(`https://pokemon-ga-api.yukiosada.work/archive/detail?generation=${pastGen}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPastRanking(data.ranking)
      })
  }, [pastGen])



  return (
    <div className='page4'>
      <h1>Application</h1>
      <div className='nthGen'>
        <h1>{latestGen}th generation</h1>
        <div className='blackBox'>
          <ul>
            {rankingMap}
          </ul>
        </div>
      </div>
      <div className='searchGen'>
        <h1>Search past generations</h1>
        <div className='genInput'>
          <label><input ref={inputElement} type="number" min="1" ></input><span>th</span></label>
          <button onClick={handleClick}>search</button>
        </div>
        <div className='blackBox'>
          <ul>
          {pastRankingMap}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Page4
