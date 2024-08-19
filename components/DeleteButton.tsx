"use client"
import { IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { BASE_URL } from '@/baseUrl';

type DeleteButton = {
    chatId: string
}
const DeleteButton = ({ chatId }: DeleteButton) => {
    const router = useRouter();
    const deleteUser = async (chatId: string) => {
        await axios.delete(`${BASE_URL}/users/${chatId}`).then((response) => {
            alert(response.data.message);
            router.refresh();
        })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    }

    return (
        <IconButton aria-label="delete" onClick={() => deleteUser(chatId)}>
            <DeleteIcon />
        </IconButton>
    )
}

export default DeleteButton