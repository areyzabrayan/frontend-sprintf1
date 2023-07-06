import axios from "axios";

const url = 'https://back-sprintm1.onrender.com';
const getUsers = async (url) => {
  try {
    const { data } = await axios.get(url);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getUsers;

export const findChats = async (keyword) =>{
  try {
    console.log(keyword);
    const response = await axios.get(`${url}/Usuarios?Nombre_like=${keyword}`);

    const users = response.data;

    return users;
    // const userNames = users.map((user) => user.Nombre);
    // return userNames;
  } catch (error) {
    console.error(error);
    return [];
  }
}

