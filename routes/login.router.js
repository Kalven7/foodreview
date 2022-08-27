import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const login = express.Router();
 login.post('/', async (req,res) =>
    //receber as informaçoes do login   
 {
    const {email , password } = req.body;
    //Buscar email no banco de dados e armazenar
const registeredUser = await User.findOne(
    {where : { email } }
).catch(
    (err) => {
        console.log("Error: ", err);
    }
 );
 if(!registeredUser)
    return res
    .status(400)
    .json({message: "Email ou Senha inválidos."})

//Validar senha do usuario
if(!bcrypt.compareSync(password , registeredUser.password))
    return res
   .status(400)
   .json({message: "Email ou Senha inválidos."})

        //geraçao do token
   const token = jwt.sign(
            //payload: o que sera armazenado no token
    {
        id: registeredUser.id,
        email: registeredUser.email
        }, 
        // secret or private key
        process.env.JWT_SECRET,
            {
                expiresIn:'1h'
            }
   );
            //envia confirmação e token para usuário
            res.json({
                message: "Bem-vindo!",
                token:  token
        })

});
export default login;