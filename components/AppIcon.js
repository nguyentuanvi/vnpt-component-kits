import React, { Component } from "react";
import { Image } from "react-native";

class AppIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { countImg, style, source } = this.props;
    return (
      <Image
        // defaultSource={icons.close}
        source={source}
        style={[
          { ...this.props.style },
          {
            marginLeft: countImg == 3 ? 60 : countImg == 2 ? 30 : 0,
            resizeMode: "contain",
          },
        ]}
      />
    );
  }
}

const styles = {
  container: {
    width: 50,
    height: 50,
    // justifyContent: 'space-between',
  },
};

export default AppIcon;
