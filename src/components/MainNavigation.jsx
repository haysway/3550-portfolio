import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;