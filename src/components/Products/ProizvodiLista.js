import React, { Component } from 'react'
import styles from "../../sass/proizvodi.module.scss"
import Product from './Product'
import Title from "../Tittle"
export default class ProizvodiLista extends Component {
    state={
        proizvodi:[],
        sortiraniProizvodi:[]
    }
    componentDidMount(){
        this.setState({
            proizvodi:this.props.proizvod.edges,
            sortiraniProizvodi:this.props.proizvod.edges,
        }
        )
    }
    render() {
        return <section className={styles.tours}>
<Title title="Nasi" subtitle="proizvodi"/>
<div className={`container-fluid ${styles.center}`}>
    {
        this.state.sortiraniProizvodi.map(({node})=>{
            return <Product key={node.contentful_id} proizvod={node} /> 
        } )
    }
</div>

        </section>
    }
}
