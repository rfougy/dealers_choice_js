module.exports = (brandList) => {`<!DOCTYPE html>
  <html lang="en">  
  <head>
  <title>Home Page</title>
  </head>
  <body>
    <h1>ARCHIVE.pdf Testing Grounds</h1>
    ${brandList.map(brandInfo => {
      `<div>
      <h2>Brand:<h2><p>${brandInfo.brand}</p>
      <a href="/${brandInfo.id}">Learn More</a>
      </div>`
    })}
  </body>
  </html>
`};