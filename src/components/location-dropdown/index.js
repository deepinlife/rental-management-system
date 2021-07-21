import './styles.css';
import { MenuList } from './menu-list';
import catalog from '../../utils/catalog.json'


export const LocationDropdown = () => {

  return (
    <div className="location-container">
      <div>Select Location</div>
      <MenuList data={catalog?.data?.locations || []} />
    </div>
  )

}