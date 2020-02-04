import * as React from "react";

type Props = {
  link: any;
};

class Link extends React.Component<Props> {
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