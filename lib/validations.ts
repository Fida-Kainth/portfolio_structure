/**
 * Zero-dependency validators to avoid extra packages.
 * Returns { valid: boolean, errors?: string[] }.
 */

export function validateEmail(email?: string) {
  if (!email) return { valid: false, errors: ['Email is required'] };
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email) ? { valid: true } : { valid: false, errors: ['Invalid email format'] };
}

export function validateNonEmpty(field: string, label: string) {
  if (!field || !field.trim()) {
    return { valid: false, errors: [`${label} is required`] };
  }
  return { valid: true };
}

export function validateContactPayload(payload: {
  name?: string;
  email?: string;
  message?: string;
}) {
  const errors: string[] = [];
  const nameV = validateNonEmpty(payload.name || '', 'Name');
  if (!nameV.valid && nameV.errors) errors.push(...nameV.errors);

  const emailV = validateEmail(payload.email);
  if (!emailV.valid && emailV.errors) errors.push(...emailV.errors);

  const msgV = validateNonEmpty(payload.message || '', 'Message');
  if (!msgV.valid && msgV.errors) errors.push(...msgV.errors);

  return { valid: errors.length === 0, errors };
}
