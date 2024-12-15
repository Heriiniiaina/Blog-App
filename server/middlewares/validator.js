import Joi from "joi";
export const registerSchema = Joi.object({
    nom:Joi.string().min(3).required().messages({
        "string.empty":"Le nom est obligatoire",
        "string.min":"Le nom doit au moins contenir 3 caractère"
    }),
    prenom:Joi.string().required().min(3).messages({
        "string.empty":"Le prenom est obligatoire",
        "string.min":"Le prenom doit au moins contenir 3 caractère"
    }),
    email:Joi.string().email().required().messages({
        "string.email":"Veuillez entrer un email valide",
        "string.empty":"L'email est obligaoire"
    }),
    password:Joi.string().min(6).messages({
        "string.min":"Le mot de passe doit au moins contenir 6 caractères",
        "strin.empty":"Le mot de passe est oblligatoire"
    })

})