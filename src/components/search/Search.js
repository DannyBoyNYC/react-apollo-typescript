import React, { useState } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { LinkItemBasic } from '../link-item';

import { ButtonPrimary } from '../button';
import { InputText } from '../input';

const Search = props => {
  const [links, setLinks] = useState([]);
  const [filter, setFilter] = useState('');

  const FEED_SEARCH_QUERY = gql`
    query FeedSearchQuery($filter: String!) {
      feed(filter: $filter) {
        links {
          id
          url
          description
          createdAt
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
  `;

  const _executeSearch = async props => {
    // const { filter } = this.state
    const result = await props.client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter },
    });
    const links = result.data.feed.links;
    setLinks({ links });
  };

  return (
    <>
      <div>
        Search
        <InputText type="text" onChange={e => setFilter(e.target.value)} />
        <ButtonPrimary onClick={() => _executeSearch()}>Search</ButtonPrimary>
        {/* {props.client} */}
      </div>
      {links.map((link, index) => (
        <LinkItemBasic key={link.id} link={link} index={index} />
      ))}
    </>
  );
};

export default withApollo(Search);
