export const operations = {
  'post_identity-accounts-reset-by-code': {
    path: '/identity/accounts/reset-by-code',
    method: 'post',
  },
  'post_identity-accounts-reset-by-token': {
    path: '/identity/accounts/reset-by-token',
    method: 'post',
  },
  'post_identity-auth-refresh': {
    path: '/identity/auth/refresh',
    method: 'post',
  },
  'post_identity-auth-send-mail': {
    path: '/identity/auth/send-mail',
    method: 'post',
  },
  'post_identity-auth-sign-in': {
    path: '/identity/auth/sign-in',
    method: 'post',
  },
  'post_identity-auth-sign-up': {
    path: '/identity/auth/sign-up',
    method: 'post',
  },
  'post_identity-auth-verify': {
    path: '/identity/auth/verify',
    method: 'post',
  },
  'get_identity-auth-verify': {
    path: '/identity/auth/verify',
    method: 'get',
  },
  'get_identity-test': {
    path: '/identity/test',
    method: 'get',
  },
  'get_identity-test-seed-data': {
    path: '/identity/test/seed-data',
    method: 'get',
  },
} as const
