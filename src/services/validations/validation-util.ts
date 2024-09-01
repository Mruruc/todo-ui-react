export function passwordValidation(
  password: string | undefined,
  passwordRetype: string | undefined
): boolean | undefined {
  if (password && passwordRetype) return password === passwordRetype;
}
