export const verificationType = {
  VerifyByCode: 'VerifyByCode',
  VerifyByToken: 'VerifyByToken',
  ResetByCode: 'ResetByCode',
  ResetByToken: 'ResetByToken',
} as const
export type VerificationType =
  (typeof verificationType)[keyof typeof verificationType]
