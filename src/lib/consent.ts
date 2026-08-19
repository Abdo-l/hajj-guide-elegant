export const CONSENT_COOKIE_KEY = "niyyah-cookie-consent";
export const CONSENT_PROOF_KEY = "niyyah-consent-proofs";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decidedAt: string;
};

export function readCookiePreferences(): CookiePreferences | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_COOKIE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookiePreferences;
    if (typeof parsed?.decidedAt !== "string") return null;
    return { ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function writeCookiePreferences(prefs: Omit<CookiePreferences, "necessary" | "decidedAt">) {
  const value: CookiePreferences = { necessary: true, decidedAt: new Date().toISOString(), ...prefs };
  try {
    window.localStorage.setItem(CONSENT_COOKIE_KEY, JSON.stringify(value));
  } catch {
    /* ignore */
  }
  return value;
}

export function clearCookiePreferences() {
  try {
    window.localStorage.removeItem(CONSENT_COOKIE_KEY);
  } catch {
    /* ignore */
  }
}

export type ConsentProof = {
  form: string;
  privacy: boolean;
  newsletter: boolean;
  at: string;
  lang: string;
};

/** Stores a local, timestamped proof of consent (CASL / Loi 25). */
export function recordConsentProof(proof: Omit<ConsentProof, "at">): ConsentProof {
  const entry: ConsentProof = { ...proof, at: new Date().toISOString() };
  try {
    const raw = window.localStorage.getItem(CONSENT_PROOF_KEY);
    const list: ConsentProof[] = raw ? JSON.parse(raw) : [];
    list.push(entry);
    window.localStorage.setItem(CONSENT_PROOF_KEY, JSON.stringify(list.slice(-50)));
  } catch {
    /* ignore */
  }
  return entry;
}
