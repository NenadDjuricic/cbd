import React from "react"
import Layout from '../components/Layout'
import VideoBg from 'reactjs-videobg'
import mp4 from "../images/cbdVideo.mp4"
import style from "../sass/aboutPage.module.scss"
import { FaQuoteLeft } from "react-icons/fa";
const oNama = () => (
  
      <Layout>
      <div className={style.divider}></div>
        <div className={`${style.weAre} container-fluid`}>
        <div className="row">
     <div className="col-12">
       <h1 className="text-center">Mi smo Crystalweed ®</h1>
       <p className='text-center p-2'>Već više od 5 godina u ovom sektroru pažljivo biramo materijale za svoje proizvode kako bismo garantovali maksimalnu vrednost uz najviše iskustvo.

Iz tog razloga,visok kvalitet,pouzdanost i profesionalnost su karakteristike po kojima želimo da ostanemo upamćeni!</p>
     </div>
   </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-6 col-xl-6">
   <VideoBg wrapperClass={style.video} videoClass={style.videoCbd}>
  <VideoBg.Source src={mp4} type="video/mp4"/>

   </VideoBg>
   </div>
   <div className="col-12 col-md-12 col-lg-6 col-xl-6 mt-auto mb-auto">
     <h1>Posao rođen iz strasti</h1>
     <p>People say that if you choose a job you love you will never work a day in your life. We, with Crystalweed, have succeeded in it. Born from an agricultural tradition, we have always cultivated a great passion for the land, which over time has led us to take an interest in alternative cultures, including that of legal cannabis.</p>
     <blockquote className={`${style.blockquote} ${style.blockquoteCustom} bg-white p-5 shadow rounded mt-5`}>
                    <div className={`${style.blockquoteCustomIcon} bg-info shadow-sm`}><FaQuoteLeft className="text-white"/></div>
                    <p className="mb-0 mt-2 font-italic">"We can live a wonderful life in the world if we know how to work and love, work for those we love and love what we work for."</p>
                    <footer className="blockquote-footer pt-4 mt-4 border-top">Lev Tolstoy
                    </footer>
                </blockquote>
   </div>
   </div>
   </div>
  </Layout>

)

export default oNama
