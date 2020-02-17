import classnames from 'classnames';
import * as React from 'react';
import { AUTH_TOKEN } from '../../constants';
import { timeDifferenceForDate } from '../../utils';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import withStyles from 'react-jss';
import { styles } from './styles';

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
`;

const DELETE_MUTATION = gql`
  mutation DeleteMutation($linkId: ID!) {
    deleteLink(linkId: $linkId) {
      id
    }
  }
`;

export const Link = props => {
  const { description, url, postedBy, id, createdAt, votes } = props.link;
  const { classes, className } = props;
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <div className={classnames(classes.root, className)}>
      <span>
        Link number {props.index + 1}, ID: {id}
      </span>

      {authToken && (
        <Mutation mutation={DELETE_MUTATION} variables={{ linkId: id }}>
          {deleteMutation => (
            <div style={{ color: 'green' }} onClick={deleteMutation}>
              X
            </div>
          )}
        </Mutation>
      )}

      {authToken && (
        <Mutation
          mutation={VOTE_MUTATION}
          variables={{ linkId: id }}
          update={(store, { data: { vote } }) => props.updateStoreAfterVote(store, vote, id)}
        >
          {voteMutation => (
            <div style={{ color: 'red' }} onClick={voteMutation}>
              upvote ▲
            </div>
          )}
        </Mutation>
      )}

      <div>
        {description} | ({url})
      </div>
      <div>
        {votes.length}
        {votes.length === 0 ? ` votes` : ' vote'}. Posted by:
        {postedBy ? postedBy.name : ' unknown,'}
        <span>{createdAt ? timeDifferenceForDate(createdAt) : ' no date available'}</span>
      </div>
    </div>
  );
};

// export default Link
export const LinkItemWithStyles = withStyles(styles)(Link);
