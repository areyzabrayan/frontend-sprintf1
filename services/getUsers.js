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
