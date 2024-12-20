import {
  PhoneType,
  CallDirectionType,
  PriorityType,
} from '@renderer/crmcall/types/history';

/**
 * Converts a string to the corresponding PhoneType enum value.
 * @param value - The string to convert.
 * @returns The PhoneType enum value or undefined if no match is found.
 */
export function stringToPhoneType(value: string): PhoneType | undefined {
  const enumKey = Object.keys(PhoneType).find(
    (key) => key.toLowerCase() === value.toLowerCase(),
  );
  return enumKey ? PhoneType[enumKey as keyof typeof PhoneType] : undefined;
}

/**
 * Converts a PhoneType enum value to its string representation.
 * @param phoneType - The PhoneType enum value to convert.
 * @returns The string representation of the PhoneType or undefined if invalid.
 */
export function phoneTypeToString(phoneType: PhoneType): string | undefined {
  return PhoneType[phoneType]?.toLowerCase();
}

/**
 * Converts a string to the corresponding CallDirectionType enum value.
 * @param value - The string to convert.
 * @returns The CallDirectionType enum value or undefined if no match is found.
 */
export function stringToCallDirectionType(
  value: string,
): CallDirectionType | undefined {
  const enumKey = Object.keys(CallDirectionType).find(
    (key) => key.toLowerCase() === value.toLowerCase(),
  );
  return enumKey
    ? CallDirectionType[enumKey as keyof typeof CallDirectionType]
    : undefined;
}

/**
 * Converts a CallDirectionType enum value to its string representation.
 * @param callDirectionType - The CallDirectionType enum value to convert.
 * @returns The string representation of the CallDirectionType or undefined if invalid.
 */
export function callDirectionTypeToString(
  callDirectionType: CallDirectionType,
): string | undefined {
  return CallDirectionType[callDirectionType]?.toLowerCase();
}

/**
 * Converts a string to the corresponding PriorityType enum value.
 * @param value - The string to convert.
 * @returns The PriorityType enum value or undefined if no match is found.
 */
export function stringToPriorityType(value: string): PriorityType | undefined {
  const enumKey = Object.keys(PriorityType).find(
    (key) => key.toLowerCase() === value.toLowerCase(),
  );
  return enumKey
    ? PriorityType[enumKey as keyof typeof PriorityType]
    : undefined;
}

/**
 * Converts a PriorityType enum value to its string representation.
 * @param PriorityType - The PriorityType enum value to convert.
 * @returns The string representation of the PriorityType or undefined if invalid.
 */
export function priorityTypeToString(
  priorityType: PriorityType,
): string | undefined {
  return PriorityType[priorityType]?.toLowerCase();
}
