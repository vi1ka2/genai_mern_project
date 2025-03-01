const aiService = require("../services/ai.services")

module.exports.getResponse = async (req, res)=>{
    const code = req.body.code;

    if(!code){
        return res.status(400).json({error: "Prompt is required"})
    }
    const response = await aiService(code)

    res.send(response);
}