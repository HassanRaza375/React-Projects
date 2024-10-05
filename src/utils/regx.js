const validateEmail = (email) => {
  const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regx.test(email);
};
const getInitials = (string) => {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

  let initials = [...string.matchAll(rgx)] || [];

  initials = (
    (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
  ).toUpperCase();
  return initials;
};
export { validateEmail, getInitials };
