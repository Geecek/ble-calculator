import React from 'react';
import PropTypes from 'prop-types';

import Colors from '../constants/Colors';

import {Icon} from 'react-native-elements';

const TabBarIcon = ({ name, focused }) => (
  <Icon
    name={name}
    type={'ionicon'}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
);

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

export default TabBarIcon;
