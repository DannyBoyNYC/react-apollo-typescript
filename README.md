Users:

Daniel  //  daniel.deverell@gmail.com // dd2345
John  //  john@gmail.com // dd2345


Typescript implementation of How To GraphQL React Apollo tutorial with JSS style support.

1. First time TS reared its ugly head:

```js
import React, { Component } from 'react'

type Props = {
  link: any;
};

class Link extends Component<Props> {
  render() {
    return (
      <div>
        <div>
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    )
  }
}

export default Link
```

2. Second time, added:

`"strictNullChecks": false`

`https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined`

## Auth Branch 

Saved a branch where I'm using `setContext` from `apollo-link-context` to hard code the token.

## Interesting

`createdAt` is not available in the tutorial version of the Prisma/Yoga app but is in the prepared server in the React/Apollo app.

3. Third time TS reared its ugly head in `Header.tsx`. Had to type it as follows:

```js
class Header extends React.Component<RouteComponentProps> {

}
```

4. Fourth time in Login:

```js
_saveUserData = (token: string) => {
  localStorage.setItem(AUTH_TOKEN, token)
}
```

5. Forgot to add this one - major!

```js
import * as React from "react";
import Link from '../link/Link'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        url
        description
      }
    }
  }
`

interface Data {
  feed: {
    links: Array<{ id: string;  url: string; description: string }>
  }
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
              {linksToRender.map(link => <Link key={link.id} link={link} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default LinkList
```

Set:

`"strict": false,`