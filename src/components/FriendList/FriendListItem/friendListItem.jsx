import {Item,
    Avatar,
    Name,
    Status
} from './friedListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => (
    <Item>
        <Status status={isOnline}>{isOnline}</Status>
        <Avatar src={avatar} alt={name}/>
        <Name>{name}</Name></Item>
)