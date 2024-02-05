function SelectUser({ setUserType }) {
  return (
    <ul>
      <li>
        <label htmlFor="freelancer">
          <input
            type="radio"
            id="freelancer"
            name="usertype"
            onClick={() => {
              setUserType('freelancer');
            }}
            defaultChecked
          />
          🧑‍💻프리랜서
        </label>
      </li>
      <li>
        <label htmlFor="company">
          <input
            type="radio"
            id="company"
            name="usertype"
            onClick={() => {
              setUserType('company');
            }}
          />
          🏢 회사 · 의뢰인
        </label>
      </li>
    </ul>
  );
}

export default SelectUser;
