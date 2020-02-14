import * as React from "react";
import LinkItem from '../link-item/LinkItem'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const FEED_QUERY = gql`
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

class LinkList extends React.Component {
    _updateCacheAfterVote = (store, createVote, linkId) => {
    const data = store.readQuery({ query: FEED_QUERY })
    const votedLink = data.feed.links.find(link => link.id === linkId)
    votedLink.votes = createVote.link.votes
    store.writeQuery({ query: FEED_QUERY, data })
  }

  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const linksToRender = data.feed.links
          return (
            <main>
              {linksToRender.map((link, index) => (
                <LinkItem key={link.id} link={link} index={index} updateStoreAfterVote={this._updateCacheAfterVote} />
              ))}
            </main>
          )
        }}
      </Query>
    )
  }
}

export default LinkList