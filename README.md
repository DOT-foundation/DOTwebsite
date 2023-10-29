# DOTwebsite
## NPM
Donors of tomorrow NPO website 

Run `npm i` to install necassary packages.

Run `node .` to start webpage at .env PORT, default `:8080`.

Email API:


Frontend

  `/contact-us`:
  
    POST request with body:
    
      {
        "name":"Name",
        "message": "Message"
      }

Backend

  Replace .env `email` with email

  Replace .env `password` with App Password (generate from [here](https://support.google.com/mail/answer/185833?hl=en))

## SQL
To run the website with an SQL server first install [XAMMP](https://www.apachefriends.org) and start the Apache & MySQL servers. it should look like this.

![image](https://github.com/powplowdevs/DOTwebsite/assets/74332267/d1017885-13c4-4ecc-b0ea-5a121f9a9d6c)

Next hit admin for MySQL you should see the PHPmyadmin screen. Click *new* on the far left, and set it up like this

![image](https://github.com/powplowdevs/DOTwebsite/assets/74332267/71b4b7d7-8f96-402d-928c-ac4640917fd6)

Then this.

![image](https://github.com/powplowdevs/DOTwebsite/assets/74332267/e27edd70-6e16-4e20-9349-5c063e8b0e8c)

Then this.

![image](https://github.com/powplowdevs/DOTwebsite/assets/74332267/186be6f3-ebd7-4699-b985-5c9fb952256d)

Hit SQL on the top bar then paste in this code
```
INSERT INTO lightdata (DonationAmount, DonationTime, LightColor, LightID, ShowName, ShowAmount)
SELECT -1, NOW(), null, num, null, null
FROM (
  SELECT 1 AS num UNION ALL
  SELECT 2 UNION ALL
  SELECT 3 UNION ALL
  SELECT 4 UNION ALL
  SELECT 5 UNION ALL
  SELECT 6 UNION ALL
  SELECT 7 UNION ALL
  SELECT 8 UNION ALL
  SELECT 9 UNION ALL
  SELECT 10 UNION ALL
  SELECT 11 UNION ALL
  SELECT 12 UNION ALL
  SELECT 13 UNION ALL
  SELECT 14 UNION ALL
  SELECT 15 UNION ALL
  SELECT 16 UNION ALL
  SELECT 17 UNION ALL
  SELECT 18 UNION ALL
  SELECT 19 UNION ALL
  SELECT 20 UNION ALL
  SELECT 21 UNION ALL
  SELECT 22 UNION ALL
  SELECT 23 UNION ALL
  SELECT 24 UNION ALL
  SELECT 25 UNION ALL
  SELECT 26 UNION ALL
  SELECT 27 UNION ALL
  SELECT 28 UNION ALL
  SELECT 29 UNION ALL
  SELECT 30 UNION ALL
  SELECT 31 UNION ALL
  SELECT 32 UNION ALL
  SELECT 33 UNION ALL
  SELECT 34 UNION ALL
  SELECT 35 UNION ALL
  SELECT 36 UNION ALL
  SELECT 37 UNION ALL
  SELECT 38 UNION ALL
  SELECT 39 UNION ALL
  SELECT 40 UNION ALL
  SELECT 41 UNION ALL
  SELECT 42 UNION ALL
  SELECT 43 UNION ALL
  SELECT 44 UNION ALL
  SELECT 45 UNION ALL
  SELECT 46 UNION ALL
  SELECT 47 UNION ALL
  SELECT 48 UNION ALL
  SELECT 49 UNION ALL
  SELECT 50 UNION ALL
  SELECT 51 UNION ALL
  SELECT 52 UNION ALL
  SELECT 53 UNION ALL
  SELECT 54 UNION ALL
  SELECT 55 UNION ALL
  SELECT 56 UNION ALL
  SELECT 57 UNION ALL
  SELECT 58 UNION ALL
  SELECT 59 UNION ALL
  SELECT 60 UNION ALL
  SELECT 61 UNION ALL
  SELECT 62 UNION ALL
  SELECT 63 UNION ALL
  SELECT 64 UNION ALL
  SELECT 65 UNION ALL
  SELECT 66 UNION ALL
  SELECT 67 UNION ALL
  SELECT 68 UNION ALL
  SELECT 69 UNION ALL
  SELECT 70 UNION ALL
  SELECT 71 UNION ALL
  SELECT 72 UNION ALL
  SELECT 73 UNION ALL
  SELECT 74 UNION ALL
  SELECT 75 UNION ALL
  SELECT 76 UNION ALL
  SELECT 77 UNION ALL
  SELECT 78 UNION ALL
  SELECT 79 UNION ALL
  SELECT 80 UNION ALL
  SELECT 81 UNION ALL
  SELECT 82 UNION ALL
  SELECT 83 UNION ALL
  SELECT 84 UNION ALL
  SELECT 85 UNION ALL
  SELECT 86 UNION ALL
  SELECT 87 UNION ALL
  SELECT 88 UNION ALL
  SELECT 89 UNION ALL
  SELECT 90 UNION ALL
  SELECT 91 UNION ALL
  SELECT 92 UNION ALL
  SELECT 93 UNION ALL
  SELECT 94 UNION ALL
  SELECT 95 UNION ALL
  SELECT 96 UNION ALL
  SELECT 97 UNION ALL
  SELECT 98 UNION ALL
  SELECT 99 UNION ALL
  SELECT 100
) AS numbers;
```

hit ctrl+enter to run the code, then on the top bar select browse, you should now see the populated list, but there is one more thing to do. Go back to the SQL tab and paste this code
```
ALTER TABLE lightdata
ADD PRIMARY KEY (LightID);
```
now hit ctrl+enter and open the structure tab, you should see a key next to the lightID column like this.

![image](https://github.com/powplowdevs/DOTwebsite/assets/74332267/bf68eeef-6283-4acf-b2b5-c988acbf0e8f)

now the SQL server is up we need to move our code onto an XAMPP webserver, but don't worry it's not as long as we just did. navigate to C:\xampp\htdocs and then copy in our entire repo. Don't delete anything in the folder, just copy what we have into it. Now open [http://localhost/public/](url) and you should see the website with everything working.
