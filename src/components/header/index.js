import './styles.css';
import { LocationDropdown } from '../location-dropdown'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="app-header">
      <Link to="/" className="header-title">Rental Management System</Link>
      <div className="select-location">
        <LocationDropdown />
      </div>
    </header>
  );
}
