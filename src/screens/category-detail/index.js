import './styles.css';
import { useParams } from 'react-router-dom'
import catalog from '../../utils/catalog.json'
import React from 'react';
import { RenderCategoryList } from '../../components/categories'

const CategoryDetails = () => {
  const [data, setData] = React.useState([])
  const { name } = useParams()

  React.useEffect(() => {
    if (name) {
      const allBranches = catalog?.data?.locations.reduce((result, next) => {
        result.push(...next.branches)
        return result;
      }, [])
      const allCategories = allBranches.reduce((result, next) => {
        result.push(...next.categories)
        return result;
      }, [])

      const { subcategories = [] } = allCategories.find((item) => item.name === name) || {}
      setData(subcategories)
    }
  }, [name])

  return (
    <div className="sub-categories-container">
      <RenderCategoryList
        data={data} isDetail={true}
        breadCrumb={[
          { title: "Equipment Catalog", to: `/category/${name}` },
          { title: name, to: `/category/${name}/detail` }]}
      />
    </div>
  )
}

export default CategoryDetails