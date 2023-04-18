import { TABS } from "../../redux/actions/type";
import { useDispatch } from "react-redux";
import "./Tabs.css";
import { toggleTab } from "../../redux/actions";

function Tabs({currentTab}) {

    const dispatch = useDispatch(); 
  return (
     TABS.map(tab => (
         <button
          className={tab === currentTab ? 'buttonTabs selected' : 'buttonTabs'}
          onClick={() => dispatch(toggleTab(tab))}
          >
            {tab}
            </button>
     ))
  )
}

export default Tabs;
