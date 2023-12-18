import { validateEmail, validateZipCode, validatePersonalNumber, validateText } from '../validation';

describe('Validation functions', () => {
  it('should validate email correctly', () => {
    expect(validateEmail('validemail@gmail.com')).toBe(true);
    expect(validateEmail('invalidemail@')).toBe(false);
  });

  it('should validate zip code correctly', () => {
    expect(validateZipCode('12345')).toBe(true);
    expect(validateZipCode('ABC12')).toBe(false);
  });

  it('should validate personal number correctly', () => {
    expect(validatePersonalNumber('123456-7890')).toBe(true);
    expect(validatePersonalNumber('12345')).toBe(false);
  });

  it('should validate text correctly', () => {
    expect(validateText('Valid text')).toBe(true);
  });
});
