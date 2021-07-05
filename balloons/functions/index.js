const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const {email, password} = require('./config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password,
    }
});

transporter.use('compile', htmlToText());

const sendOrderEmail = data => {
    const options = {
        from: `Сплошное Надувательство <${email}>`,
        to: data.email,
        subject: 'Ваш заказ на "Сплошное Надувательство"',
        html: `
            <div>
                <h2>Здравствуйте, ${data.customerName}</h2>
                <h3>Ваш заказ:</h3>
                <ul>
                    ${data.order.map(({name, count, price}) => (
                        `<li>${name} - ${count}шт., цена ${price * count} руб.</li>`)
                    ).join('')}
                </ul>
                <p>Итого: ${data.order.reduce((sum, item) => sum + (item.price * item.count), 0)} руб.</p>
                <small>Ожидайте курьера...</small>
            </div>
        `,
    };

    transporter.sendMail(options);
};

exports.sendUserEmail = functions.database.ref('orders/{pushID}')
    .onCreate(order => sendOrderEmail(order.val()));

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
