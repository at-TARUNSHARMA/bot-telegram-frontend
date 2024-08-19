import React from 'react';
import {
    Container,
    Typography,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Link,
    Grid,
    Box,
    Button,
} from '@mui/material';
import DeleteButton from '@/components/DeleteButton';
import UpdateApiKeyButton from '@/components/ApiUpdateButton';
import CheckBox from '@/components/CheckBox';

const HomePage = ({ apiKey, users }: any) => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Weather Admin Dashboard
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {/* Box for Managing API Keys */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={4} sx={{ p: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            Manage API Key
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Current API Key: <strong>{apiKey}</strong>
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <UpdateApiKeyButton title={"Update API Key"} />
                        </Box>
                    </Paper>
                </Grid>

                {/* Box for Listing Current Users */}
                <Grid item xs={12} md={6}>
                    <Paper elevation={4} sx={{ p: 3 }}>
                        <Typography variant="h5" gutterBottom>
                            Current Users
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Username</TableCell>
                                        <TableCell>Chat ID</TableCell>
                                        <TableCell>Action</TableCell>
                                        <TableCell>Blocked</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users && users.map((user: any) => (
                                        <TableRow key={user.chatId}>
                                            <TableCell>{user.username}</TableCell>
                                            <TableCell>{user.chatId}</TableCell>
                                            <TableCell>
                                                <DeleteButton chatId={user.chatId} />
                                            </TableCell>
                                            <TableCell>
                                                <CheckBox value={user.isBlock} chatId={user.chatId} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="body2">
                    You can find the bot at:{" "}
                    <Link href="https://telegram.me/attarunsharmabot" target="_blank" rel="noopener noreferrer">
                        https://telegram.me/attarunsharmabot
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default HomePage;
