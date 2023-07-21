import React from 'react';
import Button from "../Button/Button";
import "./Header.css";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {

    const {onClose} = useTelegram()


    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    );
};

export default Header;