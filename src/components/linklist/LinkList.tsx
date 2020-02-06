import * as React from "react";
import Link from '../link/Link'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        # createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

interface Data {
  feed: {
    links: Array<{ id: string; url: string; description: string; }>
  }
  // index: number
}

type Response = {
  data: Object
}

class LinkList extends React.Component {
  render() {
   
    return (
      <Query<Data, Response> query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
    
          const linksToRender = data.feed.links
    
          return (
            <div>
              {linksToRender.map((link, index) => (
                <Link key={link.id} link={link} index={index} />
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList