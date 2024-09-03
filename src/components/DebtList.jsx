import { db } from "../firebase/firebaseConfig";
import {
  collection,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DebtList = ({ debts, fetchDebts }) => {
  const deleteDebt = async (id) => {
    await deleteDoc(doc(db, "debts", id));
    fetchDebts();
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
      <h1 className="text-lg text-gray-400 font-medium">
        Tabla de cuentas activas
      </h1>
      <div className="flex flex-col mt-6">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full text-sm text-gray-400">
                <thead className="bg-gray-800 text-xs uppercase font-medium">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Cuenta
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Monto inicial
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Saldo actual
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Monto para cancelar
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Mensualidad
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Plazo (meses)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Fecha de inicio
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Dia de pago
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-gray-800">
                  {/* eslint-disable-next-line react/prop-types */}
                  {debts.map((debt) => (
                    <tr className="bg-black bg-opacity-20" key={debt.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span>{debt.name}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span>{debt.initialAmount}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span>{debt.currentBalance}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span>{debt.settlementAmount}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span>{debt.monthlyPayment}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span>{debt.term}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span>{debt.startDate}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span>{debt.nextPaymentDate}</span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => deleteDebt(debt.id)}
                          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-xl text-lg w-full sm:w-auto px-3 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-2"
                        >
                          <FontAwesomeIcon icon="fa-solid fa-trash" />
                        </button>
                        
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg w-full sm:w-auto px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          <FontAwesomeIcon icon="fa-solid fa-square-check" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

                <tfoot className="bg-gray-800 text-xs uppercase font-medium">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      hola
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      hola
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      hola
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      hola
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      —
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      —
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      —
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left tracking-wider"
                    >
                      —
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtList;
