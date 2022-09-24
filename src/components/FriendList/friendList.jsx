import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem/friendListItem';
import { Box } from 'components/box';
export const FriendList = ({friends}) => (
<Box as='ul'
  width='400px'
  textAlign='center'  
  mt={5}
  mx='auto'
  >
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id}>
        <FriendListItem
          isOnline={isOnline}
          avatar={avatar}
          name={name} />         
      </li>     
    ))}
</Box>);


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })
  ),
};