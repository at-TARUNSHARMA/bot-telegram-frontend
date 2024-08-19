"use client"
import { BASE_URL } from '@/baseUrl';
import { Checkbox } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckBox = ({ value, chatId }: any) => {

    const [checkBoxValue, setCheckBoxValue] = useState<boolean>(value);
    const [loading, setloading] = useState<boolean>(false);

    const onValueChange = (e: any) => {
        setloading(true);
        if (!checkBoxValue) {
            axios.patch(`${BASE_URL}/users/block/${chatId}`).then((response) => {
                console.log(response.data);
                setCheckBoxValue(true)
                alert("User blocked");
            }).catch((error) => {
                console.log(error)
            })
        } else {
            axios.patch(`${BASE_URL}/users/unblock/${chatId}`).then((response) => {
                console.log(response.data);
                setCheckBoxValue(false)
                alert("User Unblocked");
            }).catch((error) => {
                console.log(error)
            })
        }

        setloading(false);
    }

    return (
        <Checkbox disabled={loading} value={checkBoxValue} defaultChecked={checkBoxValue} {...label} onClick={onValueChange} />
    )
}

export default CheckBox