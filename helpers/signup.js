const signUpWithFirebase = async (email, name, password) => {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.API_KEY}`,
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
    await fetch(
      'https://auth-react-native-ea436-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
        }),
      },
    );
  } else {
    console.log('Something went wrong', response.status, response.message);
  }
  return response;
};
export default signUpWithFirebase;
