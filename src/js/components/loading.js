function removeSkeleton() {
  const skeletons = document.querySelectorAll('[data-loading-sceleton]')
  
  skeletons.forEach(skeleton => {
    skeleton.removeAttribute('data-loading-sceleton')
  })
}

window.onload = function() {
  removeSkeleton()
}