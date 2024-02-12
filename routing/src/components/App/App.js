import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/HomePage.js";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage.js";
import { Catalog } from "../../pages/Catalog/Catalog.js";
import { CardPage } from "../../pages/CardPage/CardPage.js";
import { UserProvider } from "../../context/userContext.js";
export const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:goodId" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};
