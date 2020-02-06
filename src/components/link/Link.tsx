import * as React from "react";
import { AUTH_TOKEN } from '../../constants'
import { timeDifferenceForDate } from '../../utils'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

type Props = {
  link: any;
  index: number;
  updateStoreAfterVote: any
};

type Votes = {
  // votes[]
}

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
       id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`

class Link extends React.Component<Props> {
  render() {
    const { description, url, postedBy } = this.props.link
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex mt2 items-start">
        <div className="flex items-center">
        <span className="gray">{this.props.index + 1}.</span>
          {authToken && (
            <Mutation mutation={VOTE_MUTATION}
              variables={{ linkId: this.props.link.id }}
              update={(store, { data: { vote } }) =>
                this.props.updateStoreAfterVote(store, vote, this.props.link.id)
            }>
              
              {voteMutation => (
                <div style={{color: 'red'}} onClick={voteMutation}>
                 upvote ▲
                </div>
              )}
            </Mutation>
          )}
        </div>
        <div className="ml1">
          <div>
            {description} ({url})
          </div>
          <div style={{color: 'blue'}}>
            {this.props.link.votes.length} votes | by{' '}
            {this.props.link.postedBy
              ? this.props.link.postedBy.name
              : 'Unknown'}{' '}
            {/* noop - createdAt is not returning any data!!! */}
            <span style={{ color: 'aqua' }}>
              {this.props.link.createdAt ?
                timeDifferenceForDate(this.props.link.createdAt) : 'no date'}
            </span>
          </div> 
        </div>
      </div>
    )
  }
}

export default Link