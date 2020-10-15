import React, {useEffect} from "react"
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import {graphql} from "gatsby"
import Img from "gatsby-image"
import style from '../sass/cbd.module.scss'
import { Carousel} from "react-bootstrap"
import Prog from '../components/progress'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Cbd = ({data}) => {
  useEffect(()=>{
    AOS.init({duration: 1000});
  }, []);
  return(
  <>
     <Layout>
     <Carousel>
  <Carousel.Item> 
  <StyledHero home="true" img={data.defaultBcgCbd.childImageSharp.fluid}>
     <Banner stil={style.rt} title="CBD: aktivni sastojak legalnog kanabisa" info="Glavna komponenta legalnog kanabisa je CannaBiDol, jedan od više od 60 kanabinoida prisutnih u biljci konoplje, mnoge studije su dokazale terapeutski potencijal u lečenju bolova kao što je migrena, promoviše san, smanjuje anksioznost i paniku i sve se više koristi u terapijama složenijih bolesti kao što su multipla skleroza, epilepsija, pa čak i rak, sa zadovoljavajućim rezultatima.">
     </Banner>
     </StyledHero>
  </Carousel.Item>
  <Carousel.Item> 
  <StyledHero home="true"  img={data.defaultBcgCbd2.childImageSharp.fluid}>
     <Banner stil={style.rt} title="CBD: aktivni sastojak legalnog kanabisa" info="Glavna komponenta legalnog kanabisa je CannaBiDol, jedan od više od 60 kanabinoida prisutnih u biljci konoplje, mnoge studije su dokazale terapeutski potencijal u lečenju bolova kao što je migrena, promoviše san, smanjuje anksioznost i paniku i sve se više koristi u terapijama složenijih bolesti kao što su multipla skleroza, epilepsija, pa čak i rak, sa zadovoljavajućim rezultatima.">
     </Banner>
     </StyledHero>
  </Carousel.Item>
  <Carousel.Item> 
  <StyledHero home="true" img={data.defaultBcgCbd3.childImageSharp.fluid}>
     <Banner stil={style.rt} title="CBD: aktivni sastojak legalnog kanabisa" info="Glavna komponenta legalnog kanabisa je CannaBiDol, jedan od više od 60 kanabinoida prisutnih u biljci konoplje, mnoge studije su dokazale terapeutski potencijal u lečenju bolova kao što je migrena, promoviše san, smanjuje anksioznost i paniku i sve se više koristi u terapijama složenijih bolesti kao što su multipla skleroza, epilepsija, pa čak i rak, sa zadovoljavajućim rezultatima.">
     </Banner>
     </StyledHero>
  </Carousel.Item>
</Carousel>
     
     
<Prog done="100" text="Legalno"/>
     <div className={`container-fluid ${style.containerFluid}`}>
       <div className="row">
     
<div className={`${style.colourBlock} container-fluid`}>
  <div className="row">
    <div className="col-12 col-md-12 col-lg-6 align-self-center">
    <h1>Šta je CBD?</h1>
  <p className={style.para}>CBD je fitokanabinoid koji se uglavnom nalazi u cvetovima biljke kanabis i glavna je komponenta legalnog kanabisa. Za razliku od THC-a, on nije psihoaktivan, pa se čini da nema neželjenih efekata, kao i da poseduje mnoštvo korisnih svojstava koja još uvek nisu dobro otkrivena.</p>
  </div>
  <div className="col-12 col-md-12 col-lg-6" data-aos="fade-left">
  <Img fluid={data.cbdFirst.childImageSharp.fluid}  className="d-none d-sm-none d-md-block"/>
  </div>
  </div>
</div>
<div className={style.skewCC}></div>
</div>

<div className={style.whiteBlock}>
<div className="row">
<div className="col-12 col-md-12 col-lg-6" data-aos="fade-right">
  <Img fluid={data.cbdSecond.childImageSharp.fluid} className="d-none d-sm-none d-md-block"/>
  </div>
  
  <div className="col-12 col-md-12 col-lg-6 align-self-center">
    <h1>CBD efekti</h1>
  <p className={style.para}>CBD je poznat po tome što je jedan od najefikasnijih antidepresiva. Mnogo je studija koje pokazuju kako legalni kanabis, a samim tim i CBD, pomaže u borbi protiv anksioznosti, panike i depresije. Tačno je, iz ovog razloga već postoje anksiolitički lekovi ili antidepresivi, uglavnom hemijske prirode, ali koliko ima kontraindikacija? A neželjeni efekti? Izgleda da je CBD podjednako efikasan, iako je potpuno prirodan.</p>
  </div>
  </div>
</div>
<div className={style.skewC}></div>
<div className={style.colourBlock}>
<div className="row">
    <div className="col-12 col-md-6 col-lg-6 align-self-center">
    <h1>Od biljke do proizvoda</h1>
  <p className={style.para}>CBD, prirodno prisutan u legalnom cveću kanabisa, ekstrahuje se i ubacuje u proizvode koji se sada mogu legalno kupiti na tržištu, kako putem Interneta, tako i od prodavaca, kao što su CBD ulje i biljni čajevi sa CBD-om.</p>
  </div>
  <div className="col-12 col-md-6 col-lg-6" data-aos="fade-left">
  <Img fluid={data.cbdThird.childImageSharp.fluid}  className="d-none d-sm-none d-md-block" />
  </div>
  </div>
</div>
</div>

  </Layout>
  </>
)
}

export const query = graphql`
query{
  defaultBcgCbd2:file(relativePath: { eq: "aboutUs.jpg" }){
    childImageSharp {
      fluid(maxWidth:1100, maxHeight:500, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  defaultBcgCbd:file(relativePath: { eq: "cbdLegale2.jpg" }){
    childImageSharp {
      fluid(maxWidth:1100, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  defaultBcgCbd3:file(relativePath: { eq: "whatis2.jpeg" }){
    childImageSharp {
      fluid(maxWidth:1100, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  cbdFirst:file(relativePath: { eq: "cbdLegale.jpg" }){
    childImageSharp {
      fluid(maxWidth:360, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  cbdSecond:file(relativePath: { eq: "canabisCrystalweed.jpg" }){
    childImageSharp {
      fluid(maxWidth:360, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  cbdThird:file(relativePath: { eq: "canabisCrystalweed.jpg" }){
    childImageSharp {
      fluid(maxWidth:360, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
export default Cbd

