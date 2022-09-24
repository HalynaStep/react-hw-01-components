import PropTypes from 'prop-types';
import { Box } from 'components/box';
import {
  Title,
  StatList,
  Item,
  Label,
  Percentage
} from './statistics.styled';
import { ColorRender } from 'renderColor';

export const Statistics = props => (
  <Box mt={5} mx='auto' width='400px' align-items='center' color="secondary"  border='normal'
    borderColor='border'
    borderRadius='md'
    boxShadow='normal'>
    <Title>
      {props.title && props.title.toUpperCase()}
    </Title>
    <StatList>
      {props.stats.map(({ id, label, percentage }) => (
        <Item key={id} backgroundColor={ColorRender()}>
          <Label>{label}</Label>
          <Percentage>{percentage}%</Percentage>
        </Item>
      ))}
    </StatList>
  </Box>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};