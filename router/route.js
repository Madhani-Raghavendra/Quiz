import { Router } from "express";
import * as allfun from "../controller/cotroller.js";

const route = Router()

// first method
// all question function
route.get('/questions', allfun.getQuestion)
route.post('/questions', allfun.insertQuestion)
route.delete('/questions', allfun.dropQuestion)



//second method
// all result function
route.route('/result')
    .get(allfun.getResult)
    .post(allfun.storeResult)
    .delete(allfun.dropQuestion)




export default route