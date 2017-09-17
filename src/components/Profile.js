import React from "react";
import { Card } from "semantic-ui-react";

const Profile = ({ profile }) => (
  <Card
    centered
    color="grey"
    image={profile.picture}
    header={profile.name}
    meta={profile.nickname}
  />
);

export default Profile;
