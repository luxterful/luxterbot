export interface Message {
  message: string;
  sender?: "user" | "bot" | "system";
}
