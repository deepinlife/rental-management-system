import { useHistory, Link } from 'react-router-dom';
import './styles.css';
import placeholderImg from '../../assets/booms.png'

const BreadCrumb = ({ data }) => (
  <div className="breadcrumb">
    {data.map((item, index) => <Link key={index} to={item.to || ""}>{`${index !== 0 ? " / " : ""}  ${item.title}`}&nbsp;</Link>)}
  </div>
)


export const RenderCategoryList = ({ data, isDetail, breadCrumb }) => {
  const router = useHistory()
  return (
    <div>
      <BreadCrumb data={breadCrumb} />
      <div className="list-container">
        <div className="list">
          {data.map((item, index) => (
            <div key={index} className="category-item" onClick={() => !isDetail && router.push(`/category/${item.name}/detail`)}>
              <img
                src={item.image ? require(`../../assets/${isDetail ? "subcategory/" : ""}${item.image}`).default : placeholderImg}
                width="100%"
                alt={item.name}
              />
              <div className="category-name">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
