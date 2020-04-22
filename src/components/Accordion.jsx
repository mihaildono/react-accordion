import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.scss';

import AccordionSection from './AccordionSection';

class Accordion extends React.Component {
  static Section = AccordionSection;

  constructor(props) {
    super(props);

    const openSections = {};
    const children = React.Children.toArray(props.children);

    if (props.allowMultipleOpen) {
      children.forEach((child) => {
        if (child.props.isOpen) {
          openSections[child.key] = true;
        }
      });
    } else {
      children.some((child) => {
        if (child.props.isOpen) {
          openSections[child.key] = true;
          return true;
        }

        return null;
      });
    }

    this.state = { openSections, children };
  }

  onClick = (id) => {
    const { openSections } = this.state;
    const { allowMultipleOpen } = this.props;
    const isOpen = openSections[id];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [id]: !isOpen,
        },
      });
    } else {
      this.setState({
        openSections: {
          [id]: !isOpen,
        },
      });
    }
  };

  render() {
    const { openSections, children } = this.state;

    return (
      <div className="accordion">
        {children.map((child) =>
          React.cloneElement(child, {
            title: child.props.title,
            onClick: this.onClick,
            children: child.props.children,
            isOpen: !!openSections[child.key],
            id: child.key,
          })
        )}
      </div>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  allowMultipleOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  allowMultipleOpen: false,
};

export default Accordion;
