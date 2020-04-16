import home from '../../assets/images/svg/home.svg';
import plus from '../../assets/images/svg/plus.svg';

const ListButton = () => {
    return [
        {
            text: "Inicio",
            img: home
        },
        {
            text: "Añadir fichero",
            img: plus
        }
    ]
}

export default ListButton;