"use client"
import { BASE_URL } from '@/baseUrl'
import { Button } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'

const UpdateApiKeyButton = ({ title }: any) => {

    const router = useRouter();

    const onClick = () => {
        const newApiKey = prompt('Enter the new API key:');
        if (newApiKey) {
            axios.post(`${BASE_URL}/admin/api-key`, { key: newApiKey })
                .then((response) => {
                    alert(response.data);
                    router.refresh();
                })
                .catch((error) => {
                    console.error('Error updating API key:', error);
                });
        }
    }

    return (
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}
            onClick={onClick}
        >
            {title}
        </Button>
    )
}

export default UpdateApiKeyButton