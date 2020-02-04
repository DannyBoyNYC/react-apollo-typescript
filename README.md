Typescript implementation of How To GraphQL React Apollo tutorial with JSS style support.

First time TS reared its ugly head:

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

Second time, added:

`"strictNullChecks": false`

`https://stackoverflow.com/questions/40349987/how-to-suppress-error-ts2533-object-is-possibly-null-or-undefined`

## Auth Branch 

Saved a branch where I'm using `setContext` from `apollo-link-context` to hard code the token.

## Interesting

`createdAt` is not available in the tutorial version of the Prisma/Yoga app but is in the prepared server in the React/Apollo app.