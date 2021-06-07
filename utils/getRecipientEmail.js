const getRecipientEmail = (users, userLoggedIn) =>
  users?.filter((userToFilrer) => userToFilrer !== userLoggedIn?.email)[0];
export default getRecipientEmail;
