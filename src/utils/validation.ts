export function validateEmail(email: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Please enter a valid email';
  }
  return null;
}

export function validateFullName(fullName: string): string | null {
  if (fullName.trim().length === 0) {
    return 'Full name cannot be empty';
  }
  if (fullName.trim().length < 3) {
    return 'Full name must be at least 3 characters long';
  }
  return null;
}

export function validateMessage(message: string): string | null {
  if (message.trim().length === 0) {
    return 'Message cannot be empty';
  }
  if (message.trim().length < 20) {
    return 'Message must be at least 20 characters long';
  }
  return null;
}

export function validateForm(data: Record<string, string>): Record<string, string> {
  const errors: Record<string, string> = {};

  const fullNameError = validateFullName(data.fullName);
  if (fullNameError) {
    errors.fullName = fullNameError;
  }

  const emailError = validateEmail(data.email);
  if (emailError) {
    errors.email = emailError;
  }

  const messageError = validateMessage(data.message);
  if (messageError) {
    errors.message = messageError;
  }

  return errors;
}