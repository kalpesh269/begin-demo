import { Device } from '../types';

// Sample device data
export const sampleDevices: Device[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    category: 'smartphones',
    image: 'https://images.pexels.com/photos/19609234/pexels-photo-19609234/free-photo-of-iphone-15-pro-titanium-blue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 999,
    releaseDate: '2023-09-22',
    specs: {
      display: '6.1" OLED ProMotion',
      processor: 'A17 Pro',
      memory: '8GB',
      storage: '128GB',
      battery: '3200 mAh',
      camera: '48MP + 12MP + 12MP',
      weight: '187g',
      dimensions: '146.6 x 70.6 x 8.3 mm',
      operatingSystem: 'iOS 17',
      resolution: '1179 x 2556 pixels',
      screenTechnology: 'Super Retina XDR OLED',
      refreshRate: '120 Hz',
      waterResistance: 'IP68',
      chargingSpeed: '27W',
      wirelessCharging: 'Yes',
      nfc: 'Yes'
    }
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    image: 'https://images.pexels.com/photos/19734011/pexels-photo-19734011/free-photo-of-samsung-s24-ultra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1199,
    releaseDate: '2024-01-31',
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      processor: 'Snapdragon 8 Gen 3',
      memory: '12GB',
      storage: '256GB',
      battery: '5000 mAh',
      camera: '200MP + 12MP + 50MP + 10MP',
      weight: '232g',
      dimensions: '162.3 x 79.0 x 8.6 mm',
      operatingSystem: 'Android 14',
      resolution: '1440 x 3088 pixels',
      screenTechnology: 'Dynamic AMOLED 2X',
      refreshRate: '120 Hz',
      waterResistance: 'IP68',
      chargingSpeed: '45W',
      wirelessCharging: 'Yes',
      nfc: 'Yes'
    }
  },
  {
    id: '3',
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    category: 'smartphones',
    image: 'https://images.pexels.com/photos/19494891/pexels-photo-19494891/free-photo-of-google-pixel-8-pro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 999,
    releaseDate: '2023-10-12',
    specs: {
      display: '6.7" LTPO OLED',
      processor: 'Google Tensor G3',
      memory: '12GB',
      storage: '128GB',
      battery: '5050 mAh',
      camera: '50MP + 48MP + 48MP',
      weight: '213g',
      dimensions: '162.6 x 76.5 x 8.8 mm',
      operatingSystem: 'Android 14',
      resolution: '1344 x 2992 pixels',
      screenTechnology: 'LTPO OLED',
      refreshRate: '120 Hz',
      waterResistance: 'IP68',
      chargingSpeed: '30W',
      wirelessCharging: 'Yes',
      nfc: 'Yes'
    }
  },
  {
    id: '4',
    name: 'OnePlus 12',
    brand: 'OnePlus',
    category: 'smartphones',
    image: 'https://images.pexels.com/photos/13816111/pexels-photo-13816111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 799,
    releaseDate: '2024-01-23',
    specs: {
      display: '6.82" LTPO AMOLED',
      processor: 'Snapdragon 8 Gen 3',
      memory: '12GB',
      storage: '256GB',
      battery: '5400 mAh',
      camera: '50MP + 48MP + 64MP',
      weight: '220g',
      dimensions: '164.3 x 75.8 x 9.2 mm',
      operatingSystem: 'OxygenOS 14',
      resolution: '1440 x 3168 pixels',
      screenTechnology: 'LTPO AMOLED',
      refreshRate: '120 Hz',
      waterResistance: 'IP65',
      chargingSpeed: '100W',
      wirelessCharging: 'Yes',
      nfc: 'Yes'
    }
  },
  {
    id: '5',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    category: 'smartphones',
    image: 'https://images.pexels.com/photos/14818680/pexels-photo-14818680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 899,
    releaseDate: '2024-02-25',
    specs: {
      display: '6.73" LTPO AMOLED',
      processor: 'Snapdragon 8 Gen 3',
      memory: '16GB',
      storage: '512GB',
      battery: '5300 mAh',
      camera: '50MP + 50MP + 50MP + 50MP',
      weight: '227g',
      dimensions: '161.4 x 75.3 x 9.2 mm',
      operatingSystem: 'MIUI 15',
      resolution: '1440 x 3200 pixels',
      screenTechnology: 'LTPO AMOLED',
      refreshRate: '120 Hz',
      waterResistance: 'IP68',
      chargingSpeed: '90W',
      wirelessCharging: 'Yes',
      nfc: 'Yes'
    }
  },
  {
    id: '6',
    name: 'MacBook Pro 16 (M3 Max)',
    brand: 'Apple',
    category: 'laptops',
    image: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 3499,
    releaseDate: '2023-11-07',
    specs: {
      display: '16.2" Liquid Retina XDR',
      processor: 'Apple M3 Max',
      memory: '36GB',
      storage: '1TB SSD',
      battery: '100 Wh',
      weight: '2.15kg',
      dimensions: '355.7 x 248.1 x 16.8 mm',
      operatingSystem: 'macOS Sonoma',
      resolution: '3456 x 2234 pixels',
      screenTechnology: 'Mini-LED',
      refreshRate: '120 Hz',
      ports: 'SDXC, HDMI, 3x Thunderbolt 4, MagSafe 3',
      keyboardType: 'Magic Keyboard with Touch ID',
      webcam: '1080p FaceTime HD'
    }
  },
  {
    id: '7',
    name: 'Dell XPS 15 (2024)',
    brand: 'Dell',
    category: 'laptops',
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 2299,
    releaseDate: '2024-01-15',
    specs: {
      display: '15.6" OLED',
      processor: 'Intel Core i9-14900H',
      memory: '32GB',
      storage: '1TB SSD',
      battery: '86 Wh',
      weight: '1.92kg',
      dimensions: '344.4 x 230.1 x 18.0 mm',
      operatingSystem: 'Windows 11 Pro',
      resolution: '3840 x 2400 pixels',
      screenTechnology: 'OLED',
      refreshRate: '60 Hz',
      ports: '2x Thunderbolt 4, USB-C 3.2, SD card reader',
      keyboardType: 'Backlit keyboard',
      webcam: '720p HD'
    }
  },
  {
    id: '8',
    name: 'AirPods Pro 2',
    brand: 'Apple',
    category: 'headphones',
    image: 'https://images.pexels.com/photos/8861697/pexels-photo-8861697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 249,
    releaseDate: '2022-09-23',
    specs: {
      type: 'In-ear',
      connectivity: 'Bluetooth 5.3',
      battery: '6 hours (ANC on)',
      charging: 'MagSafe, Wireless, USB-C',
      waterResistance: 'IPX4',
      weight: '5.3g per earbud',
      noiseCancellation: 'Active Noise Cancellation',
      driverSize: 'Custom high-excursion driver',
      microphones: '3 per earbud',
      controls: 'Force sensor, touch controls'
    }
  }
];

// Sample categories
export const sampleCategories = [
  { id: '1', name: 'Smartphones', slug: 'smartphones' },
  { id: '2', name: 'Laptops', slug: 'laptops' },
  { id: '3', name: 'Tablets', slug: 'tablets' },
  { id: '4', name: 'Headphones', slug: 'headphones' },
  { id: '5', name: 'Smartwatches', slug: 'smartwatches' },
  { id: '6', name: 'Cameras', slug: 'cameras' },
  { id: '7', name: 'TVs', slug: 'tvs' },
  { id: '8', name: 'Gaming', slug: 'gaming' }
];

// Sample filter options
export const sampleFilters = {
  'Brand': {
    options: [
      { id: 'apple', label: 'Apple' },
      { id: 'samsung', label: 'Samsung' },
      { id: 'google', label: 'Google' },
      { id: 'oneplus', label: 'OnePlus' },
      { id: 'xiaomi', label: 'Xiaomi' },
      { id: 'dell', label: 'Dell' },
      { id: 'hp', label: 'HP' },
      { id: 'lenovo', label: 'Lenovo' }
    ],
    selected: []
  },
  'Price Range': {
    options: [
      { id: 'under-300', label: 'Under $300' },
      { id: '300-600', label: '$300 - $600' },
      { id: '600-1000', label: '$600 - $1000' },
      { id: 'over-1000', label: 'Over $1000' }
    ],
    selected: []
  },
  'Screen Size': {
    options: [
      { id: 'under-6', label: 'Under 6"' },
      { id: '6-6.5', label: '6" - 6.5"' },
      { id: '6.5-7', label: '6.5" - 7"' },
      { id: 'over-7', label: 'Over 7"' }
    ],
    selected: []
  },
  'RAM': {
    options: [
      { id: '4gb', label: '4GB' },
      { id: '6gb', label: '6GB' },
      { id: '8gb', label: '8GB' },
      { id: '12gb', label: '12GB' },
      { id: '16gb', label: '16GB or more' }
    ],
    selected: []
  },
  'Storage': {
    options: [
      { id: '64gb', label: '64GB' },
      { id: '128gb', label: '128GB' },
      { id: '256gb', label: '256GB' },
      { id: '512gb', label: '512GB' },
      { id: '1tb', label: '1TB or more' }
    ],
    selected: []
  },
  'Features': {
    options: [
      { id: '5g', label: '5G Support' },
      { id: 'wireless-charging', label: 'Wireless Charging' },
      { id: 'waterproof', label: 'Waterproof' },
      { id: 'high-refresh', label: 'High Refresh Rate' },
      { id: 'oled', label: 'OLED Display' }
    ],
    selected: []
  }
};