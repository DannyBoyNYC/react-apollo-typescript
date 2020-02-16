import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { FEED_QUERY } from '../link-list/LinkList';

import { ButtonPrimary } from '../button';
import { InputText } from '../input';

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      url
      description
    }
  }
`;

const CreateLink = props => {
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  const handleUrlChange = event => {
    setUrl(event.target.value);
  };

  return (
    <div>
      <InputText
        value={description}
        onChange={handleDescriptionChange}
        type="text"
        placeholder="A description for the link"
      />
      <InputText value={url} onChange={handleUrlChange} type="text" placeholder="The URL for the link" />

      <Mutation
        mutation={POST_MUTATION}
        variables={{ description, url }}
        onCompleted={() => props.history.push('/')}
        update={(store, { data: { post } }) => {
          const data = store.readQuery({ query: FEED_QUERY });
          data.feed.links.unshift(post);
          store.writeQuery({
            query: FEED_QUERY,
            data,
          });
        }}
      >
        {postMutation => <ButtonPrimary onClick={postMutation}>Submit</ButtonPrimary>}
      </Mutation>
    </div>
  );
  // }
};

export default CreateLink;
