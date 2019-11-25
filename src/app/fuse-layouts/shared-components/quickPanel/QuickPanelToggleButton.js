import React from 'react';
import { Icon, IconButton } from '@material-ui/core';
import * as quickPanelActions from './store/actions';
import { useDispatch } from 'react-redux';

function QuickPanelToggleButton(props) {
  const dispatch = useDispatch();

  return (
    <IconButton
      className="w-48 h-48 sm:w-64 sm:h-64"
      onClick={ev => dispatch(quickPanelActions.toggleQuickPanel())}
    >
      {props.children}
    </IconButton>
  );
}

QuickPanelToggleButton.defaultProps = {
  children: <Icon>format_list_bulleted</Icon>
};

export default QuickPanelToggleButton;
