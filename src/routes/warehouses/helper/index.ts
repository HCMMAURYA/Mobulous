import axios from "axios";
import { config } from "../../../utils/config";
import { emailTemp, forgetEmailTemp } from "./email";
import { orderCreateMail } from "./orderCreateSendMAil";
export const createPassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 7;
    let password = "";
    for (let i = 0; i <= passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    return password
}

export const newUserPasswordEmail = async (email: string, password: string, name: string, type: string) => {
    try {
        await axios({
            url: "https://api.mailjet.com/v3.1/send",
            method: "POST",
            headers: {
                Authorization: `Basic ${config.emailApiKey}`
            },
            data: {
                "Messages": [
                    {
                        "From": {
                            "Email": "harishmaurya0808@gmail.com",
                            "Name": "Harish"
                        },
                        "To": [
                            {
                                "Email": email,
                                "Name": name
                            }
                        ],
                        "Subject": "ONDC | The U Shop",
                        "TextPart": "",
                        "HTMLPart": type === "new" ? emailTemp(password) : forgetEmailTemp(password) ,
                        "CustomID": "AppGettingStartedTest"
                    }
                ]
            }
        })
    } catch (error) {
        return false;
    }
}


export const orderCreateSendEmail = async ( name:string,email:string, title: string,totalPrice: string,orderId:string) => {
    console.log(" newUserPasswordEmail name----------",name)
    console.log(" newUserPasswordEmail email---------------------",email)
    console.log(" newUserPasswordEmail title----------",title)
    console.log(" newUserPasswordEmail totalPrice---------------------",totalPrice)
    console.log(" orderId---------------------",orderId)

   

    try {
        await axios({
            url: "https://api.mailjet.com/v3.1/send",
            method: "POST",
            headers: {
                Authorization: `Basic ${config.emailApiKey}`
            },
            data: {
                "Messages": [
                    {
                        "From": {
                            "Email": "harish.maurya@ens.enterprises",
                            "Name": "harish"
                        },
                        "To": [
                            {
                                "Name": name,
                                "Email":email
                            }
                        ],
                        "Subject": "ONDC | VLCC",
                        "TextPart": "",
                        "HTMLPart": orderCreateMail(name,title,totalPrice,orderId),
                        "CustomID": "AppGettingStartedTest"
                    }
                ]
            }
        })
    } catch (error) {
        return false;
    }
}
