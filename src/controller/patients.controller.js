import database from '../config/mysql.config.js' ;
import Response from '../domain/response.js';
import logger from '../uti/logger.js';
import Query from '../query/patient.query.js';


const HttpStatus = {
    OK:{Code:200 , status:'OK'},
    CREATED:{code:201,status:'CREATED'},
    NO_CONTENT:{Code:204 , status:'NO CONTENT'},
    BAD_REQUEST:{Code:400 , status:'BAS_REQUEST'},
    NOT_FOUND:{Code:404 , status:'NOT_FOUND'},
    INTERNAL_SERVER_ERROR:{Code:500 , status:'INTERNAL_SERVER_ERROR'},

};
export default HttpStatus ; 