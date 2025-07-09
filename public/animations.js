// 動畫系統 JavaScript - 處理滾動觸發和互動效果

// 滾動觸發動畫
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 觀察所有需要滾動觸發的元素
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
  });
}

// 頁面載入動畫
function initPageLoader() {
  const loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
          loader.remove();
        }, 300);
      }, 500);
    });
  }
}

// 圖片載入動畫
function initImageAnimations() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
      
      img.addEventListener('error', () => {
        img.classList.add('error');
      });
    }
  });
}

// 導航活動狀態動畫
function initNavAnimation() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-item');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath.startsWith(href) && href !== '/')) {
      link.classList.add('active');
    }
  });
}

// 平滑滾動
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 鍵盤導航支援
function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // ESC 鍵關閉模態框或返回
    if (e.key === 'Escape') {
      const modals = document.querySelectorAll('.modal.open');
      modals.forEach(modal => {
        modal.classList.remove('open');
      });
    }
    
    // 方向鍵導航（如果需要）
    if (e.key === 'ArrowLeft' && e.ctrlKey) {
      window.history.back();
    }
    if (e.key === 'ArrowRight' && e.ctrlKey) {
      window.history.forward();
    }
  });
}

// 視差滾動效果
function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach(element => {
        element.style.transform = `translateY(${rate}px)`;
      });
    });
  }
}

// 打字機效果
function initTypewriterEffect() {
  const typewriterElements = document.querySelectorAll('.typewriter');
  
  typewriterElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.style.borderRight = '2px solid var(--theme-primary)';
    
    let i = 0;
    const timer = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      
      if (i >= text.length) {
        clearInterval(timer);
        setTimeout(() => {
          element.style.borderRight = 'none';
        }, 1000);
      }
    }, 100);
  });
}

// 數字計數動畫
function initCounterAnimation() {
  const counters = document.querySelectorAll('.counter');
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
        const increment = target / (duration / 16);
        
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          counter.textContent = Math.floor(current);
          
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          }
        }, 16);
        
        observer.unobserve(counter);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// 主題切換動畫增強
function enhanceThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.add('theme-transitioning');
      
      setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
      }, 300);
    });
  }
}

// 程式碼複製按鈕功能
function initCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre');
  
  codeBlocks.forEach(codeBlock => {
    // 創建複製按鈕容器
    const copyContainer = document.createElement('div');
    copyContainer.className = 'code-copy-container';
    
    // 創建複製按鈕
    const copyButton = document.createElement('button');
    copyButton.className = 'code-copy-btn';
    copyButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span class="copy-text">複製</span>
    `;
    copyButton.setAttribute('aria-label', '複製程式碼');
    
    // 添加複製功能
    copyButton.addEventListener('click', async () => {
      const code = codeBlock.querySelector('code');
      const textToCopy = code ? code.textContent : codeBlock.textContent;
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        
        // 顯示成功狀態
        copyButton.classList.add('copied');
        const copyText = copyButton.querySelector('.copy-text');
        copyText.textContent = '已複製';
        
        // 2秒後恢復原狀
        setTimeout(() => {
          copyButton.classList.remove('copied');
          copyText.textContent = '複製';
        }, 2000);
        
      } catch (err) {
        console.error('複製失敗:', err);
        
        // 顯示錯誤狀態
        copyButton.classList.add('error');
        const copyText = copyButton.querySelector('.copy-text');
        copyText.textContent = '複製失敗';
        
        setTimeout(() => {
          copyButton.classList.remove('error');
          copyText.textContent = '複製';
        }, 2000);
      }
    });
    
    copyContainer.appendChild(copyButton);
    
    // 將按鈕容器添加到程式碼區塊
    codeBlock.style.position = 'relative';
    codeBlock.appendChild(copyContainer);
  });
}

// 錯誤處理動畫
function initErrorAnimations() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const requiredFields = form.querySelectorAll('[required]');
      let hasError = false;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error-shake');
          hasError = true;
          
          setTimeout(() => {
            field.classList.remove('error-shake');
          }, 500);
        }
      });
      
      if (hasError) {
        e.preventDefault();
      }
    });
  });
}

// 初始化所有動畫
function initAnimations() {
  // 檢查是否支援動畫
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }
  
  // 等待 DOM 載入完成
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initAllAnimations();
    });
  } else {
    initAllAnimations();
  }
}

function initAllAnimations() {
  initScrollReveal();
  initPageLoader();
  initImageAnimations();
  initNavAnimation();
  initSmoothScroll();
  initKeyboardNavigation();
  initParallaxEffect();
  initTypewriterEffect();
  initCounterAnimation();
  enhanceThemeToggle();
  initErrorAnimations();
  initCodeCopyButtons();
  
  console.log('🎬 動畫系統已初始化');
}

// 導出函數供其他模組使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initAnimations,
    initScrollReveal,
    initImageAnimations,
    initNavAnimation
  };
}

// 自動初始化
initAnimations();