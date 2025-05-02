import "./Input.css";

function Input({ value, label, onChange, placeholder }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <label>{label}</label>
      <br />
      <input value={value} onChange={handleChange} placeholder={placeholder} />
    </div>
  );
}
export default Input;

// function Input({ value, label, onChange }) {
//     const handleChange = (event) => {
//         onChange(event.target.value);
//   return (
//     <div>
//       <label>{label}</label>
//       <br />
//       <input value={value} />
//     </div>
//   );
// }
// export default Input;
