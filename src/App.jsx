import { useState, useEffect } from "react";
import DebtForm from "./components/DebtForm";
import DebtList from "./components/DebtList";
import { db } from "./firebase/firebaseConfig";
import { collection, query, onSnapshot } from "firebase/firestore";
import "./app.css";

const App = () => {
  const [debts, setDebts] = useState([]);

  const fetchDebts = () => {
    const q = query(collection(db, "debts"));
    onSnapshot(q, (querySnapshot) => {
      const debtsArray = [];
      querySnapshot.forEach((doc) => {
        debtsArray.push({ ...doc.data(), id: doc.id });
      });
      setDebts(debtsArray);
    });
  };

  useEffect(() => {
    fetchDebts();
  }, []);

  return (
    <div className="container mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-6xl">
      <h1 className="mx-auto items-center text-center text-2xl mb-5">
        Manejo de deudas
      </h1>
      <div>
        <DebtForm fetchDebts={fetchDebts} />
      </div>
      <DebtList debts={debts} fetchDebts={fetchDebts} />
    </div>
  );
};

export default App;
