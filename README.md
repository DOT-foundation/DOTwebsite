# DOTwebsite
Donors of tomorrow NPO website 

Run `npm i` to install necassary packages.

Run `node .` to start webpage at .env PORT, default `:8080`.

Email API:

`/contact-us`:

Frontend

  POST request with body:
  
    ```
    {
      "name":"Name",
      "message": "Message"
    }
    ```

Backend

  Replace .env `email` with email

  Replace .env `password` with App Password (generate from [here](https://support.google.com/mail/answer/185833?hl=en))
