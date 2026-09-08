export const isConfigured = (value) =>
  Boolean(value) && !/your[.-]|00 000|example\.com/i.test(value)
