// Для типізації обробника подій onChange в React, мені потрібно вказати тип події як
// React.ChangeEvent<HTMLInputElement>, оскільки я використовую компонент
//   < input type = "text" />.

import React, { useState } from "react";

export function FormComponent() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}


// Цей код встановлює тип event як React.ChangeEvent<HTMLInputElement>,
// що відображає подію onChange для компонента < input type = "text" />.

