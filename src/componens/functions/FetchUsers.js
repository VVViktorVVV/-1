const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3003/arrayOrder");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};


export default fetchUsers;
