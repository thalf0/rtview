import MenuList from "./MenuList";
import sideMenu from "./data"

export default function App({sideMenu = []}) {
  return (
    <div className="tree-view-container">
      <MenuList list={sideMenu}/>
    </div>
  )
}