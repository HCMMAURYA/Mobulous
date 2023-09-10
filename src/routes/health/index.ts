import { Router } from "express";
import { healthChecker } from "./controller";
import * as sodium from '@devtomio/sodium';
const { public_key, secret_key } = sodium.crypto_box_keypair();

const router = Router();

router.get("", healthChecker);

router.get("/pub-sec", async (req, res) => {
    const _public_key = btoa(public_key.toString().replace(/\,/g, ""));
    console.log(public_key);
    const jss = {
        "country": "IND",
        "city": "*",
        "type": "BPP",
        "subscriber_id": "https://ondc.hulsecure.in",
        "subscriber_url": "https://ondc.hulsecure.in",
        "domain": "nic2004:52110",
        "signing_public_key": "V3K51SeY5io3uXbEIkNUlWuiv6clK4e+ln5P3foq9yw=",
        "encr_public_key": "MCowBQYDK2VuAyEAS1JmYBMxw5wMl1NWF9bV7Py7iVYgy3WeJ1Vwzny66H8=",
        "created": "2022-06-28T09:55:31.562Z",
        "valid_from": "2022-06-28T09:55:31.562Z",
        "valid_until": "2023-06-28T09:55:31.562Z",
        "updated": "2022-06-28T09:55:31.562Z"
    }

    res.status(200).json({
        public_key,
        secret_key
    })
});



export default router;

// w6FE8VZUMO0BBrkf85g3jyw36chDogNaqUb2NajaF64=
// BpcZFCw9hHEz3h7Jf/35gJUACajjKLQR4SEVGYTguHM=
// awGPjRK6i/Vg/lWr+0xObclVxlwZXvTjWYtlu6NeOHk=
// U+GJhXWLgIcx1DPYTHCG+WRjKLxqZegxuwcs3AEiRkg=
// MCowBQYDK2VuAyEA7V95QXJtKSLPWWlqHqaQKybtnbTtpXTjiXalrEqKNSg=
//MCowBQYDK2VwAyEA66v/MCPRd7ubF+BiL2ZmaMrKIFiX6nUFOlRYIMSsRMs=


// MCowBQYDK2VuAyEAfjWTk26QszHlEBpb5Ns9bzP90prfEgc16PhXOGEFUz4=
// iBGtXDIqdlzbbf065GSb6eGexdy9Qfa4uT8u9lb3/0g=