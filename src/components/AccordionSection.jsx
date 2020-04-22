import React from 'react';
import PropTypes from 'prop-types';

import './Accordion.scss';

const AccordionSection = ({ isOpen, title, onClick, id, children }) => (
  <div className="section">
    <div onClick={() => onClick(id)} className="section__header">
      <div className={`section__icon ${isOpen && 'section--rotate'}`}>▸</div>
      <span id="section-title">{title}</span>
    </div>
    {isOpen && <div className="section__content">{children}</div>}
  </div>
);

AccordionSection.propTypes = {
  isOpen: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};

AccordionSection.defaultProps = {
  id: '',
  isOpen: false,
  onClick: () => {},
};

export default AccordionSection;
