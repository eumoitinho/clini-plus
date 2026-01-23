import { jwt } from "twilio";

export type TwilioVideoTokenResult = {
  identity: string;
  token: string;
};

export function generateTwilioToken(identity: string, room?: string): TwilioVideoTokenResult {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const apiKeySid = process.env.TWILIO_API_KEY_SID;
  const apiKeySecret = process.env.TWILIO_API_KEY_SECRET;

  if (!accountSid || !apiKeySid || !apiKeySecret) {
    throw new Error(
      "Missing Twilio env vars. Required: TWILIO_ACCOUNT_SID, TWILIO_API_KEY_SID, TWILIO_API_KEY_SECRET"
    );
  }

  const AccessToken = jwt.AccessToken;
  const VideoGrant = AccessToken.VideoGrant;

  const token = new AccessToken(accountSid, apiKeySid, apiKeySecret, {
    identity
  });

  token.addGrant(
    new VideoGrant({
      room
    })
  );

  return {
    identity,
    token: token.toJwt()
  };
}
