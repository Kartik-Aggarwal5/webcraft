import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [formOpen, setFormOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const openForm = (e) => {
    e.preventDefault();
    setFormOpen(true);
  };
  const closeForm = () => setFormOpen(false);

  return (
    <AppContext.Provider
      value={{
        formOpen,
        openForm,
        closeForm,
        email,
        setEmail,
        name,
        setName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default useApp;
