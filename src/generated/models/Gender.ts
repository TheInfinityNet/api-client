export const gender = {
  Male: 'Male',
  Female: 'Female',
  Other: 'Other',
} as const
export type Gender = (typeof gender)[keyof typeof gender]
