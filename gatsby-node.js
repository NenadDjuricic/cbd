const { parsePath } = require("gatsby")
const path = require("path")
exports.createPages = async( {graphql,actions}) => {
    const {createPage} = actions

    const {data} = await graphql(`
    query{
        proizvodi:allContentfulProizvod{
          edges{
            node{
              slug 
          }
        }
      }
      posts:allContentfulBlogPost{
        edges{
          node{
            slug 
        }
      }
    }
    }
    `)
    data.proizvodi.edges.forEach(({node}) => {
        createPage({
            path:`proizvodi/${node.slug}`,
            component: path.resolve("./src/templates/proizvod-template.js"),
            context:{
                slug:node.slug,
            }
        })
    
    
    })
    data.posts.edges.forEach(({node})=>{
      createPage({
        path:`blog/${node.slug}`,
        component: path.resolve("./src/templates/blog-template.js"),
        context:{
          slug: node.slug,
        }
      })
    })
}