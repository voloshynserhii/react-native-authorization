const logInWithFirebase = async (email, password) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    },
  );
  if (response.ok) {
    const res = await fetch(
      'https://auth-react-native-ea436-default-rtdb.europe-west1.firebasedatabase.app/users.json',
    );
    const resData = await res.json();
    const loadedData = [];
    for (const key in resData) {
      loadedData.push(resData[key]);
    }
    const authenticatedUser = await loadedData.find(
      user => user.email === email,
    );
    return authenticatedUser;
  } else {
    console.log(response.status);
  }
};

export default logInWithFirebase;
