import React from 'react'
import MenuList from './MenuList/MenuList'
import FileList from './FileList/FileList'

const files = ['prueba.png', 'palermo.jpg', 'text.txt', 'text2.txt', 'text3.txt', 'text4.txt', 'text5.txt', 'text6.txt', 'text7.txt', 'text8.txt' , 'text9.txt']

const BodyList = () => {
    return (
        <div>
            <MenuList text="Archivos Recientes"/>
            <FileList files={files}/>
        </div>
    );
}
 
export default BodyList;