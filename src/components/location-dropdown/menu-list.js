import { useHistory } from "react-router-dom";


const Item = ({ item, ...restProps }) => (
  <div className="menu-list-item" {...restProps}>
    <span>{item.name}</span>
    <i className="arrow right"></i>
  </div>
)

const MenuItem = ({ item, router, children }) => (
  <div className="menu-list-item-container" onClick={() => router.push(`/category/${item.name}`)}>
    <Item item={item} />
    {children}
  </div>
)


export const MenuList = ({ data }) => {
  const router = useHistory()

  return (
    <div className="menu-list">
      <div className="menu-list-box">
        {data.map((item, index) => {

          return (
            <MenuItem item={item} index={index} key={index} router={router}>
              <div className="menu-sub-item-list">
                <div className="menu-list-box" style={{ marginLeft: 10 }}>
                  {item.branches.map((subItem, subIndex) => (
                    <Item
                      item={subItem}
                      key={subIndex}
                      onClick={(event) => {
                        event.stopPropagation();
                        router.push(`/category/${item.name}/${subItem.name}`)
                      }}
                    />
                  ))}
                </div>
              </div>
            </MenuItem>
          )
        })
        }
      </div>
    </div>
  )
}