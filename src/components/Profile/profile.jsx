import PropTypes from 'prop-types';
import { Box } from 'components/box';
import {
  Avatar,
  Name,
  Info,
  Stats,
  StatsItem,
  Label,
  Quantity
} from './profile.styled';

export const Profile = ({username, tag, location, avatar, stats: {followers, views, likes}}) => {
  return <Box
    width='300px'
    textAlign='center'
    
    mt={5}
    mx='auto'

    border='normal'
    borderColor='border'
    borderRadius='md'
    boxShadow='normal'
    >
    <Box pt={5}>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <Name>{username}</Name>
    <Info>@{tag}</ Info>
    <Info>{location}</Info>
  </Box>

  <Stats>
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatsItem>
  </Stats>
</Box>
 };

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

