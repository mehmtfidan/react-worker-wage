import { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredGender, setEnteredGender] = useState("");
  const [error, setError] = useState();
  const nameInputRef = useRef();
  const wageInputRef = useRef();

  const minimumWage = 5000;
  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (nameInputRef.current.value.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        message: "Lütfen bir ad giriniz.",
      });
      return;
    }
    if (enteredSurname.trim().length === 0) {
      setError({
        title: "Soy isim Alanı Zorunludur!",
        message: "Lütfen bir soyad giriniz.",
      });
      return;
    }
    if (enteredGender.trim().length === 0) {
      setError({
        title: "Cinsiyet Alanı Zorunludur!",
        message: "Lütfen bir cinsiyet seçiniz.",
      });
      return;
    }

    if (+wageInputRef.current.value < minimumWage) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        message: `Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz.`,
      });
      return;
    }

    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: nameInputRef.current.value,
        gender: enteredGender,
        surname: enteredSurname,
        wage: wageInputRef.current.value,
      },
      ...prevState,
    ]);
    nameInputRef.current.value = "";
    setEnteredSurname("");
    setEnteredGender("");
    wageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      <Card addClass="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Çalışan Adı
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan adı yazınız"
            id="name"
            ref={nameInputRef}
          />
          <label htmlFor="surname" className="font-medium">
            Çalışan Soyadı
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan soyadı yazınız"
            id="surname"
            onChange={(e) => setEnteredSurname(e.target.value)}
            value={enteredSurname}
          />
          <div className="flex items-center mb-4 py-2">
            <label htmlFor="gender" className="font-medium me-4">
              Cinsiyet
            </label>
            <div className="flex items-center gap-x-4">
              <label
                htmlFor="gender"
                className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <input
                  className="w-4 h-4 text-teal-700 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="gender"
                  value="Erkek"
                  checked={enteredGender === "Erkek"}
                  onChange={(e) => setEnteredGender(e.target.value)}
                />
                <span className="ml-2">Erkek</span>
              </label>

              <label
                htmlFor="gender"
                className="flex items-center text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                <input
                  className="w-4 h-4 text-teal-700 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="radio"
                  name="gender"
                  value="Kadın"
                  checked={enteredGender === "Kadın"}
                  onChange={(e) => setEnteredGender(e.target.value)}
                />
                <span className="ml-2">Kadın</span>
              </label>
            </div>
          </div>
          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş miktarı yazınız"
            id="wage"
            ref={wageInputRef}
          />
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddWorker;
