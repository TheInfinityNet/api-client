import { getIdentityAuthVerifyQueryParamsSchema, getIdentityAuthVerifyQueryResponseSchema } from './getIdentityAuthVerifySchema'
import { getIdentityTestQueryResponseSchema } from './getIdentityTestSchema'
import { getIdentityTestSeedDataQueryResponseSchema } from './getIdentityTestSeedDataSchema'
import { postIdentityAccountsResetByCodeMutationRequestSchema, postIdentityAccountsResetByCodeMutationResponseSchema } from './postIdentityAccountsResetByCodeSchema'
import { postIdentityAccountsResetByTokenMutationRequestSchema, postIdentityAccountsResetByTokenMutationResponseSchema, postIdentityAccountsResetByTokenQueryParamsSchema } from './postIdentityAccountsResetByTokenSchema'
import { postIdentityAuthRefreshMutationRequestSchema, postIdentityAuthRefreshMutationResponseSchema } from './postIdentityAuthRefreshSchema'
import { postIdentityAuthSendMailMutationRequestSchema, postIdentityAuthSendMailMutationResponseSchema } from './postIdentityAuthSendMailSchema'
import { postIdentityAuthSignInMutationRequestSchema, postIdentityAuthSignInMutationResponseSchema } from './postIdentityAuthSignInSchema'
import { postIdentityAuthSignUpMutationRequestSchema, postIdentityAuthSignUpMutationResponseSchema } from './postIdentityAuthSignUpSchema'
import { postIdentityAuthVerifyMutationRequestSchema, postIdentityAuthVerifyMutationResponseSchema } from './postIdentityAuthVerifySchema'

export const operations = { 'post_identity-accounts-reset-by-code': {
  request: postIdentityAccountsResetByCodeMutationRequestSchema,
  parameters: {
    path: undefined,
    query: undefined,
    header: undefined,
  },
  responses: {
    200: postIdentityAccountsResetByCodeMutationResponseSchema,
    default: postIdentityAccountsResetByCodeMutationResponseSchema,
  },
  errors: {},
}, 'post_identity-accounts-reset-by-token': {
  request: postIdentityAccountsResetByTokenMutationRequestSchema,
  parameters: {
    path: undefined,
    query: postIdentityAccountsResetByTokenQueryParamsSchema,
    header: undefined,
  },
  responses: {
    200: postIdentityAccountsResetByTokenMutationResponseSchema,
    default: postIdentityAccountsResetByTokenMutationResponseSchema,
  },
  errors: {},
}, 'post_identity-auth-refresh': {
  request: postIdentityAuthRefreshMutationRequestSchema,
  parameters: {
    path: undefined,
    query: undefined,
    header: undefined,
  },
  responses: {
    200: postIdentityAuthRefreshMutationResponseSchema,
    default: postIdentityAuthRefreshMutationResponseSchema,
  },
  errors: {},
}, 'post_identity-auth-send-mail': {
  request: postIdentityAuthSendMailMutationRequestSchema,
  parameters: {
    path: undefined,
    query: undefined,
    header: undefined,
  },
  responses: {
    200: postIdentityAuthSendMailMutationResponseSchema,
    default: postIdentityAuthSendMailMutationResponseSchema,
  },
  errors: {},
}, 'post_identity-auth-sign-in': {
  request: postIdentityAuthSignInMutationRequestSchema,
  parameters: {
    path: undefined,
    query: undefined,
    header: undefined,
  },
  responses: {
    200: postIdentityAuthSignInMutationResponseSchema,
    default: postIdentityAuthSignInMutationResponseSchema,
  },
  errors: {},
}, 'post_identity-auth-sign-up': {
  request: postIdentityAuthSignUpMutationRequestSchema,
  parameters: {
    path: undefined,
    query: undefined,
    header: undefined,
  },
  responses: {
    200: postIdentityAuthSignUpMutationResponseSchema,
    default: postIdentityAuthSignUpMutationResponseSchema,
  },
  errors: {},
}, 'post_identity-auth-verify': {
  request: postIdentityAuthVerifyMutationRequestSchema,
  parameters: {
    path: undefined,
    query: undefined,
    header: undefined,
  },
  responses: {
    200: postIdentityAuthVerifyMutationResponseSchema,
    default: postIdentityAuthVerifyMutationResponseSchema,
  },
  errors: {},
}, 'get_identity-auth-verify': {
  request: undefined,
  parameters: {
    path: undefined,
    query: getIdentityAuthVerifyQueryParamsSchema,
    header: undefined,
  },
  responses: {
    200: getIdentityAuthVerifyQueryResponseSchema,
    default: getIdentityAuthVerifyQueryResponseSchema,
  },
  errors: {},
}, 'get_identity-test': {
  request: undefined,
  parameters: {
    path: undefined,
    query: undefined,
    header: undefined,
  },
  responses: {
    200: getIdentityTestQueryResponseSchema,
    default: getIdentityTestQueryResponseSchema,
  },
  errors: {},
}, 'get_identity-test-seed-data': {
  request: undefined,
  parameters: {
    path: undefined,
    query: undefined,
    header: undefined,
  },
  responses: {
    200: getIdentityTestSeedDataQueryResponseSchema,
    default: getIdentityTestSeedDataQueryResponseSchema,
  },
  errors: {},
} } as const
export const paths = { '/identity/accounts/reset-by-code': {
  post: operations['post_identity-accounts-reset-by-code'],
}, '/identity/accounts/reset-by-token': {
  post: operations['post_identity-accounts-reset-by-token'],
}, '/identity/auth/refresh': {
  post: operations['post_identity-auth-refresh'],
}, '/identity/auth/send-mail': {
  post: operations['post_identity-auth-send-mail'],
}, '/identity/auth/sign-in': {
  post: operations['post_identity-auth-sign-in'],
}, '/identity/auth/sign-up': {
  post: operations['post_identity-auth-sign-up'],
}, '/identity/auth/verify': {
  post: operations['post_identity-auth-verify'],
  get: operations['get_identity-auth-verify'],
}, '/identity/test': {
  get: operations['get_identity-test'],
}, '/identity/test/seed-data': {
  get: operations['get_identity-test-seed-data'],
} } as const
