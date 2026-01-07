export function getSignalRConnectionString() {
  return process.env.AZURE_SIGNALR_CONNECTION_STRING ?? "";
}
