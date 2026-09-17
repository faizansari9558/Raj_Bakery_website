import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { EnquiryModal } from './components/EnquiryModal';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { SpecialCakes } from './pages/SpecialCakes';
import { FindUs } from './pages/FindUs';
import { Contact } from './pages/Contact';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState(null);

  const handleOpenEnquiryModal = (item = null) => {
    setSelectedItemForModal(item);
    setModalOpen(true);
  };

  const handleCloseEnquiryModal = () => {
    setModalOpen(false);
    setSelectedItemForModal(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#2A1810] selection:bg-amber-400 selection:text-amber-950 pb-16 lg:pb-0">
        
        {/* Navigation Header */}
        <Navbar onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* Main Content & Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiryModal={handleOpenEnquiryModal} />} />
            <Route path="/about" element={<About onOpenEnquiryModal={handleOpenEnquiryModal} />} />
            <Route path="/products" element={<Products onOpenEnquiryModal={handleOpenEnquiryModal} />} />
            <Route path="/special-cakes" element={<SpecialCakes onOpenEnquiryModal={handleOpenEnquiryModal} />} />
            <Route path="/find-us" element={<FindUs onOpenEnquiryModal={handleOpenEnquiryModal} />} />
            <Route path="/contact" element={<Contact onOpenEnquiryModal={handleOpenEnquiryModal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* Sticky Mobile Action Bar */}
        <StickyMobileBar onOpenEnquiryModal={() => handleOpenEnquiryModal()} />

        {/* Global Cake Enquiry Modal */}
        <EnquiryModal
          isOpen={modalOpen}
          onClose={handleCloseEnquiryModal}
          initialItem={selectedItemForModal}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
