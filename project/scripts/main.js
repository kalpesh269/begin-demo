import { phones, laptops } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize the application
  setupCategoryNavigation();
  renderProductCards();
  setupEventListeners();
});

// Set up category navigation
function setupCategoryNavigation() {
  const categoryLinks = document.querySelectorAll('.main-nav a');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state
      categoryLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Update hero section
      const category = link.textContent;
      const heroTitle = document.querySelector('.hero h2');
      if (heroTitle) {
        heroTitle.textContent = `${category} Comparison`;
      }
      
      // Render appropriate products
      if (category.toLowerCase() === 'smartphones') {
        renderProductCards(phones);
      } else if (category.toLowerCase() === 'laptops') {
        renderProductCards(laptops);
      }
    });
  });
}

// Render product cards in the grid
function renderProductCards(products = phones) {
  const productGrid = document.getElementById('product-grid');
  if (!productGrid) return;

  productGrid.innerHTML = '';

  products.forEach(product => {
    const cardElement = createProductCard(product);
    productGrid.appendChild(cardElement);
  });
}

// Create a product card element
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id;

  // Get specifications based on product type
  const specs = getProductSpecs(product);

  card.innerHTML = `
    <div class="rating-badge">${product.rating}</div>
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
    <div class="product-details">
      <h3 class="product-title">${product.name}</h3>
      <div class="product-specs">
        ${specs.map(spec => `
          <div class="spec-item">
            <span class="spec-label">${spec.label}</span>
            <span class="spec-value">
              ${spec.icon}
              ${spec.value}
            </span>
          </div>
        `).join('')}
      </div>
      <div class="product-action">
        <button class="compare-button" data-id="${product.id}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M21 13v5h-5"></path><path d="M3 13v5h5"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path></svg>
          Compare
        </button>
      </div>
    </div>
  `;

  return card;
}

// Get product specifications based on type
function getProductSpecs(product) {
  if ('specs' in product && 'hardware' in product.specs) {
    // Phone specs
    return [
      {
        label: 'Display',
        value: product.specs.display.size,
        icon: '<svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>'
      },
      {
        label: 'RAM',
        value: product.specs.hardware.ram,
        icon: '<svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="3" x2="21" y1="15" y2="15"></line><line x1="9" x2="9" y1="3" y2="21"></line><line x1="15" x2="15" y1="3" y2="21"></line></svg>'
      },
      {
        label: 'PPI',
        value: `${calculatePixelDensity(product.specs.display.resolution, product.specs.display.size)} ppi`,
        icon: '<svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v3"></path><path d="M18.5 5.5 16 8"></path><path d="M21 12h-3"></path><path d="M18.5 18.5 16 16"></path><path d="M12 21v-3"></path><path d="M5.5 18.5 8 16"></path><path d="M3 12h3"></path><path d="M5.5 5.5 8 8"></path></svg>'
      },
      {
        label: 'Battery',
        value: product.specs.hardware.battery,
        icon: '<svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line></svg>'
      }
    ];
  } else {
    // Laptop specs
    return [
      {
        label: 'Display',
        value: product.specs.display.size,
        icon: '<svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>'
      },
      {
        label: 'RAM',
        value: product.specs.performance.ram,
        icon: '<svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="3" x2="21" y1="15" y2="15"></line><line x1="9" x2="9" y1="3" y2="21"></line><line x1="15" x2="15" y1="3" y2="21"></line></svg>'
      },
      {
        label: 'Refresh Rate',
        value: product.specs.display.refreshRate,
        icon: '<svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>'
      },
      {
        label: 'Battery',
        value: product.specs.battery.capacity,
        icon: '<svg class="spec-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect><line x1="22" x2="22" y1="11" y2="13"></line></svg>'
      }
    ];
  }
}

// Calculate pixel density (PPI) from resolution and display size
function calculatePixelDensity(resolution, displaySize) {
  if (!resolution || !displaySize) return 'N/A';
  
  const [width, height] = resolution.split(' x ').map(Number);
  const size = parseFloat(displaySize.replace('"', ''));
  
  if (!width || !height || !size) return 'N/A';
  
  const diagonalPixels = Math.sqrt(width * width + height * height);
  const ppi = Math.round(diagonalPixels / size);
  
  return ppi;
}

// Set up all event listeners
function setupEventListeners() {
  // Toggle menu for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }
  
  // Filter panel toggle
  const filterButton = document.getElementById('filter-button');
  const filterPanel = document.getElementById('filter-panel');
  
  if (filterButton && filterPanel) {
    filterButton.addEventListener('click', () => {
      filterPanel.classList.toggle('active');
      
      // Close the panel when clicking outside
      const clickOutsideHandler = (e) => {
        if (!filterPanel.contains(e.target) && e.target !== filterButton) {
          filterPanel.classList.remove('active');
          document.removeEventListener('click', clickOutsideHandler);
        }
      };
      
      setTimeout(() => {
        document.addEventListener('click', clickOutsideHandler);
      }, 0);
    });
  }
  
  // Range slider functionality
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  const priceMinValue = document.getElementById('price-min-value');
  const priceMaxValue = document.getElementById('price-max-value');
  const rangeTrack = document.querySelector('.range-track');
  
  if (priceMin && priceMax && priceMinValue && priceMaxValue && rangeTrack) {
    const updateRangeValues = () => {
      const min = parseInt(priceMin.value);
      const max = parseInt(priceMax.value);
      
      if (min > max) {
        priceMin.value = max;
        return;
      }
      
      priceMinValue.textContent = `$${min}`;
      priceMaxValue.textContent = `$${max}`;
      
      const minPercent = ((min - priceMin.min) / (priceMin.max - priceMin.min)) * 100;
      const maxPercent = ((max - priceMax.min) / (priceMax.max - priceMax.min)) * 100;
      
      rangeTrack.style.left = `${minPercent}%`;
      rangeTrack.style.width = `${maxPercent - minPercent}%`;
    };
    
    priceMin.addEventListener('input', updateRangeValues);
    priceMax.addEventListener('input', updateRangeValues);
    
    // Initialize range values
    updateRangeValues();
  }
  
  // Tag buttons
  const tagButtons = document.querySelectorAll('.tag-button');
  
  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      tagButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      // In a real app, this would filter the products
    });
  });
  
  // Compare button functionality
  const compareButtons = document.querySelectorAll('.compare-button');
  const comparisonBar = document.getElementById('comparison-bar');
  const selectedItems = document.getElementById('selected-items');
  const compareCount = document.getElementById('compare-count');
  const viewComparisonButton = document.getElementById('view-comparison');
  const clearComparisonButton = document.getElementById('clear-comparison');
  
  if (compareButtons.length && comparisonBar && selectedItems && compareCount && viewComparisonButton) {
    const selectedProducts = [];
    
    compareButtons.forEach(button => {
      button.addEventListener('click', () => {
        const id = parseInt(button.dataset.id);
        const isSelected = selectedProducts.includes(id);
        
        if (isSelected) {
          // Remove from comparison
          const index = selectedProducts.indexOf(id);
          selectedProducts.splice(index, 1);
          button.classList.remove('added');
          button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M21 13v5h-5"></path><path d="M3 13v5h5"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path></svg>
            Compare
          `;
        } else {
          // Add to comparison
          if (selectedProducts.length < 4) {
            selectedProducts.push(id);
            button.classList.add('added');
            button.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"></path></svg>
              Added
            `;
          } else {
            alert('You can compare up to 4 devices at a time.');
          }
        }
        
        updateComparisonBar();
      });
    });
    
    // Update comparison bar with selected products
    function updateComparisonBar() {
      if (selectedProducts.length > 0) {
        comparisonBar.classList.add('active');
        
        selectedItems.innerHTML = '';
        selectedProducts.forEach(id => {
          const product = phones.find(p => p.id === id) || laptops.find(l => l.id === id);
          if (product) {
            const itemElement = document.createElement('div');
            itemElement.className = 'selected-item';
            itemElement.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <div class="selected-item-info">
                <div class="selected-item-name">${product.name}</div>
              </div>
              <button class="selected-item-remove" data-id="${product.id}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
              </button>
            `;
            selectedItems.appendChild(itemElement);
          }
        });
        
        compareCount.textContent = selectedProducts.length;
        viewComparisonButton.disabled = selectedProducts.length < 2;
        
        // Add event listener to remove buttons
        const removeButtons = document.querySelectorAll('.selected-item-remove');
        removeButtons.forEach(button => {
          button.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(button.dataset.id);
            const index = selectedProducts.indexOf(id);
            if (index !== -1) {
              selectedProducts.splice(index, 1);
              
              // Update compare button state
              const compareButton = document.querySelector(`.compare-button[data-id="${id}"]`);
              if (compareButton) {
                compareButton.classList.remove('added');
                compareButton.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M21 13v5h-5"></path><path d="M3 13v5h5"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path></svg>
                  Compare
                `;
              }
              
              updateComparisonBar();
            }
          });
        });
      } else {
        comparisonBar.classList.remove('active');
      }
    }
    
    // Clear comparison
    if (clearComparisonButton) {
      clearComparisonButton.addEventListener('click', () => {
        selectedProducts.length = 0;
        
        // Reset all compare buttons
        compareButtons.forEach(button => {
          button.classList.remove('added');
          button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M21 13v5h-5"></path><path d="M3 13v5h5"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path></svg>
            Compare
          `;
        });
        
        updateComparisonBar();
      });
    }
    
    // View comparison
    if (viewComparisonButton) {
      const comparisonModal = document.getElementById('comparison-modal');
      const comparisonContent = document.getElementById('comparison-content');
      const closeModal = document.getElementById('close-modal');
      
      viewComparisonButton.addEventListener('click', () => {
        if (selectedProducts.length < 2) return;
        
        comparisonModal.classList.add('active');
        renderComparisonContent();
      });
      
      if (closeModal) {
        closeModal.addEventListener('click', () => {
          comparisonModal.classList.remove('active');
        });
      }
      
      // Close modal when clicking outside content
      comparisonModal.addEventListener('click', (e) => {
        if (e.target === comparisonModal) {
          comparisonModal.classList.remove('active');
        }
      });
      
      function renderComparisonContent() {
        if (!comparisonContent) return;
        
        const selectedProductsData = selectedProducts
          .map(id => phones.find(p => p.id === id) || laptops.find(l => l.id === id))
          .filter(Boolean);
        
        let tableHTML = `
          <table class="comparison-table">
            <tr>
              <th></th>
        `;
        
        // Add headers for each product
        selectedProductsData.forEach(product => {
          tableHTML += `
            <td class="comparison-product">
              <div class="comparison-product-image">
                <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="comparison-product-title">${product.name}</div>
              <div class="comparison-product-rating">${product.rating}</div>
              <div>$${product.price}</div>
            </td>
          `;
        });
        
        tableHTML += `</tr>`;
        
        // Add specifications based on product type
        if ('hardware' in selectedProductsData[0].specs) {
          // Phone comparison
          tableHTML += generatePhoneComparisonRows(selectedProductsData);
        } else {
          // Laptop comparison
          tableHTML += generateLaptopComparisonRows(selectedProductsData);
        }
        
        tableHTML += `</table>`;
        
        comparisonContent.innerHTML = tableHTML;
      }
      
      function generatePhoneComparisonRows(products) {
        let rows = '';
        
        // General specs
        rows += `
          <tr class="comparison-row-title">
            <th>General</th>
            ${products.map(() => `<td></td>`).join('')}
          </tr>
          <tr>
            <th>Brand</th>
            ${products.map(product => `<td>${product.brand}</td>`).join('')}
          </tr>
        `;
        
        // Display specs
        rows += `
          <tr class="comparison-row-title">
            <th>Display</th>
            ${products.map(() => `<td></td>`).join('')}
          </tr>
          <tr>
            <th>Size</th>
            ${products.map(product => `<td>${product.specs.display.size}</td>`).join('')}
          </tr>
          <tr>
            <th>Resolution</th>
            ${products.map(product => `<td>${product.specs.display.resolution}</td>`).join('')}
          </tr>
          <tr>
            <th>Technology</th>
            ${products.map(product => `<td>${product.specs.display.technology}</td>`).join('')}
          </tr>
          <tr>
            <th>Refresh Rate</th>
            ${products.map(product => `<td>${product.specs.display.refreshRate}</td>`).join('')}
          </tr>
        `;
        
        // Camera specs
        rows += `
          <tr class="comparison-row-title">
            <th>Camera</th>
            ${products.map(() => `<td></td>`).join('')}
          </tr>
          <tr>
            <th>Main</th>
            ${products.map(product => {
              const values = products.map(p => parseInt(p.specs.camera.main));
              const max = Math.max(...values);
              const isHighest = parseInt(product.specs.camera.main) === max;
              return `<td ${isHighest ? 'class="highlight"' : ''}>${product.specs.camera.main}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Ultra Wide</th>
            ${products.map(product => {
              if (!product.specs.camera.ultraWide) return '<td>-</td>';
              const values = products
                .map(p => p.specs.camera.ultraWide ? parseInt(p.specs.camera.ultraWide) : 0);
              const max = Math.max(...values);
              const isHighest = parseInt(product.specs.camera.ultraWide) === max;
              return `<td ${isHighest ? 'class="highlight"' : ''}>${product.specs.camera.ultraWide}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Telephoto</th>
            ${products.map(product => {
              if (!product.specs.camera.telephoto) return '<td>-</td>';
              return `<td>${product.specs.camera.telephoto}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Front</th>
            ${products.map(product => `<td>${product.specs.camera.front}</td>`).join('')}
          </tr>
        `;
        
        // Hardware specs
        rows += `
          <tr class="comparison-row-title">
            <th>Hardware</th>
            ${products.map(() => `<td></td>`).join('')}
          </tr>
          <tr>
            <th>Processor</th>
            ${products.map(product => `<td>${product.specs.hardware.processor}</td>`).join('')}
          </tr>
          <tr>
            <th>RAM</th>
            ${products.map(product => {
              const values = products.map(p => parseInt(p.specs.hardware.ram));
              const max = Math.max(...values);
              const isHighest = parseInt(product.specs.hardware.ram) === max;
              return `<td ${isHighest ? 'class="highlight"' : ''}>${product.specs.hardware.ram}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Storage</th>
            ${products.map(product => {
              const storage = product.specs.hardware.storage.join(', ');
              return `<td>${storage}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Battery</th>
            ${products.map(product => {
              const values = products.map(p => parseInt(p.specs.hardware.battery));
              const max = Math.max(...values);
              const isHighest = parseInt(product.specs.hardware.battery) === max;
              return `<td ${isHighest ? 'class="highlight"' : ''}>${product.specs.hardware.battery}</td>`;
            }).join('')}
          </tr>
        `;
        
        // Features
        rows += `
          <tr class="comparison-row-title">
            <th>Features</th>
            ${products.map(() => `<td></td>`).join('')}
          </tr>
          <tr>
            <th>5G</th>
            ${products.map(product => {
              return `<td>${product.specs.features.fiveG ? '✓' : '✗'}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Water Resistant</th>
            ${products.map(product => {
              return `<td>${product.specs.features.waterResistant ? '✓' : '✗'}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Fast Charging</th>
            ${products.map(product => {
              return `<td>${product.specs.features.fastCharging ? '✓' : '✗'}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Wireless Charging</th>
            ${products.map(product => {
              return `<td>${product.specs.features.wirelessCharging ? '✓' : '✗'}</td>`;
            }).join('')}
          </tr>
        `;
        
        return rows;
      }
      
      function generateLaptopComparisonRows(products) {
        let rows = '';
        
        // General specs
        rows += `
          <tr class="comparison-row-title">
            <th>General</th>
            ${products.map(() => `<td></td>`).join('')}
          </tr>
          <tr>
            <th>Brand</th>
            ${products.map(product => `<td>${product.brand}</td>`).join('')}
          </tr>
        `;
        
        // Display specs
        rows += `
          <tr class="comparison-row-title">
            <th>Display</th>
            ${products.map(() => `<td></td>`).join('')}
          </tr>
          <tr>
            <th>Size</th>
            ${products.map(product => `<td>${product.specs.display.size}</td>`).join('')}
          </tr>
          <tr>
            <th>Resolution</th>
            ${products.map(product => `<td>${product.specs.display.resolution}</td>`).join('')}
          </tr>
          <tr>
            <th>Technology</th>
            ${products.map(product => `<td>${product.specs.display.technology}</td>`).join('')}
          </tr>
          <tr>
            <th>Refresh Rate</th>
            ${products.map(product => `<td>${product.specs.display.refreshRate}</td>`).join('')}
          </tr>
        `;
        
        // Performance specs
        rows += `
          <tr class="comparison-row-title">
            <th>Performance</th>
            ${products.map(() => `<td></td>`).join('')}
          </tr>
          <tr>
            <th>Processor</th>
            ${products.map(product => `<td>${product.specs.performance.processor}</td>`).join('')}
          </tr>
          <tr>
            <th>Graphics</th>
            ${products.map(product => `<td>${product.specs.performance.graphics}</td>`).join('')}
          </tr>
          <tr>
            <th>RAM</th>
            ${products.map(product => {
              const values = products.map(p => parseInt(p.specs.performance.ram));
              const max = Math.max(...values);
              const isHighest = parseInt(product.specs.performance.ram) === max;
              return `<td ${isHighest ? 'class="highlight"' : ''}>${product.specs.performance.ram}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Storage</th>
            ${products.map(product => {
              const storage = product.specs.performance.storage.join(', ');
              return `<td>${storage}</td>`;
            }).join('')}
          </tr>
        `;
        
        // Battery and features
        rows += `
          <tr class="comparison-row-title">
            <th>Battery & Features</th>
            ${products.map(() => `<td></td>`).join('')}
          </tr>
          <tr>
            <th>Battery Capacity</th>
            ${products.map(product => {
              const values = products.map(p => parseInt(p.specs.battery.capacity));
              const max = Math.max(...values);
              const isHighest = parseInt(product.specs.battery.capacity) === max;
              return `<td ${isHighest ? 'class="highlight"' : ''}>${product.specs.battery.capacity}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Battery Life</th>
            ${products.map(product => `<td>${product.specs.battery.life}</td>`).join('')}
          </tr>
          <tr>
            <th>Fingerprint Reader</th>
            ${products.map(product => {
              return `<td>${product.specs.features.fingerprintReader ? '✓' : '✗'}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Backlit Keyboard</th>
            ${products.map(product => {
              return `<td>${product.specs.features.backlitKeyboard ? '✓' : '✗'}</td>`;
            }).join('')}
          </tr>
          <tr>
            <th>Thunderbolt</th>
            ${products.map(product => {
              return `<td>${product.specs.features.thunderbolt ? '✓' : '✗'}</td>`;
            }).join('')}
          </tr>
        `;
        
        return rows;
      }
    }
  }
}