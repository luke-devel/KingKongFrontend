# [KingKongBackups.com](https://kingkongbackups.com)
# [View Backend Here](https://github.com/luke-devel/KingKongBackend)
![King Kong Backups Homepage](https://kingkongbackups.com/img/KingKongBackups.png)
## Technology Used:
* [**AWS Lightsail CentOS VPS**](https://lightsail.aws.amazon.com/) - Backend Linux VPS Hosted in Germany
* [**Node.js**](https://nodejs.org/en/) - Backend Runtime
* [**Express**](https://github.com/expressjs/express) - Backend API Server
* [**Next.js Deployed on Vercel (Frontend)**](https://github.com/vercel/next.js) - (uses [**Babel**](https://babeljs.io/) and [**Webpack**](https://webpack.js.org/))
* [**TypeScript**](https://github.com/microsoft/TypeScript) - Frontend is 100% TypeScript
* [**React**](https://github.com/facebook/react) - Frontend Framework
* [**Axios**](https://github.com/axios/axios) - HTTP Client
* [**bcrypt**](https://github.com/kelektiv/node.bcrypt.js) - Hashed Password Encryption
* [**js-cookie**](https://github.com/js-cookie/js-cookie) - Sets client-side cookies
* [**jsonwebtoken**](https://github.com/auth0/node-jsonwebtoken) - Secure encoded token which are placed in cookies for authentication
* [**jwt-decode**](https://github.com/auth0/jwt-decode) - Decoded JSON Web Tokens and reveals data
* [**dotenv**](https://github.com/motdotla/dotenv) - Used to access .env varibales on server side

## About:
* This was a job I took from Fiverr. The frontend HTML and CSS for this site was delivered to me when I took the job, I used Node.js and Next.js as a backend then converted the static HTML and CSS into JSX code using React. The HTML was not mobile responsive so I spent much time making the site 100% mobile ready. The site uses an Express Server on the backend and uses Bcrypt Salt and Hashed passwords stored alongside user information in a MySQL Database which I access using Sequelize within the backend express server. 
* The frontend is hosted on Vercel and runs using serverless functions on the frontend. The frontend uses Next.js, which implements AWS Serverless Lamda Functions which then talk to the physical AWS Lightsail VPS on the backend with the MySQL Database.
* We used Stripe for payments, so I set up and implemented the Stripe API in Node.js The users give us their FTP or SFTP server information, and using Node I connect to their FTP or SFTP server and download the entirety of their root directory onto the Linux CentOS Lightsail VPS server. There can also be an automated Cron Job using Shell Scripts on ato automate entire website backups on a schedule. Their FTP files are then stored on an AWS S3 Database Bucket with PGP Encryption. 
