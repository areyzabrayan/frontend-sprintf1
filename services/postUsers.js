const postMovimiento = async (url, from) => {
  try {
    const response = await axios.post(url, newMovimiento);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default postMovimiento;
