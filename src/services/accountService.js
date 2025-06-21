const BASE_URL = "http://localhost:3001/accounts";

export const getAllAccounts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addAccount = async (newUser) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  return res.json();
};
