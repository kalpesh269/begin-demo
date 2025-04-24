// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
  // Initialize filter state
  const filterState = {
    priceMin: 100,
    priceMax: 2000,
    brands: ['apple', 'samsung', 'google', 'oneplus', 'xiaomi'],
    features: [],
    sortBy: 'rating'
  };

  // Set up price range filter
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  
  if (priceMin && priceMax) {
    priceMin.addEventListener('input', () => {
      filterState.priceMin = parseInt(priceMin.value);
    });
    
    priceMax.addEventListener('input', () => {
      filterState.priceMax = parseInt(priceMax.value);
    });
  }
  
  // Set up brand filter
  const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
  
  brandCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        filterState.brands.push(checkbox.value);
      } else {
        const index = filterState.brands.indexOf(checkbox.value);
        if (index !== -1) {
          filterState.brands.splice(index, 1);
        }
      }
    });
  });
  
  // Set up features filter
  const featureCheckboxes = document.querySelectorAll('input[name="features"]');
  
  featureCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        filterState.features.push(checkbox.value);
      } else {
        const index = filterState.features.indexOf(checkbox.value);
        if (index !== -1) {
          filterState.features.splice(index, 1);
        }
      }
    });
  });
  
  // Set up sort control
  const sortBySelect = document.getElementById('sort-by');
  
  if (sortBySelect) {
    sortBySelect.addEventListener('change', () => {
      filterState.sortBy = sortBySelect.value;
      applyFilters();
    });
  }
  
  // Apply filters button
  const applyFiltersButton = document.getElementById('apply-filters');
  
  if (applyFiltersButton) {
    applyFiltersButton.addEventListener('click', () => {
      applyFilters();
      const filterPanel = document.getElementById('filter-panel');
      if (filterPanel) {
        filterPanel.classList.remove('active');
      }
    });
  }
  
  // Reset filters button
  const resetFiltersButton = document.getElementById('reset-filters');
  
  if (resetFiltersButton) {
    resetFiltersButton.addEventListener('click', () => {
      // Reset price range
      if (priceMin && priceMax) {
        priceMin.value = priceMin.min;
        priceMax.value = priceMax.max;
        filterState.priceMin = parseInt(priceMin.min);
        filterState.priceMax = parseInt(priceMax.max);
        
        // Update price display
        const priceMinValue = document.getElementById('price-min-value');
        const priceMaxValue = document.getElementById('price-max-value');
        const rangeTrack = document.querySelector('.range-track');
        
        if (priceMinValue && priceMaxValue && rangeTrack) {
          priceMinValue.textContent = `$${priceMin.min}`;
          priceMaxValue.textContent = `$${priceMax.max}`;
          rangeTrack.style.left = '0%';
          rangeTrack.style.width = '100%';
        }
      }
      
      // Reset brand checkboxes
      brandCheckboxes.forEach(checkbox => {
        checkbox.checked = true;
      });
      filterState.brands = Array.from(brandCheckboxes).map(cb => cb.value);
      
      // Reset feature checkboxes
      featureCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
      });
      filterState.features = [];
      
      // Reset sort
      if (sortBySelect) {
        sortBySelect.value = 'rating';
        filterState.sortBy = 'rating';
      }
      
      applyFilters();
    });
  }
  
  // Search functionality
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  
  if (searchInput && searchButton) {
    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      filterBySearch(searchTerm);
    });
    
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim().toLowerCase();
        filterBySearch(searchTerm);
      }
    });
  }
  
  // Tag buttons filtering
  const tagButtons = document.querySelectorAll('.tag-button');
  
  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tag = button.textContent.trim().toLowerCase();
      filterByTag(tag);
    });
  });
  
  // Apply all filters
  function applyFilters() {
    // Get all phones
    let filteredPhones = [...phones];
    
    // Filter by price
    filteredPhones = filteredPhones.filter(phone => {
      return phone.price >= filterState.priceMin && phone.price <= filterState.priceMax;
    });
    
    // Filter by brand
    if (filterState.brands.length > 0) {
      filteredPhones = filteredPhones.filter(phone => {
        return filterState.brands.includes(phone.brand.toLowerCase());
      });
    }
    
    // Filter by features
    if (filterState.features.length > 0) {
      filteredPhones = filteredPhones.filter(phone => {
        return filterState.features.every(feature => {
          switch (feature) {
            case '5g':
              return phone.specs.features.fiveG;
            case 'wireless-charging':
              return phone.specs.features.wirelessCharging;
            case 'water-resistant':
              return phone.specs.features.waterResistant;
            case 'fast-charging':
              return phone.specs.features.fastCharging;
            default:
              return true;
          }
        });
      });
    }
    
    // Sort phones
    switch (filterState.sortBy) {
      case 'rating':
        filteredPhones.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filteredPhones.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredPhones.sort((a, b) => b.price - a.price);
        break;
      case 'release':
        // In a real app, we would sort by release date
        // For this demo, we'll just keep the original order
        break;
    }
    
    renderFilteredPhones(filteredPhones);
  }
  
  // Filter by search term
  function filterBySearch(searchTerm) {
    if (!searchTerm) {
      applyFilters();
      return;
    }
    
    const filteredPhones = phones.filter(phone => {
      return (
        phone.name.toLowerCase().includes(searchTerm) ||
        phone.brand.toLowerCase().includes(searchTerm)
      );
    });
    
    renderFilteredPhones(filteredPhones);
  }
  
  // Filter by tag
  function filterByTag(tag) {
    let filteredPhones = [...phones];
    
    switch (tag) {
      case 'top rated':
        filteredPhones.sort((a, b) => b.rating - a.rating);
        filteredPhones = filteredPhones.slice(0, 4);
        break;
      case '5g':
        filteredPhones = filteredPhones.filter(phone => phone.specs.features.fiveG);
        break;
      case 'best battery':
        filteredPhones.sort((a, b) => parseInt(b.specs.hardware.battery) - parseInt(a.specs.hardware.battery));
        filteredPhones = filteredPhones.slice(0, 4);
        break;
      case 'best camera':
        filteredPhones.sort((a, b) => parseInt(b.specs.camera.main) - parseInt(a.specs.camera.main));
        filteredPhones = filteredPhones.slice(0, 4);
        break;
      case 'gaming':
        filteredPhones = filteredPhones.filter(phone => {
          // For gaming, we consider high refresh rate, good processor, and good RAM
          const hasHighRefreshRate = phone.specs.display.refreshRate !== '60Hz';
          const hasGoodProcessor = 
            phone.specs.hardware.processor.includes('8 Gen') || 
            phone.specs.hardware.processor.includes('A17');
          const hasGoodRam = parseInt(phone.specs.hardware.ram) >= 8;
          
          return hasHighRefreshRate && hasGoodProcessor && hasGoodRam;
        });
        break;
      case 'budget friendly':
        filteredPhones = filteredPhones.filter(phone => phone.price < 700);
        break;
      case 'flagship':
        filteredPhones = filteredPhones.filter(phone => phone.price >= 900);
        break;
    }
    
    renderFilteredPhones(filteredPhones);
  }
  
  // Render filtered phones
  function renderFilteredPhones(phones) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;
    
    if (phones.length === 0) {
      productGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
          </div>
          <h3>No results found</h3>
          <p>We couldn't find any phones matching your criteria. Try adjusting your filters or search terms.</p>
          <button class="primary-button" id="reset-search">Reset Filters</button>
        </div>
      `;
      
      const resetSearchButton = document.getElementById('reset-search');
      if (resetSearchButton) {
        resetSearchButton.addEventListener('click', () => {
          if (resetFiltersButton) {
            resetFiltersButton.click();
          }
          if (searchInput) {
            searchInput.value = '';
          }
        });
      }
      
      return;
    }
    
    productGrid.innerHTML = '';
    
    phones.forEach(phone => {
      const cardElement = createProductCard(phone);
      productGrid.appendChild(cardElement);
    });
    
    // Reattach event listeners for compare buttons
    const compareButtons = document.querySelectorAll('.compare-button');
    compareButtons.forEach(button => {
      button.addEventListener('click', () => {
        // This is handled in main.js, but we need to reattach the event listeners
        // In a real app, we would use event delegation to avoid this issue
      });
    });
  }
});