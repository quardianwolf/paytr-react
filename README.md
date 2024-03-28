# PAYTR REACT (with Frameworks) Integration

The integration package for <a href="https://www.paytr.com/" target="_blank" rel="nofollow">PAYTR</a> payment system provider for React and other React frameworks.

This package supports both iframe API and direct API payment systems.

# Getting started

1- Install the paytr-react package using npm or yarn.

2- Import paytr in to your code.

    import { PayTRClient } from "paytr-react";

3- Create a paytr client with your merchant environments.

    (*** At this step, the values you enter will change depending on your choice between iframe API and direct API. Please check the documentation according to your preference and ensure variable substitution. Here, a variable has been used for direct API. ***)

    const paytr = new PayTRClient({

      merchant_id: "YOURMERCHANTID",
      merchant_key: `YOURMERCHANTKEY`,
      merchant_salt: `YOURMERCHANTSALT`,
      debug_on: true,
      no_installment: true,
      max_installment: 0,
      timeout_limit: 0,
      test_mode: false,
      non_3d: "1",
      lang: "tr",

    });

4- # Step for generating payment token

    4.1 - IframeApi

        const response = await paytr.getToken({

            merchant_oid: 'unique product id',
            payment_amount: 1500, // integer value | Check paytr documents
            currency: 'TL',
            email: 'yourmail@address.com',
            user_ip: '0.0.0.0',  // if you working in local using external ip | Check paytr documents
            user_name: 'customer name',
            user_phone: 'customer phone',
            user_address: 'customer address',
            user_basket: [
            {
            name: 'product name',
            price: '1500', // interger value | Check paytr value
            quantity: 1,
            }
            ],
            merchant_ok_url: 'https://yourdomain/success',
            merchant_fail_url: 'https://yourdomain/fail',

        });


        This code will automatically generate a hash for your basket content, create a token using merchant information, and post it to the PayTR iframe address and you will get response from paytr api when everything okay.


        Response:  {token:XXXAAAXXXXXX}

        In the final step, you can use the token received from the PayTR API either within an iframe or redirect the user to the page. For iframe examples, you can refer to the PayTR documentation.



    4.2 DirectApi

        const response = await paytr.directApi({

            user_ip: "0.0.0.0", //your ip address
            merchant_oid: "unique product id",
            payment_amount: 1500, // integer | total price | check paytr documents
            currency: "TL", //  you will check documents for the other options
            email: "customer email",
            payment_type: "card",
            installment_count: 0,
            cc_owner: "card owner name",
            card_number: "card number",
            expiry_month: "expiration month",
            expiry_year: "expiration year"
            cvv: "card security code",
            user_name: "customer name and surname",
            user_phone: "customer phone",
            user_address: "customer address",
             user_basket: [
                            {
                                name: 'product name',
                                price: '1500', // interger value | Check paytr value
                                quantity: 1,
                            }
                        ],
            merchant_ok_url: "http://localhost:3000/sepetim/odeme?success=1", // customize the url
            merchant_fail_url: "http://localhost:3000/sepetim/odeme?success=0", // customize the url

        });


        This code will automatically generate a hash for your basket content, create a token using merchant information, and post it to the PayTR directApi address and you will get response from paytr api when everything okay.

        Response: some scripts

        It will redirect you to the 3D secure page.



# WARNING

This package is not affiliated with " PayTR Ödeme ve Elektronik Para Kuruluşu A.Ş" It has been developed voluntarily by a software developer.

Contact:https://github.com/quardianwolf
