module.exports = (brand) => {`<!DOCTYPE html>
  <html lang="en">  
  <head>
  <title>Home Page</title>
  </head>
  <body>
    <h1>ARCHIVE.pdf Testing Grounds</h1>
    ${brand.map(brandInfo => {
      `<div>
      <h2>Brand:<h2><p>${brandInfo.brand}</p>
      <h2>Info:</h2><p>${brandInfo.designer}</p>
      <h2>Description:</h2><p>${brandInfo.description}</p>
      <a href= "${brandInfo.url}">Go To Main Page<a/>
      </div>`
    })}
  </body>
  </html>
`};