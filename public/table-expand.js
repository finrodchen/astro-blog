// 表格展開功能
(function() {
  'use strict';

  // 初始化表格展開功能
  function initTableExpand() {
    const tables = document.querySelectorAll('table');
    
    tables.forEach(table => {
      const cells = table.querySelectorAll('td');
      
      cells.forEach(cell => {
        const text = cell.textContent.trim();
        
        // 如果文字長度超過 30 個字符或包含換行，添加可展開功能
        if (text.length > 15 || text.includes('\n')) {
          cell.classList.add('expandable');
          
          // 添加點擊事件
          cell.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('expanded');
            
            // 如果展開，暫時移除其他展開的單元格
            if (this.classList.contains('expanded')) {
              cells.forEach(otherCell => {
                if (otherCell !== this && otherCell.classList.contains('expanded')) {
                  otherCell.classList.remove('expanded');
                }
              });
            }
          });
        }
      });
    });
  }

  // DOM 載入完成後初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTableExpand);
  } else {
    initTableExpand();
  }

  // 支援動態載入的內容
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // Element node
            const tables = node.querySelectorAll ? node.querySelectorAll('table') : [];
            if (tables.length > 0) {
              initTableExpand();
            }
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();