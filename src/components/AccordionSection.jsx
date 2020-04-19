import React from 'react';
import PropTypes from 'prop-types';

import './AccordionSection.scss';

class AccordionSection extends React.PureComponent {
  render() {
    const { isOpen, title, children, onClick } = this.props;

    return (
      <div className="section">
        <div onClick={() => onClick(title)} className={`section__header ${isOpen && 'section--active'}`}>
          <span id="section-title">{title}</span>
          {isOpen ? (
            <i className="fa fa-caret-down section__caret" />
          ) : (
            <i className="fa fa-caret-right section__caret" />
          )}
        </div>
        {isOpen && <div className="section__content">{children}</div>}
      </div>
    );
  }
}

AccordionSection.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
};

AccordionSection.defaultProps = {
  isOpen: false,
};

export default AccordionSection;
