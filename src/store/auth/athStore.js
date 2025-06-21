import * as accountService from "../../services/accountService";

const authStore = {
  isAuthenticated: false,
  user: null,

  async init() {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      this.user = JSON.parse(savedUser);
      this.isAuthenticated = true;
    }
  },

  async register({ username, email, password }) {
    const allUsers = await accountService.getAllAccounts();

    const isEmailTaken = allUsers.some(user => user.email === email);
    if (isEmailTaken) {
      throw new Error("Email already exists.");
    }

    const newUser = {
      username,
      email,
      password
    };

    const createdUser = await accountService.addAccount(newUser);

    this.isAuthenticated = true;
    this.user = createdUser;
    localStorage.setItem("currentUser", JSON.stringify(createdUser));
  },

  async login(email, password) {
    const allUsers = await accountService.getAllAccounts();

    const foundUser = allUsers.find(user => user.email === email && user.password === password);

    if (foundUser) {
      this.isAuthenticated = true;
      this.user = foundUser;
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      return true;
    }

    return false;
  },

  logout() {
    this.isAuthenticated = false;
    this.user = null;
    localStorage.removeItem("currentUser");
  },

  getAuth() {
    return {
      isAuthenticated: this.isAuthenticated,
      user: this.user,
    };
  }
};

(async () => {
  await authStore.init();
})();

export default authStore;
