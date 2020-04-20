import React from 'react';
import PropTypes from 'prop-types';

class Accordion extends React.Component {
  state = {
    openSections: {},
  };

  onClick = (title) => {
    const { openSections } = this.state;
    const isOpen = openSections[title];

    this.setState({
      openSections: {
        [title]: !isOpen,
      },
    });
  };

  render() {
    const { openSections } = this.state;
    const { children } = this.props;

    return (
      <div>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            title: child.props.title,
            onClick: this.onClick,
            children: child.props.children,
            isOpen: !!openSections[child.props.title],
          })
        )}
      </div>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default Accordion;
