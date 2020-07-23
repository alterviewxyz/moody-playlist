import React, { FC } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    allStrapiCategory {
      edges {
        node {
          strapiId
          name
        }
      }
    }
  }
`

const NavigationBar: FC = () => (
  <nav className="uk-navbar-container" data-uk-navbar>
    <div className="uk-navbar-left">
      <ul className="uk-navbar-nav">
        <li>
          <Link to="/">Strapi Blog</Link>
        </li>
      </ul>
    </div>

    <div className="uk-navbar-right">
      <ul className="uk-navbar-nav">
        <StaticQuery
          query={query}
          render={data =>
            data.allStrapiCategory.edges.map((category) => (
                <li key={category.node.strapiId}>
                  <Link to={`/category/${category.node.strapiId}`}>
                    {category.node.name}
                  </Link>
                </li>
              )
            )
          }
        />
      </ul>
    </div>
  </nav>
)

export default NavigationBar