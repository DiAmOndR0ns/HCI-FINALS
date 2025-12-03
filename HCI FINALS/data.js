const credentials = {
  username: "Admin",
  password: "admin123"
};

// Sample inventory items commonly found in a pharmacy.
// Currency: Philippine Peso (₱)
const items = [
  // Food / Nutrition
  { id: 1, category: 'Food', name: 'Glucose Biscuits (200g)', price: 145.00, unit: 'pack', stock: 24, previousStock: 20, expirationType: 'normal', description: 'Quick energy biscuits suitable for diabetic-friendly snacks.' },
  { id: 2, category: 'Food', name: 'Nutritional Drink (Vanilla, 400ml)', price: 215.00, unit: 'bottle', stock: 30, previousStock: 35, expirationType: 'normal', description: 'High-calorie supplement for malnutrition or recovery.' },
  { id: 3, category: 'Food', name: 'Protein Bar (Chocolate)', price: 105.00, unit: 'bar', stock: 50, previousStock: 48, expirationType: 'normal', description: 'Convenient protein snack for active customers.' },

  // Beverages
  { id: 10, category: 'Beverages', name: 'Bottled Water (500ml)', price: 45.00, unit: 'bottle', stock: 120, previousStock: 115, expirationType: 'normal', description: 'Still mineral water.' },
  { id: 11, category: 'Beverages', name: 'Electrolyte Drink (500ml)', price: 125.00, unit: 'bottle', stock: 40, previousStock: 45, expirationType: 'normal', description: 'Rehydration solution for dehydration.' },

  // Medical Instruments / Supplies
  { id: 20, category: 'Medical Instrument', name: 'Digital Thermometer', price: 525.00, unit: 'each', stock: 15, previousStock: 17, expirationType: 'normal', description: 'Fast-read digital oral/axillary thermometer.' },
  { id: 21, category: 'Medical Instrument', name: 'Blood Pressure Monitor (Automatic)', price: 2250.00, unit: 'each', stock: 8, previousStock: 9, expirationType: 'normal', description: 'Upper-arm automatic BP monitor for home use.' },
  { id: 22, category: 'Medical Instrument', name: 'Glucometer Kit', price: 1400.00, unit: 'kit', stock: 12, previousStock: 15, expirationType: 'normal', description: 'Includes meter, test strips (10), and lancets.' },
  { id: 23, category: 'Medical Instrument', name: 'Digital Pulse Oximeter', price: 1150.00, unit: 'each', stock: 20, previousStock: 20, expirationType: 'normal', description: 'Finger pulse oximeter for SpO2 and pulse rate.' },
  { id: 24, category: 'Medical Instrument', name: 'Sterile Syringes (1ml x 100)', price: 680.00, unit: 'box', stock: 25, previousStock: 22, expirationType: 'normal', description: 'Disposable sterile syringes, single-use.' },
  { id: 25, category: 'Medical Instrument', name: 'Disposable Face Masks (50)', price: 375.00, unit: 'box', stock: 75, previousStock: 70, expirationType: 'normal', description: '3-ply surgical masks.' },

  // OTC Medicines
  { id: 30, category: 'Medicine', name: 'Paracetamol 500mg (Tablets, 20)', price: 115.00, unit: 'box', stock: 200, previousStock: 205, expirationType: 'normal', description: 'Analgesic & antipyretic.' },
  { id: 31, category: 'Medicine', name: 'Ibuprofen 200mg (Tablets, 20)', price: 145.00, unit: 'box', stock: 150, previousStock: 158, expirationType: 'normal', description: 'Pain reliever / anti-inflammatory.' },
  { id: 32, category: 'Medicine', name: 'Cough Syrup (100ml)', price: 185.00, unit: 'bottle', stock: 60, previousStock: 64, expirationType: 'near-expiry', description: 'Relief for cough and throat irritation.' },
  { id: 33, category: 'Medicine', name: 'Antacid Tablets (20)', price: 85.00, unit: 'box', stock: 90, previousStock: 88, expirationType: 'normal', description: 'For heartburn and indigestion.' },
  { id: 34, category: 'Medicine', name: 'Antihistamine 10mg (Tablets, 20)', price: 125.00, unit: 'box', stock: 14, previousStock: 10, expirationType: 'near-expiry', description: 'Allergy and cold relief.' },
  { id: 35, category: 'Medicine', name: 'Vitamin C 500mg (Tablets, 30)', price: 95.00, unit: 'box', stock: 110, previousStock: 105, expirationType: 'normal', description: 'Immune system support.' },

  // Prescription Drugs - Ensure correct handling in production
  { id: 40, category: 'Drug', name: 'Amoxicillin 500mg (Capsules, 20)', price: 395.00, unit: 'box', stock: 40, previousStock: 45, prescriptionRequired: true, expirationType: 'normal', description: 'Antibiotic - prescription only.' },
  { id: 41, category: 'Drug', name: 'Metformin 500mg (Tablets, 30)', price: 285.00, unit: 'box', stock: 35, previousStock: 38, prescriptionRequired: true, expirationType: 'normal', description: 'Diabetes medication - prescription only.' },
  { id: 42, category: 'Drug', name: 'Atorvastatin 10mg (Tablets, 30)', price: 415.00, unit: 'box', stock: 22, previousStock: 25, prescriptionRequired: true, expirationType: 'normal', description: 'Cholesterol lowering - prescription only.' },
  { id: 43, category: 'Drug', name: 'Lisinopril 5mg (Tablets, 30)', price: 325.00, unit: 'box', stock: 18, previousStock: 20, prescriptionRequired: true, expirationType: 'expired', description: 'Blood pressure medication - prescription only.' },
  { id: 44, category: 'Drug', name: 'Omeprazole 20mg (Capsules, 14)', price: 245.00, unit: 'box', stock: 28, previousStock: 30, prescriptionRequired: true, expirationType: 'normal', description: 'Acid reflux treatment - prescription only.' },

  // First Aid / Personal Care
  { id: 50, category: 'Personal Care', name: 'Antiseptic Cream (30g)', price: 125.00, unit: 'tube', stock: 55, previousStock: 60, expirationType: 'near-expiry', description: 'Topical antiseptic for minor cuts.' },
  { id: 51, category: 'Personal Care', name: 'Band-Aid Assorted (20)', price: 75.00, unit: 'pack', stock: 100, previousStock: 85, expirationType: 'normal', description: 'Assorted adhesive bandages.' },
  { id: 52, category: 'Personal Care', name: 'Hand Sanitizer (250ml)', price: 175.00, unit: 'bottle', stock: 80, previousStock: 86, expirationType: 'normal', description: 'Alcohol-based sanitizer.' },
  { id: 53, category: 'Personal Care', name: 'Hydrating Lotion (200ml)', price: 145.00, unit: 'bottle', stock: 45, previousStock: 40, expirationType: 'normal', description: 'For dry skin care.' },
  { id: 54, category: 'Personal Care', name: 'Sunscreen SPF 50 (100ml)', price: 225.00, unit: 'tube', stock: 35, previousStock: 32, expirationType: 'expired', description: 'UV protection lotion.' }
];

// Users in the pharmacy system
const users = [
  { id: 1, username: 'Admin', role: 'Administrator', email: 'admin@pharmacy.com', status: 'Active', createdAt: '2025-11-15T08:00:00', createdAtDisplay: 'Nov 15, 2025 08:00 AM', profileImage: 'adminPp.jpeg' },
  { id: 2, username: 'Aella_Agsoy', role: 'Pharmacist', email: 'aella@pharmacy.com', status: 'Active', createdAt: '2025-11-20T09:30:00', createdAtDisplay: 'Nov 20, 2025 09:30 AM', profileImage: '' },
  { id: 3, username: 'Joshua_Pesiao', role: 'Cashier', email: 'joshua@pharmacy.com', status: 'Active', createdAt: '2025-11-22T14:15:00', createdAtDisplay: 'Nov 22, 2025 02:15 PM', profileImage: '' },
  { id: 4, username: 'Ronar_Diamante', role: 'Store Manager', email: 'ronar@pharmacy.com', status: 'Active', createdAt: '2025-11-18T10:45:00', createdAtDisplay: 'Nov 18, 2025 10:45 AM', profileImage: '' },
  { id: 5, username: 'Estifane_Almento', role: 'Inventory Officer', email: 'estifane@pharmacy.com', status: 'Active', createdAt: '2025-11-25T11:20:00', createdAtDisplay: 'Nov 25, 2025 11:20 AM', profileImage: '' }
];

// Sales records (Currency: Philippine Peso ₱)
const sales = [
  { id: 1, date: '2025-12-03', itemId: 30, itemName: 'Paracetamol 500mg', quantity: 5, unitPrice: 115.00, total: 575.00, cashier: 'Joshua_Pesiao' },
  { id: 2, date: '2025-12-03', itemId: 10, itemName: 'Bottled Water (500ml)', quantity: 12, unitPrice: 45.00, total: 540.00, cashier: 'Aella_Agsoy' },
  { id: 3, date: '2025-12-03', itemId: 20, itemName: 'Digital Thermometer', quantity: 2, unitPrice: 525.00, total: 1050.00, cashier: 'Joshua_Pesiao' },
  { id: 4, date: '2025-12-02', itemId: 31, itemName: 'Ibuprofen 200mg', quantity: 8, unitPrice: 145.00, total: 1160.00, cashier: 'Aella_Agsoy' },
  { id: 5, date: '2025-12-02', itemId: 51, itemName: 'Band-Aid Assorted', quantity: 15, unitPrice: 75.00, total: 1125.00, cashier: 'Joshua_Pesiao' },
  { id: 6, date: '2025-12-01', itemId: 32, itemName: 'Cough Syrup', quantity: 4, unitPrice: 185.00, total: 740.00, cashier: 'Aella_Agsoy' },
  { id: 7, date: '2025-12-01', itemId: 52, itemName: 'Hand Sanitizer', quantity: 6, unitPrice: 175.00, total: 1050.00, cashier: 'Joshua_Pesiao' },
  { id: 8, date: '2025-11-30', itemId: 22, itemName: 'Glucometer Kit', quantity: 3, unitPrice: 1400.00, total: 4200.00, cashier: 'Ronar_Diamante' },
  { id: 9, date: '2025-11-30', itemId: 21, itemName: 'Blood Pressure Monitor', quantity: 1, unitPrice: 2250.00, total: 2250.00, cashier: 'Aella_Agsoy' },
  { id: 10, date: '2025-11-29', itemId: 35, itemName: 'Vitamin C 500mg', quantity: 10, unitPrice: 95.00, total: 950.00, cashier: 'Joshua_Pesiao' }
];

// Purchase orders / Purchases from suppliers (Currency: Philippine Peso ₱)
const purchases = [
  { id: 1, poNumber: 'PO-2025-001', date: '2025-12-03', supplier: 'Global Pharma Distributors', itemId: 30, itemName: 'Paracetamol 500mg', quantity: 100, unitCost: 45.00, totalCost: 4500.00, poDate: '2025-12-03', estimatedArrival: '2025-12-10', type: 'LOCAL', status: 'Confirmed' },
  { id: 2, poNumber: 'PO-2025-002', date: '2025-12-02', supplier: 'MediCare Supplies', itemId: 31, itemName: 'Ibuprofen 200mg', quantity: 75, unitCost: 65.00, totalCost: 4875.00, poDate: '2025-12-02', estimatedArrival: '2025-12-09', type: 'DIRECT', status: 'Confirmed' },
  { id: 3, poNumber: 'PO-2025-003', date: '2025-12-01', supplier: 'Global Pharma Distributors', itemId: 20, itemName: 'Digital Thermometer', quantity: 30, unitCost: 250.00, totalCost: 7500.00, poDate: '2025-12-01', estimatedArrival: '2025-12-08', type: 'LOCAL', status: 'Confirmed' },
  { id: 4, poNumber: 'PO-2025-004', date: '2025-11-28', supplier: 'HealthFirst Ltd', itemId: 21, itemName: 'Blood Pressure Monitor', quantity: 15, unitCost: 1150.00, totalCost: 17250.00, poDate: '2025-11-28', estimatedArrival: '2025-12-12', type: 'DIRECT', status: 'Editing' },
  { id: 5, poNumber: 'PO-2025-005', date: '2025-11-25', supplier: 'MediCare Supplies', itemId: 52, itemName: 'Hand Sanitizer', quantity: 50, unitCost: 85.00, totalCost: 4250.00, poDate: '2025-11-25', estimatedArrival: '2025-12-05', type: 'LOCAL', status: 'Confirmed' }
];

// Dashboard summary data
const dashboardStats = {
  totalItems: items.length,
  totalSales: sales.reduce((sum, s) => sum + s.total, 0),
  totalUsers: users.length,
  activeUsers: users.filter(u => u.status === 'Active').length,
  lowStockItems: items.filter(i => i.stock < 20),
  expiredProducts: 3,
  nearExpiryProducts: 5
};

// Currency formatter function for Philippine Peso with comma separators
function formatCurrency(amount) {
  return '₱' + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Number formatter with comma separators
function formatNumber(num) {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Delta (stock change) calculator function
function calculateDelta(item) {
  return item.stock - item.previousStock;
}

// Format delta with color indicator
function formatDelta(delta) {
  if (delta > 0) {
    return `<span class="delta-positive">+${delta}</span>`;
  } else if (delta < 0) {
    return `<span class="delta-negative">${delta}</span>`;
  } else {
    return '<span class="delta-neutral">0</span>';
  }
}

// Keep variables available globally for simple front-end demos
// (If using modules, export them instead)
// Example for Node/CommonJS: module.exports = { credentials, items, users, sales, purchases, dashboardStats };