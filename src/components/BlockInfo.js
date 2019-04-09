import React from 'react';
import PropTypes from 'prop-types';

import TransitionWrapper from './TransitionWrapper';

import './Slide.scss';

const BlockInfo = ({ id, title, description, className, subtitle }) => {
  return (
    <div className={className}>
      <TransitionWrapper id={id} className="transition-item">
        <div>
          {title && <h1>{title}</h1>}
          {subtitle && <h4>{subtitle}</h4>}
          {description && <p>{description}</p>}
        </div>
      </TransitionWrapper>
    </div>
  );
};

BlockInfo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  subtitle: PropTypes.string
};

BlockInfo.defaultProps = {
  title: '',
  description: '',
  subtitle: ''
};

export default BlockInfo;
