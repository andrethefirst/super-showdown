const getCharacters = async () => {
  try {
    const response = await fetch("https://localhost:5000/characters");
    if(!response.ok) {
      throw Error(response.statusText);
    }
    return response.json()
  } catch (error) {
    return error.message;
  }
};

export { getCharacters };