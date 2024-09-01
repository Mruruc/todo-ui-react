import { ChangeEvent } from "react";

export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  passwordRetype?: string;
}

export interface ValidationError extends User {
  passwordMistMatch?: string;
  description?: string;
}

export interface RegistrationFormComponentProps {
  getUser: User;
  getError: ValidationError;
  handleInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmission: (event: ChangeEvent<HTMLFormElement>) => void;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginFormComponentProps {
  getCredential: LoginCredentials;
  getError: ValidationError;
  handleInputs: (event: ChangeEvent<HTMLInputElement>) => void;
  handleFormSubmission: (event: ChangeEvent<HTMLFormElement>) => void;
}
