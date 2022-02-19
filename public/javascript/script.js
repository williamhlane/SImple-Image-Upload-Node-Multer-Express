//This is the event listener method and it must be after the html input element but
//it is called using the id and does not need to to be called from the element 
document.querySelector('#fileUpload').addEventListener('change', event => {
    const files = event.target.files
    const formData = new FormData()
    formData.append('image', files[0])
  
    fetch('/uploadImage', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  })


  ///onclick method this is a function that is call by the input element
  ///with on the onchange method the function must be above the element 
  const imgup = (event) => {
    const files = event.target.files
    const formData = new FormData()
    formData.append('image', files[0])
  
    fetch('/uploadImage', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
  }