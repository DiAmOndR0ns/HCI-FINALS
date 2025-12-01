const credentials = {
  username: "Admin",
  password: "admin123"
};

// Sample inventory items commonly found in a pharmacy.
// This is a simple demo dataset for UI/testing purposes.
const items = [
  // Food / Nutrition
  { id: 1, category: 'Food', name: 'Glucose Biscuits (200g)', price: 2.50, unit: 'pack', stock: 24, description: 'Quick energy biscuits suitable for diabetic-friendly snacks.' },
  { id: 2, category: 'Food', name: 'Nutritional Drink (Vanilla, 400ml)', price: 3.75, unit: 'bottle', stock: 30, description: 'High-calorie supplement for malnutrition or recovery.' },
  { id: 3, category: 'Food', name: 'Protein Bar (Chocolate)', price: 1.80, unit: 'bar', stock: 50, description: 'Convenient protein snack for active customers.' },

  // Beverages
  { id: 10, category: 'Beverages', name: 'Bottled Water (500ml)', price: 0.75, unit: 'bottle', stock: 120, description: 'Still mineral water.' },
  { id: 11, category: 'Beverages', name: 'Electrolyte Drink (500ml)', price: 2.20, unit: 'bottle', stock: 40, description: 'Rehydration solution for dehydration.' },

  // Medical Instruments / Supplies
  { id: 20, category: 'Medical Instrument', name: 'Digital Thermometer', price: 8.99, unit: 'each', stock: 15, description: 'Fast-read digital oral/axillary thermometer.' },
  { id: 21, category: 'Medical Instrument', name: 'Blood Pressure Monitor (Automatic)', price: 39.99, unit: 'each', stock: 8, description: 'Upper-arm automatic BP monitor for home use.' },
  { id: 22, category: 'Medical Instrument', name: 'Glucometer Kit', price: 24.50, unit: 'kit', stock: 12, description: 'Includes meter, test strips (10), and lancets.' },
  { id: 23, category: 'Medical Instrument', name: 'Digital Pulse Oximeter', price: 19.99, unit: 'each', stock: 20, description: 'Finger pulse oximeter for SpO2 and pulse rate.' },
  { id: 24, category: 'Medical Instrument', name: 'Sterile Syringes (1ml x 100)', price: 12.00, unit: 'box', stock: 25, description: 'Disposable sterile syringes, single-use.' },
  { id: 25, category: 'Medical Instrument', name: 'Disposable Face Masks (50)', price: 6.50, unit: 'box', stock: 75, description: '3-ply surgical masks.' },

  // OTC Medicines
  { id: 30, category: 'Medicine', name: 'Paracetamol 500mg (Tablets, 20)', price: 1.99, unit: 'box', stock: 200, description: 'Analgesic & antipyretic.' },
  { id: 31, category: 'Medicine', name: 'Ibuprofen 200mg (Tablets, 20)', price: 2.49, unit: 'box', stock: 150, description: 'Pain reliever / anti-inflammatory.' },
  { id: 32, category: 'Medicine', name: 'Cough Syrup (100ml)', price: 3.25, unit: 'bottle', stock: 60, description: 'Relief for cough and throat irritation.' },
  { id: 33, category: 'Medicine', name: 'Antacid Tablets (20)', price: 1.50, unit: 'box', stock: 90, description: 'For heartburn and indigestion.' },

  // Prescription Drugs (examples) - Ensure correct handling in production
  { id: 40, category: 'Drug', name: 'Amoxicillin 500mg (Capsules, 20)', price: 6.99, unit: 'box', stock: 40, prescriptionRequired: true, description: 'Antibiotic - prescription only.' },
  { id: 41, category: 'Drug', name: 'Metformin 500mg (Tablets, 30)', price: 4.99, unit: 'box', stock: 35, prescriptionRequired: true, description: 'Diabetes medication - prescription only.' },
  { id: 42, category: 'Drug', name: 'Atorvastatin 10mg (Tablets, 30)', price: 7.25, unit: 'box', stock: 22, prescriptionRequired: true, description: 'Cholesterol lowering - prescription only.' },

  // First Aid / Personal Care
  { id: 50, category: 'Personal Care', name: 'Antiseptic Cream (30g)', price: 2.20, unit: 'tube', stock: 55, description: 'Topical antiseptic for minor cuts.' },
  { id: 51, category: 'Personal Care', name: 'Band-Aid Assorted (20)', price: 1.25, unit: 'pack', stock: 100, description: 'Assorted adhesive bandages.' },
  { id: 52, category: 'Personal Care', name: 'Hand Sanitizer (250ml)', price: 3.00, unit: 'bottle', stock: 80, description: 'Alcohol-based sanitizer.' }
];

// Keep variables available globally for simple front-end demos
// (If using modules, export them instead)
// Example for Node/CommonJS: module.exports = { credentials, items };