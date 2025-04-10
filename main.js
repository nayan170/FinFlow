document.addEventListener('DOMContentLoaded', () => {
    // Updated Tab functionality for services
    const initTabs = () => {
      const tabs = document.querySelectorAll('.tab');
      const tabContents = document.querySelectorAll('.tab-content');
  
      if (tabs.length === 0 || tabContents.length === 0) return;
  
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get('tab');
      const hash = window.location.hash;
  
      let initialTabId = null;
  
      if (tabParam) {
        switch (tabParam) {
          case 'home':
            initialTabId = 'home-loan';
            break;
          case 'gold':
            initialTabId = 'gold-loan';
            break;
          case 'property':
            initialTabId = 'property-loan';
            break;
          case 'equity':
            initialTabId = 'equity-loan';
            break;
        }
      }
  
      const activateTab = (tabId) => {
        tabs.forEach(tab => {
          const isActive = tab.getAttribute('data-tab') === tabId;
          tab.classList.toggle('active', isActive);
        });
  
        tabContents.forEach(content => {
          content.style.display = content.id === tabId ? 'block' : 'none';
        });
  
        if (hash) {
          setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }, 200);
        }
      };
  
      if (initialTabId) {
        activateTab(initialTabId);
      } else {
        const firstTab = tabs[0].getAttribute('data-tab');
        activateTab(firstTab);
      }
  
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const selectedTabId = tab.getAttribute('data-tab');
          activateTab(selectedTabId);
        });
      });
    };
  
    // Loan Calculator
    const initLoanCalculator = () => {
      const loanAmountSlider = document.getElementById('loan-amount');
      const loanAmountValue = document.getElementById('loan-amount-value');
      const interestRateInput = document.getElementById('interest-rate');
      const loanTenureSlider = document.getElementById('loan-tenure');
      const loanTenureValue = document.getElementById('loan-tenure-value');
      const monthlyEMI = document.getElementById('monthly-emi');
      const totalInterest = document.getElementById('total-interest');
      const totalPayment = document.getElementById('total-payment');
  
      if (!loanAmountSlider || !interestRateInput || !loanTenureSlider) return;
  
      const calculateEMI = () => {
        const principal = parseFloat(loanAmountSlider.value);
        const interestRate = parseFloat(interestRateInput.value) / 100 / 12;
        const tenure = parseFloat(loanTenureSlider.value) * 12;
  
        let emi = 0;
        if (interestRate === 0) {
          emi = principal / tenure;
        } else {
          emi = principal * interestRate * Math.pow(1 + interestRate, tenure) / (Math.pow(1 + interestRate, tenure) - 1);
        }
  
        if (monthlyEMI) monthlyEMI.textContent = formatCurrency(emi);
        if (totalInterest) totalInterest.textContent = formatCurrency((emi * tenure) - principal);
        if (totalPayment) totalPayment.textContent = formatCurrency(emi * tenure);
      };
  
      const formatCurrency = (amount) => {
        return '₹' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      };
  
      if (loanAmountSlider && loanAmountValue) {
        loanAmountSlider.addEventListener('input', () => {
          loanAmountValue.textContent = formatCurrency(parseFloat(loanAmountSlider.value));
          calculateEMI();
        });
      }
  
      if (interestRateInput) {
        interestRateInput.addEventListener('input', calculateEMI);
      }
  
      if (loanTenureSlider && loanTenureValue) {
        loanTenureSlider.addEventListener('input', () => {
          loanTenureValue.textContent = loanTenureSlider.value + ' years';
          calculateEMI();
        });
      }
  
      calculateEMI();
    };
  
    const initEligibilityForm = () => {
      const eligibilityForm = document.getElementById('eligibility-form');
      const checkEligibilityBtn = document.getElementById('check-eligibility-btn');
  
      if (!eligibilityForm || !checkEligibilityBtn) return;
  
      checkEligibilityBtn.addEventListener('click', (e) => {
        e.preventDefault();
  
        const income = document.getElementById('monthly-income').value;
        const age = document.getElementById('age').value;
        const employmentType = document.getElementById('employment-type').value;
        const existingEMI = document.getElementById('existing-emi').value;
        const creditScore = document.getElementById('credit-score').value;
  
        if (!income || !age || !employmentType || !creditScore) {
          alert('Please fill all required fields');
          return;
        }
  
        alert('Thank you! We will check your eligibility and contact you shortly.');
        eligibilityForm.reset();
      });
    };
  
    const initContactForm = () => {
      const contactForm = document.getElementById('contact-form');
      const sendMessageBtn = document.getElementById('send-message-btn');
  
      if (!contactForm || !sendMessageBtn) return;
  
      sendMessageBtn.addEventListener('click', (e) => {
        e.preventDefault();
  
        const name = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
  
        if (!name || !email || !message) {
          alert('Please fill all required fields');
          return;
        }
  
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
      });
    };
  
    const initMobileMenu = () => {
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
  
      if (!menuToggle || !mobileMenu) return;
  
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
      });
    };
  
    initTabs();
    initLoanCalculator();
    initEligibilityForm();
    initContactForm();
    initMobileMenu();
  });
  