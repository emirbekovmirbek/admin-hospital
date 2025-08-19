interface LoginType {
  phone: string;
  password: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

interface TokenInfo {
  userId: string;
  role: string;
  lastName: string;
  firstName: string;
  patronymic: string;
}

interface OTPCodeForm {
  digit0: string;
  digit1: string;
  digit2: string;
  digit3: string;
}

interface FillUserInfoForm {
  patronymic?: string;
  surname: string;
  name: string;
  birthday: string;
  gender: Gender;
  password: string;
  repeatPassword: string;
  agreement: boolean;
}
