import React from "react";

const DetailRowView = ({ person }) => {
  return (
    <div>
      <p>
        Выбран пользователь <b>{person.firstName + " " + person.lastName}</b>{" "}
      </p>
      <p>
        Описание:
        <br />
        <textarea value={person.description}></textarea>
      </p>
      <p>
        Адрес проживания: <b>{person.address.streetAddress}</b>{" "}
      </p>
      <p>
        Город: <b>{person.address.city}</b>{" "}
      </p>
      <p>
        Провинция/Штат: <b>{person.address.state}</b>{" "}
      </p>
      <p>
        Индекс: <b>{person.address.zip}</b>{" "}
      </p>
    </div>
  );
};

export default DetailRowView;
