import React from "react";
import { Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

const Profile = ({ profile }) => (
  <Card
    image={profile.picture}
    header={profile.name}
    meta="Friend"
    description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
    extra={extra}
  />
);

export default Profile;
