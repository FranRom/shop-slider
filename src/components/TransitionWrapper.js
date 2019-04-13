import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../scss/animations.scss';

const TransitionWrapper = ({ inVar, children, id, className }) => (
  <TransitionGroup>
    <CSSTransition
      key={id}
      timeout={1000}
      classNames={className}
      unmountOnExit
      in={!!inVar}
    >
      <Fragment>{children}</Fragment>
    </CSSTransition>
  </TransitionGroup>
);

TransitionWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  inVar: PropTypes.string,
  children: PropTypes.element,
  className: PropTypes.string
};

export default TransitionWrapper;
