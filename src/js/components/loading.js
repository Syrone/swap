function removeSkeleton(element) {
  setTimeout(() => {
    element.removeAttribute('data-loading-sceleton');
  }, 300);
}

function observeSkeletons() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-loading-sceleton') {
        removeSkeleton(mutation.target);
      } else if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.hasAttribute('data-loading-sceleton')) {
              removeSkeleton(node);
            }
            node.querySelectorAll('[data-loading-sceleton]').forEach(removeSkeleton);
          }
        });
      }
    });
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['data-loading-sceleton'],
    childList: true,
    subtree: true
  });
}

function removeInitialSkeletons() {
  const skeletons = document.querySelectorAll('[data-loading-sceleton]');
  
  skeletons.forEach(removeSkeleton);
}

window.onload = function() {
  removeInitialSkeletons();
  observeSkeletons();
}