// Mock data for phones and laptops
const phones = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    rating: 91,
    image: "https://images.pexels.com/photos/18069372/pexels-photo-18069372/free-photo-of-iphone-15-pro-front-and-back.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1199,
    specs: {
      display: {
        size: "6.7\"",
        resolution: "1290 x 2796",
        technology: "Super Retina XDR",
        refreshRate: "120Hz"
      },
      camera: {
        main: "48MP",
        ultraWide: "12MP",
        telephoto: "12MP",
        front: "12MP"
      },
      hardware: {
        processor: "A17 Pro",
        ram: "8GB",
        storage: ["256GB", "512GB", "1TB"],
        battery: "4441mAh"
      },
      features: {
        fiveG: true,
        waterResistant: true,
        fastCharging: true,
        wirelessCharging: true
      }
    }
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    rating: 93,
    image: "https://images.pexels.com/photos/13467220/pexels-photo-13467220.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1299,
    specs: {
      display: {
        size: "6.8\"",
        resolution: "1440 x 3088",
        technology: "Dynamic AMOLED 2X",
        refreshRate: "120Hz"
      },
      camera: {
        main: "200MP",
        ultraWide: "12MP",
        telephoto: "10MP",
        periscope: "50MP",
        front: "12MP"
      },
      hardware: {
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: ["256GB", "512GB", "1TB"],
        battery: "5000mAh"
      },
      features: {
        fiveG: true,
        waterResistant: true,
        fastCharging: true,
        wirelessCharging: true
      }
    }
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    rating: 89,
    image: "https://images.pexels.com/photos/17481914/pexels-photo-17481914/free-photo-of-a-google-pixel-8-pro-phone-on-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 999,
    specs: {
      display: {
        size: "6.7\"",
        resolution: "1344 x 2992",
        technology: "LTPO OLED",
        refreshRate: "120Hz"
      },
      camera: {
        main: "50MP",
        ultraWide: "48MP",
        telephoto: "48MP",
        front: "10.5MP"
      },
      hardware: {
        processor: "Google Tensor G3",
        ram: "12GB",
        storage: ["128GB", "256GB", "512GB"],
        battery: "5050mAh"
      },
      features: {
        fiveG: true,
        waterResistant: true,
        fastCharging: true,
        wirelessCharging: true
      }
    }
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    rating: 87,
    image: "https://images.pexels.com/photos/18331418/pexels-photo-18331418/free-photo-of-oneplus-12.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 799,
    specs: {
      display: {
        size: "6.82\"",
        resolution: "1440 x 3168",
        technology: "LTPO AMOLED",
        refreshRate: "120Hz"
      },
      camera: {
        main: "50MP",
        ultraWide: "48MP",
        telephoto: "64MP",
        front: "32MP"
      },
      hardware: {
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: ["256GB", "512GB"],
        battery: "5400mAh"
      },
      features: {
        fiveG: true,
        waterResistant: true,
        fastCharging: true,
        wirelessCharging: true
      }
    }
  },
  {
    id: 5,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    rating: 86,
    image: "https://images.pexels.com/photos/13467292/pexels-photo-13467292.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 899,
    specs: {
      display: {
        size: "6.73\"",
        resolution: "1440 x 3200",
        technology: "LTPO AMOLED",
        refreshRate: "120Hz"
      },
      camera: {
        main: "50MP",
        ultraWide: "50MP",
        telephoto: "50MP",
        periscope: "50MP",
        front: "32MP"
      },
      hardware: {
        processor: "Snapdragon 8 Gen 3",
        ram: "16GB",
        storage: ["256GB", "512GB", "1TB"],
        battery: "5000mAh"
      },
      features: {
        fiveG: true,
        waterResistant: true,
        fastCharging: true,
        wirelessCharging: true
      }
    }
  },
  {
    id: 6,
    name: "Oppo Find X7 Ultra",
    brand: "Oppo",
    rating: 85,
    image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 999,
    specs: {
      display: {
        size: "6.82\"",
        resolution: "1440 x 3168",
        technology: "LTPO AMOLED",
        refreshRate: "120Hz"
      },
      camera: {
        main: "50MP",
        ultraWide: "50MP",
        telephoto: "50MP",
        periscope: "50MP",
        front: "32MP"
      },
      hardware: {
        processor: "Dimensity 9300+",
        ram: "16GB",
        storage: ["256GB", "512GB"],
        battery: "5000mAh"
      },
      features: {
        fiveG: true,
        waterResistant: true,
        fastCharging: true,
        wirelessCharging: true
      }
    }
  },
  {
    id: 7,
    name: "Nothing Phone (2)",
    brand: "Nothing",
    rating: 82,
    image: "https://images.pexels.com/photos/16975618/pexels-photo-16975618/free-photo-of-nothing-phone-2.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 599,
    specs: {
      display: {
        size: "6.7\"",
        resolution: "1080 x 2412",
        technology: "LTPO OLED",
        refreshRate: "120Hz"
      },
      camera: {
        main: "50MP",
        ultraWide: "50MP",
        front: "32MP"
      },
      hardware: {
        processor: "Snapdragon 8+ Gen 1",
        ram: "12GB",
        storage: ["128GB", "256GB"],
        battery: "4700mAh"
      },
      features: {
        fiveG: true,
        waterResistant: true,
        fastCharging: true,
        wirelessCharging: true
      }
    }
  },
  {
    id: 8,
    name: "Motorola Edge 50 Ultra",
    brand: "Motorola",
    rating: 83,
    image: "https://images.pexels.com/photos/10069448/pexels-photo-10069448.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 799,
    specs: {
      display: {
        size: "6.7\"",
        resolution: "1220 x 2712",
        technology: "LTPO OLED",
        refreshRate: "144Hz"
      },
      camera: {
        main: "50MP",
        ultraWide: "64MP",
        telephoto: "50MP",
        front: "60MP"
      },
      hardware: {
        processor: "Snapdragon 8 Gen 3",
        ram: "12GB",
        storage: ["512GB"],
        battery: "4500mAh"
      },
      features: {
        fiveG: true,
        waterResistant: true,
        fastCharging: true,
        wirelessCharging: true
      }
    }
  }
];

const laptops = [
  {
    id: 1,
    name: "MacBook Pro 16 (M3 Max)",
    brand: "Apple",
    rating: 94,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    price: 2499,
    specs: {
      display: {
        size: "16.2\"",
        resolution: "3456 x 2234",
        technology: "Liquid Retina XDR",
        refreshRate: "120Hz"
      },
      performance: {
        processor: "M3 Max",
        cores: "16-core CPU, 40-core GPU",
        ram: "32GB",
        storage: ["512GB", "1TB", "2TB", "4TB", "8TB"]
      },
      features: {
        thunderbolt: true,
        touchId: true,
        backlit: true,
        wifi6E: true
      },
      battery: {
        capacity: "100Wh",
        life: "Up to 22 hours"
      }
    }
  },
  {
    id: 2,
    name: "Dell XPS 16 (2024)",
    brand: "Dell",
    rating: 92,
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    price: 1899,
    specs: {
      display: {
        size: "16\"",
        resolution: "3840 x 2400",
        technology: "OLED Touch",
        refreshRate: "120Hz"
      },
      performance: {
        processor: "Intel Core Ultra 9",
        cores: "16-core CPU",
        ram: "32GB",
        storage: ["512GB", "1TB", "2TB", "4TB"]
      },
      features: {
        thunderbolt: true,
        fingerprint: true,
        backlit: true,
        wifi6E: true
      },
      battery: {
        capacity: "99.5Wh",
        life: "Up to 20 hours"
      }
    }
  },
  {
    id: 3,
    name: "Razer Blade 16",
    brand: "Razer",
    rating: 90,
    image: "https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 2699,
    specs: {
      display: {
        size: "16\"",
        resolution: "3840 x 2400",
        technology: "Mini LED",
        refreshRate: "240Hz"
      },
      performance: {
        processor: "Intel Core i9-14900HX",
        cores: "24-core CPU",
        ram: "32GB",
        storage: ["1TB", "2TB", "4TB"]
      },
      features: {
        thunderbolt: true,
        fingerprint: true,
        backlit: true,
        wifi6E: true
      },
      battery: {
        capacity: "95.2Wh",
        life: "Up to 10 hours"
      }
    }
  },
  {
    id: 4,
    name: "ASUS ROG Zephyrus G16",
    brand: "ASUS",
    rating: 89,
    image: "https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1999,
    specs: {
      display: {
        size: "16\"",
        resolution: "2560 x 1600",
        technology: "ROG Nebula HDR",
        refreshRate: "240Hz"
      },
      performance: {
        processor: "Intel Core Ultra 9",
        cores: "16-core CPU",
        ram: "32GB",
        storage: ["1TB", "2TB"]
      },
      features: {
        thunderbolt: true,
        fingerprint: false,
        backlit: true,
        wifi6E: true
      },
      battery: {
        capacity: "90Wh",
        life: "Up to 12 hours"
      }
    }
  },
  {
    id: 5,
    name: "Lenovo Legion Pro 7i",
    brand: "Lenovo",
    rating: 88,
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 2199,
    specs: {
      display: {
        size: "16\"",
        resolution: "2560 x 1600",
        technology: "IPS",
        refreshRate: "240Hz"
      },
      performance: {
        processor: "Intel Core i9-14900HX",
        cores: "24-core CPU",
        ram: "32GB",
        storage: ["1TB", "2TB"]
      },
      features: {
        thunderbolt: true,
        fingerprint: true,
        backlit: true,
        wifi6E: true
      },
      battery: {
        capacity: "99.9Wh",
        life: "Up to 8 hours"
      }
    }
  },
  {
    id: 6,
    name: "HP Omen 16",
    brand: "HP",
    rating: 87,
    image: "https://images.pexels.com/photos/705164/computer-laptop-work-place-camera-705164.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 1799,
    specs: {
      display: {
        size: "16.1\"",
        resolution: "2560 x 1440",
        technology: "IPS",
        refreshRate: "165Hz"
      },
      performance: {
        processor: "Intel Core i7-14700HX",
        cores: "20-core CPU",
        ram: "16GB",
        storage: ["512GB", "1TB", "2TB"]
      },
      features: {
        thunderbolt: true,
        fingerprint: false,
        backlit: true,
        wifi6E: true
      },
      battery: {
        capacity: "83Wh",
        life: "Up to 7 hours"
      }
    }
  }
];

// Export both phones and laptops data
export { phones, laptops };