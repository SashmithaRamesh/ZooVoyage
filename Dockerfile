FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install axios
RUN npm install react-router-dom
RUn npm install @chakra-ui/react
RUn npm install @emotion/react
RUn npm install @emotion/styled
RUn npm install @mui/icons-material
RUn npm install @mui/material
RUn npm install @react-google-maps/api
RUn npm install @testing-library/jest-dom
RUn npm install @testing-library/react
RUn npm install @testing-library/user-event
RUn npm install bootstrap
RUn npm install emailjs-com
RUn npm install framer-motion
RUn npm install googleapis
RUn npm install markdown-to-jsx
RUn npm install nodemailer
RUn npm install qrcode.react
RUn npm install react
RUn npm install react-bootstrap
RUn npm install react-dom
RUn npm install react-icons
RUn npm install react-places-autocomplete
RUn npm install react-player
RUn npm install react-qr-reader
RUn npm install react-qr-scanner
RUn npm install react-router-dom
RUn npm install react-scripts
RUn npm install web-vitals

COPY . .

EXPOSE 3000

CMD ["npm" , "start"]