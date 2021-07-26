// module.exports = (brandList) => `<!DOCTYPE html>
//   <html>  
//   <head>
//   <title>A.PDF TSTGRNDS</title>
//   <link rel="stylesheet" href="/style.css">
//   </head>
//   <body>
//     <h1>ARCHIVE.pdf Testing Grounds</h1>
//     <div>
//     ${brandList.map(brandInfo => {
//       `<div>
//       <h2>Brand:<h2><p>${brandInfo.brand}</p>
//       <a href="/${brandInfo.id}">Learn More</a>
//       </div>`
//     })}
//     </div>
//   </body>
//   </html>
// `;

module.exports = (brandList) => `<!DOCTYPE html>
  <html>  
  <head>
  <title>A.PDF TSTGRNDS</title>
  <link rel="stylesheet" href="/style.css">
  </head>
  <body>
    <h1>ARCHIVE.pdf Testing Grounds</h1>
    <div>
    ${brandList.map(brandInfo => 
      `<div>
      <h2>Brand:<h2><p>${brandInfo.brand}</p>
      <a href="/${brandInfo.id}">Learn More</a>
      </div>`
    )}
    </div>
  </body>
  </html>
`;