import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

export const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose your favourite dishes</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index)=>{
                    return (
                        <div className='explore-menu-list-item'>
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr />
    </div>
  )
}
