import home from '../assets/images/svg/home.svg';
import plus from '../assets/images/svg/plus.svg';
import { useDispatch } from "react-redux";
import * as actions from '../store/actions/index';



const ListButtons = () => {
    const dispatch = useDispatch();
    
    const onAddingFile = () => dispatch(actions.addingFile());

    return [
        {
            text: "Inicio",
            img: home,
            onClick: () => {console.log("inicio")}
        },
        {
            text: "Añadir fichero",
            img: plus,
            onClick: () => {onAddingFile()}
        }
    ]
}

export default ListButtons;