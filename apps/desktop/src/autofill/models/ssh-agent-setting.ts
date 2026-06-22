export const SshAgentPromptType = Object.freeze({
  Always: "always",
  Never: "never",
  RememberUntilLock: "rememberUntilLock",
  Advanced: "advanced",
} as const);

export type SshAgentPromptType = (typeof SshAgentPromptType)[keyof typeof SshAgentPromptType];

export const SshAgentRememberDuration = Object.freeze({
  No: "no",
  TenMinutes: "10m",
  OneHour: "1h",
  OneDay: "1d",
} as const);

export type SshAgentRememberDuration =
  (typeof SshAgentRememberDuration)[keyof typeof SshAgentRememberDuration];

export function rememberDurationMs(d: SshAgentRememberDuration): number {
  switch (d) {
    case SshAgentRememberDuration.No:
      return 0;
    case SshAgentRememberDuration.TenMinutes:
      return 10 * 60 * 1000;
    case SshAgentRememberDuration.OneHour:
      return 60 * 60 * 1000;
    case SshAgentRememberDuration.OneDay:
      return 24 * 60 * 60 * 1000;
  }
}

/** Per-cipher desktop-local settings for SSH agent behavior. */
export interface SshAgentCipherSetting {
  exposeToAgent?: boolean;
  notifyOnUse?: boolean;
}
