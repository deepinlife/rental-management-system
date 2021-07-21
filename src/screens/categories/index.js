import './styles.css';
import { useParams, } from 'react-router-dom'
import catalog from '../../utils/catalog.json'
import React from 'react';
import { RenderCategoryList } from '../../components/categories'

const Categories = () => {
  const [data, setData] = React.useState([])
  const { location, branch } = useParams()

  React.useEffect(() => {
    const { branches = [] } = catalog?.data?.locations.find((item) => item.name === location) || {}
    if (branch) {
      const { categories = [] } = branches.find((item) => item.name === branch) || {}
      setData(categories)
    } else {
      const allCategories = branches.reduce((result, next) => {
        result.push(...next.categories)
        return result;
      }, [])
      setData(allCategories)
    }
  }, [location, branch])

  return (
    <div className="categories-container">
      <RenderCategoryList
        data={data}
        breadCrumb={[{ title: "Equipment Catalog", to: `/category/${location}` }]} />
    </div>
  )
}

export default Categories