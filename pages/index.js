import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 style={{color: 'red', border: '1px solid black'}}>Welcome Nextjs</h1>
      <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit qui, cumque officia deserunt totam obcaecati minus quis perferendis porro voluptate praesentium accusantium quod quasi laboriosam dolores est voluptatem tempora aliquam.</p>
      <img src="/images/shopee-LOGO.png" alt="" width="150" />
      <style jsx>
        {`
          .desc{
            background-color: yellow;
          }
        `}
      </style>
    </div>
  )
}
