// Node modules.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from 'lodash';

/**
 * React component to dynamically build breadcrumb links.
 * The Breadcrumbs component accepts an array of HTML A tags,
 * React Router LINK components, or a combination of the two.
 * The component also accepts hard-coded A or LINK elements
 * as props.children.
 */
class Breadcrumbs extends Component {
  /**
   * Build the breadcrumb links. Convert children to an array,
   * pop and add aria-current to last item, build a set of
   * list items.
   */
  renderBreadcrumbLinks = () => {
    const children = React.Children.toArray(this.props.children);
    children.push(
      React.cloneElement(children.pop(), {
        'aria-current': 'page',
      }),
    );
    return children.map((child, i) => <li key={i}>{child}</li>);
  };

  render() {
    const { ariaLabel, className, id, listId, mobileFirstProp } = this.props;

    // Derive IDs.
    const breadcrumbId = id || uniqueId('va-breadcrumbs-');
    const breadcrumbListId = listId || uniqueId('va-breadcrumbs-list-');

    return (
      <nav
        aria-label={ariaLabel}
        aria-live="polite"
        className={classnames({
          'va-nav-breadcrumbs': true,
          'va-nav-breadcrumbs--mobile': !!mobileFirstProp,
          [className]: !!className,
        })}
        data-mobile-first={mobileFirstProp}
        id={breadcrumbId}
      >
        <ul
          className="row va-nav-breadcrumbs-list columns"
          id={breadcrumbListId}
        >
          {this.renderBreadcrumbLinks()}
        </ul>
      </nav>
    );
  }
}

Breadcrumbs.defaultProps = {
  ariaLabel: 'Breadcrumb',
};

Breadcrumbs.propTypes = {
  /**
   * Adds an aria-label attribute to the <nav /> element.
   * The aria-label will be read out when users navigate the
   * <Breadcrumbs/> component using a screen reader.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Optionally adds one or more CSS classes to the NAV element
   */
  className: PropTypes.string,
  /**
   * Adds a custom id attribute to the NAV element
   */
  id: PropTypes.string,
  /**
   * Adds a custom id attribute to the UL element
   */
  listId: PropTypes.string,
  /**
   * Adds CSS class `.va-nav-breadcrumbs--mobile` to the
   * NAV element. The mobile breadcrumb will always
   * be displayed while mobileFirstProp is True.
   */
  mobileFirstProp: PropTypes.bool,
};

export default Breadcrumbs;
