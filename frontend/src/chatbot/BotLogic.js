export function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("admission")) return "Admissions are open! Visit the college admission portal.";
  if (msg.includes("courses")) return "We offer B.Tech, BCA, MCA and more!";
  if (msg.includes("contact")) return "You can contact us at: contact@college.edu";
  if (msg.includes("placement")) return "Visit the placement cell page for details.";
  if (msg.includes("hi") || msg.includes("hello")) return "Hello! How can I help you today?";

  return "I'm not sure I understand. Can you rephrase?";
}
