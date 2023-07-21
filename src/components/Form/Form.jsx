import React, {useCallback, useEffect, useState} from 'react';
import './Form.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [phone, setPhone] =
    useState('')

    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
        const data = {
            name,
            city,
            phone,
        }
        tg.sendData(JSON.stringify(data))
    }, [name, city, phone])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if (!name || !phone) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show()
        }
    }, [name, phone])

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }


    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input className={'input'}
                   type='text'
                   placeholder={'ФИО'}
                   value={name}
                   onChange={onChangeName}
            />
            <input className={'input'}
                   type='text'
                   placeholder={"Город проживания"}
                   value={city}
                   onChange={onChangeCity}
            />
            <input className={'input'}
                   type='number'
                   placeholder={"Номер телефона"}
                   value={phone}
                   onChange={onChangePhone}
            />
        </div>
    );
};

export default Form;