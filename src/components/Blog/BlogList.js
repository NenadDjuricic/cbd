import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Tittle'
import {useStaticQuery, graphql} from 'gatsby'
import styles from '../../sass/blog.module.scss'

const getPosts = graphql`
query{
    posts: allContentfulBlogPost(sort:{fields:vreme, order: DESC}){
      edges{
        node{
          vreme(formatString:"MMMM Do YYYY",locale: "sr")
          naslov
          slug
          id:contentful_id
          image{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const BlogList = () => {
    const {posts} = useStaticQuery(getPosts);
    console.log(posts);
    return (
        <section className={styles.blog}>
            <Title title="Nase" subtitle="vesti"/>
            <div className={styles.center}>
                {posts.edges.map(({node})=>{
                    return <BlogCard key={node.id} blog={node} />
                })}
            </div>
        </section>
    )
}

export default BlogList
