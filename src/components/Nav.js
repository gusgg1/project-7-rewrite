import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  getDefinedCategory: PropTypes.func.isRequired,
  isDefined: PropTypes.bool.isRequired,
};

const Nav = (props) => {
  // eslint-disable-next-line react/prop-types
  const { getDefinedCategory, isDefined } = props;

  const links = [
    { route: '/', category: 'rainbows', home: 'home' },
    { route: '/cats', category: 'cats' },
    { route: '/dogs', category: 'dogs' },
    { route: '/business', category: 'business' },
  ];

  return (
    <div>
      <nav className="main-nav">
        <ul>
          {links.map((link) => (
            <li key={link.category}>
              <Link to={`${link.route}`} onClick={() => getDefinedCategory(link.category, isDefined)}>
                {link.home ? link.home : link.category}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

Nav.prototypes = propTypes;

export default Nav;
