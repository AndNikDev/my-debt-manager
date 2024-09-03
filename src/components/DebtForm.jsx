import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { Datepicker } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const DebtForm = ({ fetchDebts }) => {
  const [formData, setFormData] = useState({
    name: "",
    initialAmount: 0,
    currentBalance: 0,
    settlementAmount: 0,
    monthlyPayment: 0,
    term: 0,
    startDate: new Date(),
    nextPaymentDate: new Date(),
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : value,
    });
  };
    

  const handleDateChange = (date, dateType) => {
    setFormData((prevData) => ({
      ...prevData,
      [dateType]:
        new Date(date).getFullYear() +
        "-" +
        (new Date(date).getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        new Date(date).getDate().toString().padStart(2, "0"),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "debts"), formData);
      fetchDebts();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre de la deuda
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="initialAmount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Monto inicial
          </label>
          <input
            type="number"
            id="initialAmount"
            name="initialAmount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.initialAmount}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="currentBalance"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Saldo actual
          </label>
          <input
            type="number"
            name="currentBalance"
            id="currentBalance"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.currentBalance}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="settlementAmount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Monto para cancelar
          </label>
          <input
            type="number"
            name="settlementAmount"
            id="settlementAmount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.settlementAmount}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="monthlyPayment"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Mensualidad
          </label>
          <input
            type="number"
            name="monthlyPayment"
            id="monthlyPayment"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.monthlyPayment}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="term"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Plazo (meses)
          </label>
          <input
            type="number"
            name="term"
            id="term"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.term}
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="startDate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fecha de inicio
          </label>
          <Datepicker
            name="startDate"
            id="startDate"
            selected={formData.startDate}
            onSelectedDateChanged={(date) =>
              handleDateChange(date, "startDate")
            }
          />
        </div>

        <div>
          <label
            htmlFor="nextPaymentDate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Dia a pagar
          </label>
          <Datepicker
            name="nextPaymentDate"
            id="nextPaymentDate"
            selected={formData.nextPaymentDate}
            onSelectedDateChanged={(date) =>
              handleDateChange(date, "nextPaymentDate")
            }
          />
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Agregar cuenta
      </button>
    </form>
  );
};

export default DebtForm;
