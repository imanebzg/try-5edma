function Button({ text, type, action = null }) {
  let tailStyle;
  switch (action) {
    case "success":
      tailStyle = "bg-success";
    case "error":
      tailStyle = "bg-error";
    case "warning":
      tailStyle = "bg-warning";
    default:
      tailStyle = "";
  }
  switch (type) {
    case "primary":
      return (
        <button
          className={`bg-primary-blue-1 text-white px-4 py-2 rounded-lg ${tailStyle}`}
        >
          {text}
        </button>
      );
    case "secondary":
      return (
        <button
          className={`bg-primary-blue-2 text-white px-4 py-2 rounded-lg ${tailStyle}`}
        >
          {text}
        </button>
      );
  }
  return (
    <button
      className={`bg-primary-blue-1 text-white px-4 py-2 rounded-lg ${tailStyle}`}
    >
      {text}
    </button>
  );
}

export default Button;
