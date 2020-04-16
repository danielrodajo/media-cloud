import home from '../../assets/images/svg/home.svg';
import plus from '../../assets/images/svg/plus.svg';

const ListButton = () => {
    return [
        {
            text: "Inicio",
            img: home,
            onClick: () => {console.log("inicio")}
        },
        {
            text: "Añadir fichero",
            img: plus,
            onClick: () => {console.log("agregar")}
        }
    ]
}

export default ListButton;