export async function createUser(data) {
  //TODO: implement this function (this is ex)
  const response = await fetch("/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getUser(email) {
  //TODO: implement this function (this is ex)
  const response = await fetch(`/api/user/${email}`);
  return response.json();
}
