/*  Error Code
0 => No error
1 => Empty field
2 => Minimum length
3 => Maximum length
4 => Pattern not matching
*/

export type TValidationProps = {
  requiredFlag?: boolean;
  fieldval?: string | number | null | Date | boolean | string[];
  minLength?: number;
  maxLength?: number;
  regexPattern?: string | RegExp;
};

export const fieldValidation = (data: TValidationProps) => {
  // Check for Required Field case:
  if (data.requiredFlag) {
    if (data.fieldval && data.fieldval.toString().trim().length) {
      return checkForValidationPath(data);
    } else {
      return 1;
    }
  } else {
    if (data.fieldval && data.fieldval.toString().trim().length) {
      return checkForValidationPath(data);
    } else {
      return 0;
    }
  }
};
const checkForValidationPath = (data: TValidationProps): any => {
  if (data.minLength) {
    if (checkMinlength(data?.fieldval as string, data.minLength)) {
      return 2;
    }
  }
  if (data.maxLength) {
    if (checkMaxlength(data?.fieldval as string, data.maxLength)) {
      return 3;
    }
  }
  if (data.regexPattern) {
    if (!checkPatternMatches(data?.fieldval as string, data.regexPattern)) {
      return 4;
    }
  }
  return 0;
};

const checkMinlength = (fieldval: string | undefined, minLength: number): boolean => {
  return Boolean(fieldval && fieldval.trim().length < minLength);
};

const checkMaxlength = (fieldval: string | undefined, maxLength: number): boolean => {
  return Number(fieldval?.trim()?.length) > maxLength;
};

const checkPatternMatches = (fieldval: string | undefined, regexPattern: string | RegExp): boolean => {
  const newRegex = new RegExp(regexPattern);
  fieldval = fieldval ?? '';
  return newRegex.test(fieldval);
};
