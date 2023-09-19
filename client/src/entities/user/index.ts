export interface User {
  id: string;
  fullName: string;
  credential: string;
  icon: string;
}

export interface UserState {
  loginedUser: User;
  loading: boolean;
}
