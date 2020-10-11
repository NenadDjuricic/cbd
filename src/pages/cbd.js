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
    AOS.init({duration: 1200});
  }, []);
  return(
  <>
     <Layout>
     <Carousel>
  <Carousel.Item> 
  <StyledHero home="true" img={data.defaultBcgCbd.childImageSharp.fluid}>
     <Banner title="CBD: the active ingredient of legal cannabis" info="Glavna komponenta legalnog kanabisa je CannaBiDol, jedan od više od 60 kanabinoida prisutnih u biljci konoplje, mnoge studije su dokazale terapeutski potencijal u lečenju bolova kao što je migrena, promoviše san, smanjuje anksioznost i paniku i sve se više koristi u terapijama složenijih bolesti kao što su multipla skleroza, epilepsija, pa čak i rak, sa zadovoljavajućim rezultatima.">
     </Banner>
     </StyledHero>
  </Carousel.Item>
  <Carousel.Item> 
  <StyledHero home="true"  img={data.defaultBcgCbd2.childImageSharp.fluid}>
     <Banner title="CBD: the active ingredient of legal cannabis" info="Glavna komponenta legalnog kanabisa je CannaBiDol, jedan od više od 60 kanabinoida prisutnih u biljci konoplje, mnoge studije su dokazale terapeutski potencijal u lečenju bolova kao što je migrena, promoviše san, smanjuje anksioznost i paniku i sve se više koristi u terapijama složenijih bolesti kao što su multipla skleroza, epilepsija, pa čak i rak, sa zadovoljavajućim rezultatima.">
     </Banner>
     </StyledHero>
  </Carousel.Item>
  <Carousel.Item> 
  <StyledHero home="true" img={data.defaultBcgCbd3.childImageSharp.fluid}>
     <Banner title="CBD: the active ingredient of legal cannabis" info="Glavna komponenta legalnog kanabisa je CannaBiDol, jedan od više od 60 kanabinoida prisutnih u biljci konoplje, mnoge studije su dokazale terapeutski potencijal u lečenju bolova kao što je migrena, promoviše san, smanjuje anksioznost i paniku i sve se više koristi u terapijama složenijih bolesti kao što su multipla skleroza, epilepsija, pa čak i rak, sa zadovoljavajućim rezultatima.">
     </Banner>
     </StyledHero>
  </Carousel.Item>
</Carousel>
     
     
<Prog done="100" text="Legalno"/>
     <div className={`container-fluid ${style.containerFluid}`}>
       <div className="row">
     
<div className={`${style.colourBlock} container-fluid`}>
  <div className="row">
    <div className="col-12 col-md-6 col-lg-6 align-self-center">
    <h1>Malo vise informacija ...</h1>
  <p className={style.para}>CBD je fitokanabinoid koji se uglavnom nalazi u cvetovima biljke kanabis i glavna je komponenta legalnog kanabisa. Za razliku od THC-a, on nije psihoaktivan, pa se čini da nema neželjenih efekata, kao i da poseduje mnoštvo korisnih svojstava koja još uvek nisu dobro otkrivena.</p>
  </div>
  <div className="col-12 col-md-6 col-lg-6" data-aos="fade-left">
  <Img fluid={data.cnd.childImageSharp.fluid} />
  </div>
  </div>
</div>
<div className={style.skewCC}></div>
</div>

<div className={style.whiteBlock}>
  <h1>CBD Efekat</h1>
  <p>CBD je poznat po tome što je jedan od najefikasnijih antidepresiva. Mnogo je studija koje pokazuju kako legalni kanabis, a samim tim i CBD, pomaže u borbi protiv anksioznosti, panike i depresije. Tačno je, iz ovog razloga već postoje anksiolitički lekovi ili antidepresivi, uglavnom hemijske prirode, ali koliko ima kontraindikacija? A neželjeni efekti? Izgleda da je CBD podjednako efikasan, iako je potpuno prirodan.</p>
</div>
<div className={style.skewC}></div>
<div className={style.colourBlock}>
  <h1>Od biljke do proizvoda</h1>
  <p>CBD je moguće pronaći u svim sortama kanabisa, kako u sortama koje sadrže visoke vrednosti THC, tako i u onima koje su posebno uzgajane da imaju visoku vrednost CBD sa THC u granicama zakona. U suštini oni koji potom stvaraju legalni kanabis.</p>
</div>
</div>

  </Layout>
  </>
)
}

export const query = graphql`
query{
  defaultBcgCbd:file(relativePath: { eq: "whatis1.jpeg" }){
    childImageSharp {
      fluid(maxWidth:1100, maxHeight:500, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  defaultBcgCbd2:file(relativePath: { eq: "cbdLegale2.jpg" }){
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
  cnd:file(relativePath: { eq: "cbdAbout.jpeg" }){
    childImageSharp {
      fluid(maxWidth:360, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
  cnd1:file(relativePath: { eq: "canabisCrystalweed.jpg" }){
    childImageSharp {
      fluid(maxWidth:360, quality:90){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
export default Cbd

