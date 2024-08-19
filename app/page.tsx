import axios from 'axios';
import HomePage from './home';
import { BASE_URL } from '@/baseUrl';

export default async function Home() {

  let apiKey;
  let users = [];

  try {

    apiKey = await (await axios.get(`${BASE_URL}/admin/api-key`)).data;
    users = await (await axios.get(`${BASE_URL}/users`)).data;
    console.log(users);
  } catch (e) {
    console.log(e)
  }

  return (
    <HomePage apiKey={apiKey} users={users} />
  );
}
