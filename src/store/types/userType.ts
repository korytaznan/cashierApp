export type UserStateType = {
  id: string;
  stallCode: string;
  type: 'admin' | 'staff' | 'manage' | '';
  username: string;
  adminId?: string;
  email?: string;
  errors?: [
    {
      code: string;
      message: string;
      path: string[];
    },
  ];
};
